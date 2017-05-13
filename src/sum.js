function bigIntegerSum(a, b) { //允许以0开头的值
    if (!a || !b)    return console.error('strAdd function need tow params');
    a = a.toString().trim();
    b = b.toString().trim();
    var numberA = new StrNum(a);
    var numberB = new StrNum(b);
    if (!numberA.isNum || !numberB.isNum) {
        console.error("params error: params can only contain digits");
        return;
    }
    if (numberA.sign === numberB.sign) {
        return numberA.sign + addition(numberA.number, numberB.number);
    }else {
        var compRet = strNumAbsCompare(numberA, numberB);
        if (compRet === null) return 0;
        return compRet.max.sign + subtraction(compRet.max.number, compRet.min.number);
    }
}


function addition(a,b) {
    var maxLen = Math.max(a.length, b.length);
    a = padStart(a.split(''), maxLen, 0);
    b = padStart(b.split(''), maxLen, 0);
    var carry = 0;
    var sum = [];
    for (var i = maxLen - 1; i >= 0; i--) {
        var t = ((+a[i]) + (+b[i]) + carry);
        sum[i] = t % 10;
        if (t >= 10)  carry = 1;

    }
    return carry > 0 ? carry + sum.join('') : sum.join('');
}

//返回一个字符串
function subtraction(max,min) {
    var maxLen = Math.max(max.length, min.length);
    max = padStart(max.split(''),maxLen,0);
    min = padStart(min.split(''),maxLen,0);
    var borrow = 0;
    var result = [];
    for (var i = maxLen - 1; i >= 0; i--) {
        var maxCur = +max[i], minCur = +min[i];
        if (maxCur - borrow >= minCur) {
            result[i] =  maxCur - minCur - borrow;
            borrow = 0;
        } else {
            result[i] = maxCur + 10 - minCur - borrow;
            borrow = 1;
        }

    }
    return trimZero(result.join(''));
}

function padStart(arr,length, value) {
    var offset = length - arr.length;
    if (offset <= 0) return arr;
    while (offset > 0) {
        arr.unshift(value);
        offset --;
    }
    return arr;
}

//比较两个字符串数字的绝对值大小,参数是带符号的字符串数字对象
function strNumAbsCompare(strNum1, strNum2) {
    var max,min,i = 0, a = strNum1.number, b = strNum2.number;
    var maxLen = Math.max(a.length, b.length);
    a = padStart(a.split(''), maxLen, 0);
    b = padStart(b.split(''), maxLen, 0);
    for (; i < maxLen; i ++) {
        if (+a[i] > +b[i]) {
            max = strNum1;
            min = strNum2;
            break;
        } else if (+b[i] > +a[i]) {
            max = strNum2;
            min = strNum1;
            break;
        }
    }
    if (i === maxLen) return null;
    return {"max": max, "min" : min};
}


function trimZero(str) {
    return str.replace(/^0+/,'');
}

function StrNum(str) {
    var reg = /^([-+]?)(\d+)$/;
    var check = str.match(reg);
    this.isNum = !!check;
    if (this.isNum) {
        this.sign = (check[1] === '+') ? '' : check[1];
        this.number = trimZero(check[2]);
    }

}

module.exports = bigIntegerSum;