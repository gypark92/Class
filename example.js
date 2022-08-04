"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`${this._name},${this._age}`);
    }
}
const p = new Parent("park", 20);
p.print();
class Child extends Parent {
}
const c = new Child("son", 31);
c.print();
