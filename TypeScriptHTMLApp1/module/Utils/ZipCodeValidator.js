/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    //匹配0-9的数字
    var numberRegexp = /^[0-9]+$/;
    /**验证是否长度为5并且为数字*/
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAccepttable = function (s) {
            //如果长度=5 并且是数字就返回一个true
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=ZipCodeValidator.js.map