/**获取用户信息*/
function getUserInfo(user) {
    return user.userName + "现在" + user.age + "岁了";
}
//用一个数组对象作为一个user 对象传值过getUserInfo 函数方法..参数必须要以接口IUserInfo 对应上.
//少传一个参数，typescript 会自动帮你检测报错,如果用纯javascript 去写的话，不会报错，ts 大大减少检查js 问题
//如：var userObj={userName:'周伯通'};//error
var userObj = { userName: "朵朵", age: 7, mark: "小萝莉" };
/***************创建一个对象function.**************/
function CreateSquare(config) {
    //此时newSquare 里面的参数必须与:后面里面的参数名称一致.
    var newSquare = { color: "Yellow", area: 2 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = newSquare.area * config.width;
    }
    return newSquare;
}
var mySearch; //声明一个interface 变量接收
mySearch = function (source, substring) {
    var result = source.search(substring);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
myArray = ["Bob", "Fred"];
var list = ["bob", "fred"];
//赋值
var square = {}; //方式一
var d2; //方式二
square.color = "Red";
square.penWidth = 10;
square.sideLength = 2;
d2.color = "Blue";
var c;
c(10);
c.interval = 10;
c.reset();
window.onload = function () {
    //定义变量接收值
    var userInfo = getUserInfo(userObj);
    console.log(userInfo);
    var mySquare1 = CreateSquare({ color: "Blue" });
    console.log("mySquare1  " + mySquare1.color + "---" + mySquare1.area);
    var mySquare2 = CreateSquare({ color1: "Blue" });
    console.log("mySquare2  " + mySquare2.color + "---" + mySquare2.area);
    var mySquare3 = CreateSquare({ color: "yellow", width: 80 });
    console.log("mySquare3  " + mySquare3.color + "---" + mySquare3.area);
    var source = "this is typescript search";
    var sub1 = "is";
    var sub2 = "not";
    var result1 = mySearch(source, sub1);
    console.log(result1);
    var result2 = mySearch(source, sub2);
    console.log(result2);
    $.each(myArray, function (key, value) {
        console.log(key + "---" + value);
    });
    $.each(list, function (key, value) {
        console.log(key + "---" + value);
    });
};
//# sourceMappingURL=ts-Interface.js.map