import validation = require('./ValidationUtils3');
import telValidator = require('./TelValidator3');
import emailValidator = require('./EmailValidator3');

function showMsg3() {
    var telObj = new telValidator();
    var tel = "15026732618";
    var flag: boolean = telObj.isAcceptable(tel);//调用 TelValidator 类的isAcceptable 方法
    console.log(flag ? tel + " 匹配 " : tel + "\t 不匹配 ");
}

window.onload = function () {
    showMsg3();
}