function repeatContentOfBrackets (str) {
    var reg = /^[a-zA-Z]*(\d+\[.+\])*[a-zA-Z]*$/;//嵌套模式的合法性,递归时检查
    var norepeatStr = '', repeation = 0, repeationStr = '', resultStr = '', i = 0, openBracket = false, content = '', modelBegin = 0;
    var stack = [];
    if (!str || typeof str != 'string') return str;
    if (!reg.test(str)) return str;
    var strLen = str.length;
    for (; i < strLen; i++) {
        var cur = str[i];
        if (/[a-zA-Z]/.test(cur)) {
            if (openBracket) {//如果处于中括号内容匹配状态,那么字母是重复的内容
                content += cur;
            }else {//字母不再本次模式匹配中重复
                norepeatStr += cur;
            }
        }
        if (/\d/.test(cur))  repeationStr += cur;
        if (cur === '[') {
            openBracket = true;
            repeation = + repeationStr;
            if (!!content) stack[stack.length-1].content += content;//如果content非空,说明有外层[]
            content = '';
            stack.push({
                "startStr": norepeatStr,
                "repeation": repeation,
                "content": ''
            });
            repeationStr = '';
            norepeatStr = '';
        }
        if (cur === ']') {//匹配到一个模式,开始处理
            if (stack.length === 0) { //模式匹配失败直接返回;
                resultStr += str.substring(modelBegin,i+1);
            }else {
                openBracket = false;
                stack[stack.length - 1].content += content;
                var itemResult = repeat(stack.pop());
                if (stack.length) {
                    stack[stack.length - 1].content += itemResult;
                } else {
                    resultStr += itemResult + norepeatStr;//此处norepeatStr,相当于模式的后缀
                }
                modelBegin = i + 1;
                content = '';
            }
        }
    }
    if (stack.length)  return str;
    return resultStr + norepeatStr;
}

function repeat(repeatModel) {
    if (!repeatModel.repeation) return repeatModel.startStr + '[' + repeatModel.content + ']';
    return repeatModel.startStr + repeatModel.content.repeat(repeatModel.repeation);
}

module.exports = repeatContentOfBrackets;