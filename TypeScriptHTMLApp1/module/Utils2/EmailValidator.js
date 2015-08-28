/**import、require、export 关键的使用..***********/
define(["require", "exports"], function (require, exports) {
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var EmailValidator = (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isAcceptable = function (s) {
            return emailReg.test(s);
        };
        return EmailValidator;
    })();
    exports.EmailValidator = EmailValidator;
});
//# sourceMappingURL=EmailValidator.js.map