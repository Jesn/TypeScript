/****使用reference 和path 引入jquery.d.ts 文件使用jquery$就不会报错.**/
/// <reference path="Scripts/plugins/ts/jquery/jquery.d.ts" />
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
//枚举Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
    Color1[Color1["Yellow"] = 4] = "Yellow";
})(Color1 || (Color1 = {}));
;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
    Color2[Color2["Yellow"] = 4] = "Yellow";
})(Color2 || (Color2 = {}));
;
var Human = (function () {
    //构造函数
    function Human() {
    }
    Human.prototype.Behavior = function (username, age, sex, nice) {
        this.UserName = username;
        this.Age = age;
        this.Sex = sex;
        this.Nice = nice;
        //: 号代表应该是代表继承的意思
        //1、声明一个boolean 类型默认值是false
        //在JavaScript 和TypeScript 中也具有最基本的逻辑断言值true/false，采用’boolean’类型。
        var isFlag = false;
        //2、声明一个number类型值
        //如JavaScript，TypeScript 所有的数值类型采用浮点型计数，其类型为‘number’。
        var orderNumber = 100;
        //3、声明一个String类型
        //在webpages 的JavaScript 或者服务端的应用程序最基本的功能就是处理文本数据。在其他语
        //言中大多使用’string’去代表文本数据类型。
        //TypeScript 和JavaScript 一样也是用双引号(“)或者单引号包裹文本数据
        var name = "TypeScript类型";
        //4、声明数组
        //在TypeScript 中如JavaScript 一样允许我们操结合操作。数组类型可以使用下边两种方式之
        //4.1、数据类型之后带上’[]‘:
        var list = [1, 2, 3];
        //4.2、泛型的数组类型：
        var list1 = [1, 2, 4];
        //5、枚举Enum
        //TypeScript 为JavaScript 新增了枚举这种标准的集合数据类型。
        //和在c#中一样，枚举是为一组数值类型一组更友好的名称
        //5.1、enum Color { Red, Green, Blue, Yellow };
        var c = Color.Blue; //从枚举里面拿出Blue出来赋给一个叫c 的变量
        //5.2、手动枚举所有值都设置
        //默认枚举类型其实数值从0 开始，你可以可用手动设置某一个成员的数值。
        //例如我们可以将上文的起始值定为1：
        //enum Color1 { Red = 1, Green = 2, Blue = 3, Yellow = 4 };
        var c1 = Color1.Blue;
        //5.3、手动设置全部的枚举成员
        var colorName = Color2[2];
        console.log("输出的是枚举名称：" + colorName);
        //6、 any
        //any’类型是一种强大的兼容存在的JavaScript 库的类型系统。
        //他允许跳过TypeScript 的编译时类型的检查。
        //‘any’类型对于我们只知道部分数据类型，但是不是所有的数据类型的类型系统。
        //如一个混合了多种类型的集合数组
        var notSure = 4; //notsure是一个不确定的值，默认先给一个数字类型4
        notSure = "notSure类型变更为字符串"; //改变这个值为字符串
        notSure = false; //最终确认值为Boolen
        console.log("notSure的最终值为:" + notSure);
        var list2 = [1, true, "free"];
        console.log("any类型的数组变动之前的值：" + list2);
        list2[1] = 100;
        console.log("any类型的数组变动之后的值：" + list2);
    };
    //7、void 和‘any’相对的数据类型则是’Void‘，它代表没有任何数据类型。
    //我们常用的一个方法没有任何返回值：,格式如：function doMain:void{}
    Human.prototype.warnUser = function () {
        console.log("这是一个没有返回值的方法，格式如：function doMain:void{}");
    };
    Human.prototype.IncludeJquery = function () {
        console.log("引入了Jquery");
    };
    Human.prototype.Speaker = function (content) {
        console.log("说话的内容：" + content);
    };
    return Human;
})();
/**返回void 值*/
function setTableRowHtml1() {
    var userName = "";
    $("tr").each(function () {
        userName = $(this).find("td:eq(0)").html();
    });
    console.log(userName);
}
/**返回string 一个值*/
function setTableRowHtml2() {
    var username = "";
    $("tr").each(function () {
        username = $(this).find("td:eq(0)").html();
    });
    return username;
}
function setTableRowColor() {
    $("tr").each(function () {
        $(this).find("td:eq(1)").css({ color: "red", background: "blue" });
    });
}
/**获取数组类型为any的值*/
function getColorList() {
    var colorList = ["Green", "Yellow", "Blue"]; //any 不知道类型
    $.each(colorList, function (key, value) {
        console.log(key + "=" + value);
    });
    //$(colorList).each(function (key, value) {
    //    console.log(key + "=" + value);
    //});
}
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var human = new Human();
    human.Behavior("张三", 23, 1, "小张");
    human.warnUser();
};
$(function () {
    var human = new Human();
    //human.IncludeJquery();//关闭测试
    setTableRowHtml1();
    var userName = setTableRowHtml2();
    console.log(userName);
    getColorList();
    setTableRowColor();
});
//# sourceMappingURL=app.js.map