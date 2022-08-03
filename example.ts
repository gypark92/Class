//Singletons>>클래스로부터 단 하나의 오브젝트를 생성해서 사용하는 패턴 
//static >> 데이터를 공유  

class ClassName{
     private static instance: ClassName| null= null;
     
    public static getInstance():ClassName{ 
        //ClassName 으로부터 만든 object가 있으면 리턴
        if(ClassName.instance ===null){
            ClassName.instance = new ClassName();
            //ClassName 으로부터 만든 object가 없으면 만든다 
        }
        return ClassName.instance;
    }

    //private >>new를 호출할 수 없는 상태 
   private constructor(){

    }
}
const a = ClassName.getInstance();//최초로 불려서 만들어서
const b = ClassName.getInstance();//있으니까 a의 것을 리턴

console.log(a === b)//true