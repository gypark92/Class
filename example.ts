//class =>object 


class Students{
    //index signatures >> properti가 고정된 형태가 아니라 동적으로 properti 이름이 들어오는 경우 
    [index: string]: 'male' | 'female';// 타입 지정 
}
const a =new Students();

a.mark ='male'
a.john ='male'
console.log(a)

const b = new Students();
b.jo = 'female'
b.na = 'male'
b.me = 'female'

console.log(b)