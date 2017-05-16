function decodeCount(input) {
    if (!input) return 0;
    input = input.toString();
    if (!/^\d+$/.test(input)) return 0;
    var len = input.length;
    var i = 0, cur, next, nnext;
    if (len === 1) return 1;
    if (/^0|[03-9]0/.test(input)) return 0;
    for (; i < len; i++) {
        cur  = +input[i];
        next = +input[i+1];
        nnext = +input[i+2];
        if ((cur === 2) && (next <= 6 ) || (cur === 1)) {
            if (nnext !== undefined && nnext === 0) {
                i = i + 2;
                continue;
            }
            if (i+2 < len) {
                return decodeCount(input.substring(i+1)) + decodeCount(input.substring(i+2));
            }
            if (!next) {//next为0或是不存在
                return 1;
            }
            return 2;
        }
    }
    return 1;
}

module.exports = decodeCount;

/**题目:
有一个消息包含A-Z通过以下规则编码:
 
'A' -> 1
'B' -> 2
...
'Z' - > 26
 
现在给你一个加密的信息,问有几种解密的方式
// eg:'12'可以解析为'AB' 或 'L'
 */