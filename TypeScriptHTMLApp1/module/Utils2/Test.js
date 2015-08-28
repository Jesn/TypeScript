/***
* import 与 require 关键字使用..require(是命令，要求的意思.)
*/
define(["require", "exports", 'EmailValidator'], function (require, exports, emailValidator) {
    function showMsg1() {
        var telObj = new emailValidator.EmailValidator();
        var tel = "15026732618";
        var flag = telObj.isAcceptable(tel);
        console.log(flag ? tel + "\t匹配" : tel + "\t不匹配");
    }
    window.onload = function () {
        showMsg1();
    };
});
//# sourceMappingURL=Test.js.map