function parseRepeat(str) {
  if (!str) return str;
  var buffer = '';
  var i = 0;
  while (true) {
    if (i === str.length) break;
    var c = str[i];
    var next = str[i + 1];
    if (/\d/.test(c) && next === '[') {
      var closeParenIndex = findCloseParen(str.slice(i + 1));
      let substr = str.slice(i + 1).slice(1, closeParenIndex);
      buffer += parseRepeat(substr).repeat(c);
      i = i + closeParenIndex + 2;
      continue;
    }
    i++;
    buffer = buffer + c;
  }
  return buffer;
}

function findCloseParen(str) {
  var num = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c === '[') { num++; continue; }
    if (c === ']') { num--; if (num == 0) break; }
  }
  return i;
}

module.exports = parseRepeat;
