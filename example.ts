class Person {
    public readonly name: string = "na";
    private readonly country :string ;

    constructor(public _name: string, private age: number) {

        this.country="korea";//constructor >> readonly 초기화가능 
    }

    // hello(){
    //     this.country = "China";//readonly 라 갑변경 안됨
    // }

}

const p1 = new Person("na", 3);//디폴트생성자 (인자가없는 생성자)
console.log(p1.name)//get을 하는 함수 


console.log(p1.name)

