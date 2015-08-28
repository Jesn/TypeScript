 //最简单的class
class Employee {
    funllName: string;
}

var employee = new Employee();
employee.funllName = "张三";//赋值

//说明这个属性是存在的
if (employee.funllName) {
    console.log(employee.funllName);
}

/*
 * constructor 关键字
 */
class UserInfo {
    userName: string;
    //默认构造函数
    constructor(msg:string)
    {
        this.userName = msg;//从构造方法传一个用户字符串过去.
    }

    getUserInfo() {
        return "欢迎你" + this.userName;
    }
}

function PrintMsg():string
{
    var resMsg: string = "";
    var info = new UserInfo("朵朵"); //创建一个UserInfo 对象,并且构造函数必须要传一个字符串
    resMsg = info.getUserInfo(); //调用对象方法
    return resMsg;
}


/*
 * super 关键字
 */
class Person {
    userName: string;
    //构造函数
    constructor(paramval: string) {
        this.userName = paramval;
    }

    //--声明一个getPersonInfo 方法，并在声明age 变量
    getPersonInfo(age: number = 12): string {
        return this.userName + '\t' + age;
    }
}

class Student1 extends Person
{
    constructor(userName: string)
    {
        super(userName);
    }
    getPersonInfo(age = 100)
    {
        var supperMsg = super.getPersonInfo(age);
        return this.userName + "\n" + age + "岁" + "\n\t默认信息:" + supperMsg;
    }
}


/*
 *public/private 关键字 
* 默认是public
* 您可能已经注意到，在我们还没有使用这个词“公众”作出任何类可见的成员的上述例子。
* 如C＃语言要求每个成员被明确标记为'公共'可见。在打字稿，每个成员都是公共默认。
* 您可能仍然标记成员的私人，所以你控制什么是公开可见的外部类的
 */
class MyAnimal {
    private name:string;

    //构造方法
    constructor(private theName: string){
        this.name = theName;
    }

    getMsg(name: string):string {
        return this.name = name;
    }
}

class Rhino extends MyAnimal {
    constructor() {
        super("犀牛");
    }

    getMsg(name: string): string {
        return name;
    }
}
class Employees {
    private name: string;
    
    constructor(theName: string) {
        this.name = theName;
    }
}


/*
 * class 使用高级技巧
 *构造函数
 *当您声明一个类，你实际上是在同一时间创建多个声明。第一个是类的实例的类型
 */
class Greeteres {
    static standardGreeting = "Hello World !";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello " + this.greeting;
        } else {
            return Greeteres.standardGreeting;
        }
    }
}


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

    var greenterMarker: typeof Greeteres = Greeteres;
    greenterMarker.standardGreeting = "Hello lan";
    var greenter2 = new greenterMarker();
    console.log(greenter2.greet());

}