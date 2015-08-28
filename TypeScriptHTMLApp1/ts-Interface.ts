/**声明一个接口，这个接口不会在js 上面出现，只会在显示一个user对象在getUserInfo*/
interface IUserInfo {
    userName: string;
    age: number;
    mark: any;//备注，类型为any
}

/**获取用户信息*/
function getUserInfo(user:IUserInfo) {
    return user.userName + "现在" + user.age + "岁了";
}

//用一个数组对象作为一个user 对象传值过getUserInfo 函数方法..参数必须要以接口IUserInfo 对应上.
//少传一个参数，typescript 会自动帮你检测报错,如果用纯javascript 去写的话，不会报错，ts 大大减少检查js 问题
//如：var userObj={userName:'周伯通'};//error
var userObj = { userName: "朵朵", age: 7, mark: "小萝莉" };



/**
*自选属性 Optional Properties
* Not all properties of an interface may be required.
* Some exist under certain conditions or may not be there at all
*并非需要一个接口的所有属性。在某些条件下的一些存在或可以不存在的。
*这句话说的是：就算你SquareConfig 接口定义的变量是color，到调用createSquare 的时候
你给color1 变量照样可以取出z 值来
*这个值只不过是：默认的newSquare 的white 值，如果是一样的color 变量他就会取出你给赋
格对象的color(red)
*/
interface SquareConfig {
    color?: string;
    width?: number;
}

/***************创建一个对象function.**************/
function CreateSquare(config: SquareConfig): { color: string;area: number } {
    //此时newSquare 里面的参数必须与:后面里面的参数名称一致.
    var newSquare = { color: "Yellow", area: 2 };
    if (config.color)
    {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = newSquare.area * config.width;
    }
    return newSquare;
}



//--typescript 的function 类型结合javascript 的search 函数使用
interface searchFunt {
    //声明一个两个变量.
    (source: string, substring: string): boolean;
}

var mySearch: searchFunt;//声明一个interface 变量接收
mySearch = function (source: string, substring: string) {
    var result = source.search(substring);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}
interface StringArray {
    [index: number]: string;
}

var myArray: StringArray;
myArray = ["Bob", "Fred"];

var list: Array<string> = ["bob", "fred"];



/*
 * 扩展接口 Extending Interfaces
 */

//Extending Interfaces
interface IShape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}

//--接口继承接口,用，分割开多继承.
interface ISquare extends IShape, PenStroke {
    sideLength: number;
}

//赋值
var square = <ISquare>{};//方式一
var d2: ISquare;//方式二
square.color = "Red";
square.penWidth = 10;
square.sideLength = 2;
d2.color = "Blue";


/*
 * 混合型Hybrid Types
 */
interface Counter {
    (start: number): string;//声明一个开始变量
    interval: number;//声明一个间隔变量
    reset(): void;//声明一个reset的function
}
var c: Counter;
c(10);
c.interval = 10;
c.reset();

window.onload = function () {
    //定义变量接收值
    var userInfo: string = getUserInfo(userObj);
    console.log(userInfo);

    var mySquare1 = CreateSquare({ color: "Blue" });
    console.log("mySquare1  " + mySquare1.color + "---" + mySquare1.area);

    var mySquare2 = CreateSquare({ color1: "Blue" });
    console.log("mySquare2  " + mySquare2.color + "---" + mySquare2.area);

    var mySquare3 = CreateSquare({ color: "yellow", width: 80 });
    console.log("mySquare3  " + mySquare3.color + "---" + mySquare3.area);


    var source: string = "this is typescript search";
    var sub1: string = "is";
    var sub2: string = "not";

    var result1: boolean = mySearch(source, sub1);
    console.log(result1);

    var result2: boolean = mySearch(source, sub2);
    console.log(result2);

    $.each(myArray, function (key, value) {
        console.log(key + "---" + value);
    })

    $.each(list, function (key, value) {
        console.log(key + "---" + value);
    })
}