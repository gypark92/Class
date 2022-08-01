"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "na";
        this.country = "korea"; //constructor >> readonly 초기화가능 
    }
}
const p1 = new Person("na", 3); //디폴트생성자 (인자가없는 생성자)
console.log(p1.name); //get을 하는 함수 
console.log(p1.name);
