/// <reference path="Validation.ts"/>
var Validation;
(function (Validation) {
    //匹配A-Z,a-z的英文
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAccepttable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=LettersOnlyValidator.js.map