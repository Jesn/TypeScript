interface IClock {
    currentTime: Date;
    setTime(d: Date);

}

class Clock implements IClock {
    currentTime: Date;
    constructor(h: number, m: number) { }
    setTime(d: Date) {
        this.currentTime = d;
    }
}


interface IClock1 {
    new (hour: number, minute: number);
}
class Clock1 {
    currentTime: Date;
    constructor(h: number, m: number) { }
}


window.onload = function () {
    var c = new Clock(7,20);
    console.log(c);

    var cs: IClock1 = Clock1;
    var newcs = new Clock1(7, 12);
}