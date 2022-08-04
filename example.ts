//abstract Classes 
abstract class abstractPerson{//클래스 앞에 abstract 붙여줘야한다 
    protected _name :string = "park";

    abstract setName(name:string):void;//abstract 경우 구현하지않음 
}

//new abstractPerson() 이용불가 

class Person extends abstractPerson{//상속을 만들어서 완전하게 만듬 
    setName(name: string): void {
        this._name = name; 
    }
}

const p = new Person();

p.setName("son");