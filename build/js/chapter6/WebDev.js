"use strict";
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
