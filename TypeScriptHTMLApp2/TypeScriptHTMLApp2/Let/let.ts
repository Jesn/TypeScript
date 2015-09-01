function letvariabel() {

    /*
    *variable1
    要声明的变量的名称。
    value1
    赋给变量的初始值。
    */
    let variabel = "123";

    /*
    备注
    使用 let 语句声明一个变量，该变量的范围限于声明它的块中。 可以在声明变量时为变量赋值，也可以稍后在脚本中给变量赋值。
    使用 let 声明的变量，在声明前无法使用，否则将会导致错误。
    如果未在 let 语句中初始化您的变量，则将自动为其分配 JavaScript 值 undefined。
    */

    var a = 10;
    {
        let a = 2;
        //print a=2;
    }
    //print=10;

    let index;
    let name = "Thomas Jefferson";
    let answer = 42, counter, numpages = 10;
    let myarray = new Array();

    //print counter=undefined;
}

//位运算符 <<   t<<n  t*2^N 
enum AnimalFlags {
    None = 0,
    HasClaws = 1 << 0,
    CanFly = 1 << 1,
}