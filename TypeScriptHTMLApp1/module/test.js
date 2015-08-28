/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
window.onload = function () {
    var validators = new Validation.ZipCodeValidator();
    console.log(validators.isAccepttable("12345"));
};
//# sourceMappingURL=test.js.map