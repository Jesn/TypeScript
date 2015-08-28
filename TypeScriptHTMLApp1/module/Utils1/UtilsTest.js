/// <reference path="ValidationUtils.ts" />
var strs = ["15026732619", "jesn2013@hotmail.com"];
var validators1 = {};
validators1["Tel"] = new ValidationUtils.TelValidator(); //验证手机
validators1["Email"] = new ValidationUtils.EmailValidator; //验证邮箱
function showMsg1() {
    strs.forEach(function (s) {
        for (var name in validators1) {
            console.log('"' + s + '" ' + (validators1[name].isAcceptable(s) ? '匹配 ' : ' 不匹配 ') + name);
        }
    });
}
function showMsg2() {
    //方法一
    var telObj; //声明一个类型为ValidationUtils.TelValidator的telObj变量
    telObj = new ValidationUtils.TelValidator; //实例化telObj
    //方法二
    //var telObj = new ValidationUtils.TelValidator;//直接实例化一个对象
    var tel = "15026454562";
    var flag = telObj.isAcceptable(tel);
    console.log(flag ? tel + "匹配" : tel + "不匹配");
}
window.onload = function () {
    showMsg1();
    showMsg2();
};
//# sourceMappingURL=UtilsTest.js.map