class Person {
    constructor(public _name: string, private age: number) {
    }

    get name() {//
        return this._name+"park";
    }

    // set name(n:string){
    //     this._name= n;

    // }
}

const p1 = new Person("na", 3);//디폴트생성자 (인자가없는 생성자)
console.log(p1.name)//get을 하는 함수 
//p1.name = "me";//set을 하는 함수 



