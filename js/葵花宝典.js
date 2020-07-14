/*
 * @Author: kirin.xulong 
 * @Date: 2020-04-09 09:08:10 
 * @Last Modified by: kirin.xulong
 * @Last Modified time: 2020-07-10 10:08:50
 */

//14 jsonp 跨域原理
//动态添加script标签， 利用函数执行传参的方式进行数据传输
var el = document.createElement("script");
el.src = "http:localhost:8080/art-send?name=1&age=2&callback=fun";
$("body").appendchild(el);

function fun(res) {
    console.log(res.name + res.age);
};

//服务端
route.get('/art-send', (req, res) => {
    let data = {
        message: 'success',
        name: req.query.name,
        age: req.query.age
    }
    data = JSON.stringify(data);
    res.end('fun (' + data + ')');
})


//ajax原理
var xmlHttp;

if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    xmlHttp = new ActiveXObject("Microsoft,XMLHTTP");
}

var url = "http://127.0.0.1:8080/admin/getAjax";
xmlHttp.open("POST", url, true);

xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var obj = document.getElementById("myObject");
        obj.innerHTML = xmlHttp.responseText;
    } else {
        console.log("ajax has fatall error");
    }
}
xmlHttp.send();

//jQuery封装的ajax
$.ajax({
    type: "method",
    contentType: "application/json;charset = utf-8",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {

    },
    error: function (e) {

    }
});

//冒泡排序
var arr = [12, 2, 23, 14, 25];
var temp;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);

//字符串前后去空格
var kk;

function trim(str) {
    if (typeof str == "string") {
        kk = str.replace(/^(s*)|(s*)$/g, "");
    }
    console.log(str);
}

//数组去重操作
var arr = new Array();
arr = [1, 1, 2, 3, 4, 5, 6, 4, 4]; //源
var array = []; //去重后
//1. 利用Set
function arrayNorepeat(arr) {
    if (!Array.isArray(arr)) {
        console.log("type error");
        return;
    }
    array = Array.from(new Set(arr));
    return array;
}

//2.利用indexOf();
function arrayNo(arr) {
    if (!Array.isArray(arr)) {
        console.log("type error");
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i]);
        }
    }
    return array;
}

//3.利用数组的sort()函数
function arrayN(arr) {
    if (!Array.isArray(arr)) {
        console.log("type error");
        return;
    }
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            array.push(arr[i]);
        }
    }
    return array;
}

//4.利用map
function arrayNom(arr) {
    if (!Array.isArray(arr)) {
        console.log("type error");
        return;
    }
    let hasmap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (hasmap.has(el)) {
            hasmap.set(el, true);
        } else {
            hasmap.set(el, false);
            array.push(el);
        }
    }
    return array;
}
//5.不考虑兼容性的前提
array = Array.from.apply(new Set(arr));

//函数定义创建与作用域问题

function n() {
    if (2 > 1) {
        arr = 10;
        brr = 20;
        // 与 由var所声明的有初始值的undefined变量不同，
        // 由let所声明的变量只有在定义被执行时才被初始化，
        // 在变量初始化之前访问会造成referenceerror，
        // 该变量存于自块顶到变量初始化处理的 暂存死区 中
        let arr;
        var brr;
        console.log(arr);
        console.log(brr);
    }
}

(function d(num) {
    console.log(num);
    var num = 20;

    function num() {};
}(100));

//数组降维

var arr = [
    [2, 3],
    [4, 4, 5]
];

function jw(arr) {
    return Array.prototype.concat.apply([], arr);
}

//代码执行--91 数组和对象作为key值时的 转型 不同； 闭包
var a = {};
var b = {
    key: "b"
};
var c = {
    key: "c"
};
var d = [3, 5, 6];
a[b] = [123];
a[c] = [345];
a[d] = [333];
console.log(a[b]);
console.log(a[c]);
console.log(a[d]);

//代码执行--92  调用函数值的传递；闭包
var a = function (val, index) {
    console.log(index);
    return {
        fn: function (name) {
            return a(name, val);
        }
    }
};
var b = a(0);
debugger
console.log(b);
console.log(b.fn(1));
console.log(b.fn(2));
console.log(b.fn(3));

var value = 11148;
return parseInt((value / (10 ** (value.toString().length - 2)) + 1) * (10 ** (value.toString().length - 2)));

// EventLoop事件循环机制
//栈在js中被称为执行栈、调用栈，一种先进后出的数组结构
function foo(b) {
    var a = 10;
    return a + b + 11;
};

function bar(x) {
    var y = 3;
    return foo(x * y);
};
console.log(bar(7));

