class Person {
    public static CITY = "Seoul"//class로부터 만들어진 object에서 공통적으로 사용하려는 데이터를 static으로 넣어서 사용 
 public  hello(){//static 
    console.log("hi",Person.CITY)
 }
 public  change(){//static 
   Person.CITY="LA"
 }
}

const p1 = new Person()//object
p1.hello();//hi Seoul
//p1.hello();//static 오브젝트에서는 이 함수를 method로 생각하지않음
const p2 = new Person()
//Person.hello();//클래스에 바로 함수 호출해서 사용 
p2.hello()//hi Seoul
p1.change()
p2.hello()//hi LA 
