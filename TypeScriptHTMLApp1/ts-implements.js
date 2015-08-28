var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
var Clock1 = (function () {
    function Clock1(h, m) {
    }
    return Clock1;
})();
window.onload = function () {
    var c = new Clock(7, 20);
    console.log(c);
    var cs = Clock1;
    var newcs = new Clock1(7, 12);
};
//# sourceMappingURL=ts-implements.js.map