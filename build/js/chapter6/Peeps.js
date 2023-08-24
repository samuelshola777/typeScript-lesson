"use strict";
class Peeps {
    static getCount() {
        return Peeps.Count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.Count;
    }
}
Peeps.Count = 0;
