/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
var strings = ["Hello", "98502", "101"];
var validators = {};
validators["Zip Code"] = new Validation.ZipCodeValidator(); //验证邮政编码
validators["Letters only"] = new Validation.LettersOnlyValidator(); //验证是否都是英文
function showMsg() {
    strings.forEach(function (s) {
        for (var name in validators) {
            console.log('"' + s + '" ' + (validators[name].isAccepttable(s) ? 'matches ' : 'does not math ') + name);
        }
    });
}
window.onload = function () {
    showMsg();
};
//# sourceMappingURL=test.js.map