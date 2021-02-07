function repeatContentOfBrackets (str) {
    var norepeatStr = '', repeation = 0, repeationStr = '', resultStr = '', i = 0, k = 0, content = '', modelBegin = 0, nestCount = 0, contentBegin = 0;
    var stack = [];
    if (!str || typeof str != 'string') return str;
    var strLen = str.length;
    for (; i < strLen; i++) {
        var cur = str[i];
        if (cur === '[') {
            k = i - 1;
            while (/\d/.test(str[k]) && k >= modelBegin) {
                repeationStr = str[k] + repeationStr;
                k--;
            }
            if (repeationStr.length === 0) { //重复模式匹配失败,从下一个字符开始尝试匹配
                norepeatStr = str.substring(contentBegin, i+1);
                if (nestCount === 0) { //如果没有外层待闭合重复模式
                    resultStr += norepeatStr;
                } else {//有外层待闭合模式,此前尝试匹配的内容,作为外层模式的重复内容
                    stack[nestCount-1].content += norepeatStr;
                }
                modelBegin = i + 1;
            }else {//进入匹配重复内容模式
                repeation = +repeationStr;
                norepeatStr = k > contentBegin ? str.substring(contentBegin, k + 1) : '';
                stack.push({
                    "startStr": norepeatStr,
                    "repeation": repeation,
                    "content": ''
                });
                nestCount++;
                repeationStr = '';
                norepeatStr = '';
            }
            contentBegin = i + 1;
        }
        if (cur === ']') {//匹配到一个模式,开始处理
            if (nestCount === 0) { //没有与之对应的"]",模式匹配失败,从下一个字符开始尝试匹配;
                resultStr += str.substring(modelBegin, i+1);
            }else {
                content = str.substring(contentBegin, i);
                stack[nestCount-1].content += content;
                var model = stack.pop();
                nestCount --;
                var modelResult = model.startStr + model.content.repeat(model.repeation);
                if (nestCount === 0) {
                     resultStr += modelResult;
                }else {
                    stack[nestCount-1].content += modelResult;
                }
            }
                modelBegin = i + 1;
                contentBegin = i + 1;
        }
    }
    if (stack.length)  return str;
    return resultStr + str.substring(contentBegin,strLen);
}
module.exports = repeatContentOfBrackets;

//todo: nestCount 其实就是 stack.length。 维护nestCount 与 stack.length的一致性  VS stack.length多次求值