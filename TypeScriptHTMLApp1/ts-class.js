var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//最简单的class
var Employee = (function () {
    function Employee() {
    }
    return Employee;
})();
var employee = new Employee();
employee.funllName = "张三"; //赋值
//说明这个属性是存在的
if (employee.funllName) {
    console.log(employee.funllName);
}
/*
 * constructor 关键字
 */
var UserInfo = (function () {
    //默认构造函数
    function UserInfo(msg) {
        this.userName = msg; //从构造方法传一个用户字符串过去.
    }
    UserInfo.prototype.getUserInfo = function () {
        return "欢迎你" + this.userName;
    };
    return UserInfo;
})();
function PrintMsg() {
    var resMsg = "";
    var info = new UserInfo("朵朵"); //创建一个UserInfo 对象,并且构造函数必须要传一个字符串
    resMsg = info.getUserInfo(); //调用对象方法
    return resMsg;
}
/*
 * super 关键字
 */
var Person = (function () {
    //构造函数
    function Person(paramval) {
        this.userName = paramval;
    }
    //--声明一个getPersonInfo 方法，并在声明age 变量
    Person.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 12; }
        return this.userName + '\t' + age;
    };
    return Person;
})();
var Student1 = (function (_super) {
    __extends(Student1, _super);
    function Student1(userName) {
        _super.call(this, userName);
    }
    Student1.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 100; }
        var supperMsg = _super.prototype.getPersonInfo.call(this, age);
        return this.userName + "\n" + age + "岁" + "\n\t默认信息:" + supperMsg;
    };
    return Student1;
})(Person);
/*
 *public/private 关键字
* 默认是public
* 您可能已经注意到，在我们还没有使用这个词“公众”作出任何类可见的成员的上述例子。
* 如C＃语言要求每个成员被明确标记为'公共'可见。在打字稿，每个成员都是公共默认。
* 您可能仍然标记成员的私人，所以你控制什么是公开可见的外部类的
 */
var MyAnimal = (function () {
    //构造方法
    function MyAnimal(theName) {
        this.theName = theName;
        this.name = theName;
    }
    MyAnimal.prototype.getMsg = function (name) {
        return this.name = name;
    };
    return MyAnimal;
})();
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "犀牛");
    }
    Rhino.prototype.getMsg = function (name) {
        return name;
    };
    return Rhino;
})(MyAnimal);
var Employees = (function () {
    function Employees(theName) {
        this.name = theName;
    }
    return Employees;
})();
/*
 * class 使用高级技巧
 *构造函数
 *当您声明一个类，你实际上是在同一时间创建多个声明。第一个是类的实例的类型
 */
var Greeteres = (function () {
    function Greeteres() {
    }
    Greeteres.prototype.greet = function () {
        if (this.greeting) {
            return "Hello " + this.greeting;
        }
        else {
            return Greeteres.standardGreeting;
        }
    };
    Greeteres.standardGreeting = "Hello World !";
    return Greeteres;
})();
window.onload = function () {
    console.log(PrintMsg());
    var st1 = new Student1("周伯通");
    var st2 = new Student1("老毒物");
    console.log(st1.getPersonInfo());
    console.log(st1.getPersonInfo(120));
    var animal = new MyAnimal("山羊");
    var retMsg1 = animal.getMsg("鹿");
    var rhino = new Rhino();
    var employees = new Employees("朵朵");
    animal = rhino;
    console.log(retMsg1);
    var greenter1 = new Greeteres();
    greenter1.greeting = "duoduo";
    console.log(greenter1.greet());
    var greenterMarker = Greeteres;
    greenterMarker.standardGreeting = "Hello lan";
    var greenter2 = new greenterMarker();
    console.log(greenter2.greet());
};
//# sourceMappingURL=ts-class.js.map