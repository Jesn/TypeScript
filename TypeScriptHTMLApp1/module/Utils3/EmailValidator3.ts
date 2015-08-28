/**export = 对象 的使用*/

import validation = require('./ValidationUtils3');
// 匹配 email 正则表达式
var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
class EmailValidator3 implements validation.StringValidator {
    isAcceptable(s: string) {
        return emailReg.test(s);
    }
}

export = EmailValidator3; //export = 对象 的使用