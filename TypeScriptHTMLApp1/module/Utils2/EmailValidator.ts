/**import、require、export 关键的使用..***********/

//--导入--ValidationUtils3.ts 文件---
import Validation = require('ValidationUtils3');

var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export class EmailValidator implements Validation.StringValidator {
    isAcceptable(s: string) {
        return emailReg.test(s);
    }
}