//js的单线程执行
console.log("mission start");
setTimeout(() => {
    console.log("timer1 over");
}, 1000);

setTimeout(() => {
    console.log("timer2 over");
}, 1000);
console.log("mission complete");

//宏任务与微任务
//Pomise来处理异步
console.log('script start');

setTimeout(() => {
    console.log("timer1 over");
}, 0);

Promise.resolve().then(() => {
    console.log('promise1');
}).then(() => {
    console.log('promise2');
});

console.log('script end');

//异步编程的几种方法
//1.回调函数
function f2() {
    console.log("f2正在执行...");
}

function f1(callback) {
    setTimeout(() => {
        callback();
    }, 1000)
};
//2.事件驱动 
//任务执行不取决于代码顺序，而取决于某个事件是否触发
function f2() {
    console.log("f2正在执行...");
}

function f1() {
    setTimeout(() => {
        f1.trigger('done');;
    }, 1000)
};
f1.on('done', f2);

//3.发布/订阅  观察者模式， 这是通过jQuery的插件来实现的
jQuery.subscribe('done', f2);

function f2() {
    console.log('this is a function f2');
}

function subs() {
    console.log('function f1 start');
    setTimeout(() => {
        jQuery.publish('done');
    }, 1000);
}


//119 多个函数 iife
//取决于最后 返回值的类型
var a = (function () {
    return "step_1";
}, function () {
    return "step_2";

})();
typeof a; //string

var a = (function () {
    return 123;
}, function () {
    return "step_2";

})();
typeof a; //string

var a = (function () {
    return 123;
}, function () {
    return;

})();
typeof a; //undefined

var b = new Object();
var a = (function () {
    return 123;
}, function () {
    return b;

})();
typeof a; //object


// 122. setTimeout 与 setInterval
var time = 400,
    times = 0,
    max = 5;

function func() {
    times++;
    console.log('this is my time' + times);
    if (times < max) {
        setTimeout(func, time);
    } else {
        console.log("finished");
    }
}
setTimeout(func, time);

//123 判断多图片加载完毕
// jQueryObject.ready();只能判断dom结构加载完毕
var counter = 10,
    queryInterval = 50;
var pics = document.getElementsByClassName("pics");
for (var i = 0; i < pics.length; i++) {
    pics[i].onload = function () {
        counter++;
        console.log(this.id + "is loaded");
    }
}

function queryPictures(callback) {
    if (counter < pics.length) {
        console.log("current picture number is " + counter);
        setTimeout(queryPictures, queryInterval, callback)
    } else {
        console.log("all picture is loaded");
        callback();
    }
}

//126 判断是数组等其他数据类型
function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
}

//获取页面所有checkbox
function getAllcheckbox() {
    var isCheckbox = new Array();
    var input = document.getElementsByTagName("input");
    for (let i = 0; i <= input.length; i++) {
        let obj = input[i];
        if (obj.type == "checkbox") {
            isCheckbox.push(input[i]);
        }
    };
    return isCheckbox;
}

//深度比较对象函数

function deepCompare(x, y) {
    var i, l, leftChain, rightChain;

    function compare2Objects(x, y) {
        var p;

        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }

        // Compare primitives and functions.     
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
            return true;
        }

        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString();
        }

        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
            return false;
        }

        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
        }

        if (x.constructor !== y.constructor) {
            return false;
        }

        if (x.prototype !== y.prototype) {
            return false;
        }

        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
            return false;
        }

        // Quick checking of one object being a subset of another.
        // todo: cache the structure of arguments[0] for performance
        for (p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
        }

        for (p in x) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }

            switch (typeof (x[p])) {
                case 'object':
                case 'function':

                    leftChain.push(x);
                    rightChain.push(y);

                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }

                    leftChain.pop();
                    rightChain.pop();
                    break;

                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
            }
        }

        return true;
    }

    if (arguments.length < 1) {
        return true; //Die silently? Don't know how to handle such case, please help...
        // throw "Need two or more arguments to compare";
    }

    for (i = 1, l = arguments.length; i < l; i++) {

        leftChain = []; //Todo: this can be cached
        rightChain = [];

        if (!compare2Objects(arguments[0], arguments[i])) {
            return false;
        }
    }

    return true;
}

/* 原型链的继承问题 */
function A(x) {
    this.x = x;
}

A.prototype.x = 1;

function B(x) {
    this.x = x;
}

B.prototype = new A(7);

var a = new A(2);
var b = new B(3);
delete b.x;


/* 函数执行 */
var foo = {
    n: 1
};
(function () {
    console.log(foo.n);
    foo.n = 3;
    var foo = {
        n: 2
    };
    console.log(foo.n);
})(foo);
console.log(foo.n);


