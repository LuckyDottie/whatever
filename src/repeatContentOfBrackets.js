function repeatContentOfBrackets(str) {
    if (str === undefined) return;
    var reg = /^([a-zA-Z]*)(\d+\[.+\])*[a-zA-Z]*$/;//嵌套模式的合法性,递归时检查
    var regModel = str.match(reg);
    if (!regModel) return str; //输入不合法直接返回
    if (!regModel[2]) return regModel[1];
    var result = regModel[1];
    //处理并列模式,eg:3[ad]4[xs]
    var models = splitModels(str);
    var modelsLen = models.length;
    if (modelsLen === 1) {
        var model = models[0];
        if (!model.hasNest) {
            return result + model.content.repeat(model.repeation);
        }
        if (!model.content.match(reg)) return;// //如果嵌套内容不合法,则直接返回
        return result + repeatContentOfBrackets(model.content).repeat(model.repeation);
    }else {
        for (var i = 0; i < modelsLen; i++) {
            // if (!repeatContentOfBrackets(models[i].modelStr)) {//某些并列模式中可能存在嵌套结构,如果内层返回undefined,则整个会返回undefined
            //     return;
            // }
            result += repeatContentOfBrackets(models[i].modelStr);
        }
        return result;
    }
    
}


function splitModels(str) {
    var result = [];
    while (str) {
        if (!popModel(str)) {
            break;
        }
        var matched = popModel(str);
        result.push(matched);
        str = matched.lastStr;
    }
    return result;
}

function popModel(str) {
    var nestCount = 0 ,i;
    var begin = str.indexOf('[');
    var hasNest = false;
    if (begin === -1) {
        return {
            "modelStr": str,
            "lastStr": '',
            "hasNest": hasNest
        };
    }
    var arr = str.split('');
    var len = str.length;
    for (i = begin + 1; i < len; i++) {
        if (arr[i] === ']' && nestCount === 0) {
            break;
        }else if (arr[i] === ']') {
            nestCount -- ;
        } else if (arr[i] === '[') {
            hasNest = true;
            nestCount ++ ;
        }
    }
    var content = str.substring(begin + 1,i);
    var modelStr = str.substring(0,i+1);
    var repeation = modelStr.match(/(\d+)/)[1];
    if (i < len) {
        return {
            "modelStr": modelStr,
            "content": content,
            "repeation": repeation,
            "lastStr": str.substring(i+1),
            "hasNest": hasNest
        };
    }
}
module.exports = repeatContentOfBrackets;
