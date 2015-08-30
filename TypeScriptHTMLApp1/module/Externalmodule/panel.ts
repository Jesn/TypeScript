import mod = require("Compoment");
class Panel extends mod.Compoment {
    constructor(config) {
        super(config);
        console.log(this.config);
    }
}