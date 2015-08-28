
//--导入--ValidationUtils3.ts 文件---
import Validation = require('ValidationUtils3');

//匹配移动电话号码
var telReg = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
export class TelValidator implements Validation.StringValidator {
    isAcceptable(s: string) {
        return telReg.test(s);
    }
}
