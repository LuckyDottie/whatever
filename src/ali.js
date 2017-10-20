function combine(arr) {
//   todo:  输入校验
    if (arr.length <= 1) {
        return arr;
    }
    return arr.reduce(function (arr1,arr2) {
        return simpleCombine(arr1, arr2);
    });
}


function simpleCombine(arr1, arr2) {
    var len1 = arr1.length;
    var len2 = arr2.length;
    if (len1 === 0) {
        return arr2
    } else if (len2 === 0) {
        return arr1;
    }
    var arrTmp1 = repeatArr(arr1, len2);
    var arrTmp2 = [];
    for (let i = 0; i < len1; i++) {
        arrTmp2 = arrTmp2.concat(arr2);
    }
    var result = [];
    for (let i = 0; i < arrTmp1.length; i++ ) {
        result[i] = (Array.isArray(arrTmp1[i])? arrTmp1[i] : [arrTmp1[i]]).concat([arrTmp2[i]]);
    }
    return result;
}

/**
 * @param arr: 需要重复的数组
 * @param n: 数组中每个元素需要重复的次数
 * */
function repeatArr(arr, n) {
    var tmp =  arr.map(function (item) {
        var repeatedItem = [];
        for (let i = 0; i < n; i++) {
            repeatedItem.push(item);
        }
        return repeatedItem;
    });
    return tmp.reduce(function (result, cur) {
        return result.concat(cur);
    },[]);
}

// 示例
const arr = [[1,2],[3,4],[5,6]];
console.log(combine(arr));

//  要求:
// const arr = [[1,2],[3,4],[5,6]];
// 1,3,5
// 1,3,6
// 1,4,5
// 1,4,6
// 2,3,5
// 2,3,6
// 2,4,5
// 2,4,6