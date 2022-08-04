class Parent{
    constructor(protected _name: string, private _age:number){

    } 


    public print():void{
        console.log(`${this._name},${this._age}`);
        
    }
}

const p = new Parent("park",20);
p.print();

class Child extends Parent{
    public gender = "male"

    constructor(age:number){
        super("son",age)
    }
}

const c = new Child(31);

c.print()
