// add(1)(2,3)(4,5) 输出 15

// 柯里化,对于x+y的实现
var currySum = function (a) {
    var add = function (b) {
        return a+b;
    };
    return add;
};

// 解法1:
// function add () {
//     var args = [].slice.call(arguments);
//
//     var fn = function () {
//         var arg_fn = [].slice.call(arguments);
//         return add.apply(null, args.concat(arg_fn));
//     }
//
//     fn.valueOf = fn.inspect = function() { // valueOf trick browser; inspect trick node
//         return args.reduce((a, b) => a + b);
//     }
//     return fn;
// }


// 解法二:
function add(...numbers) {
    add.numbers = (add.numbers || []).concat(numbers);
    add.valueOf = add.inspect = () => {
        const c = add.numbers.reduce((n, c) => c+=n, 0);
        add.numbers = []; // 链式调用的最后一步 清空numbers属性,以避免影响下次一调用
        return c;
    }
    return add;
}

console.log(add(1)(2)(3,4));
console.log(add(1,2)(10));

// 解法2利用对象属性来存储过程数据 解法二,通过传参来更新过程数据
// todo:在浏览器中,输出会带 f 前缀

