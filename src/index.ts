// const u = {
//     name:"afsa",
//     sayHello(){
       
//         console.log(this,this.name)
//     }
// }
// const say = u.sayHello;
//say()
 //this指向any

 class user{
     constructor(public name){

     }
     sayHello(this:user){
         console.log(this,this.name)
     }
 }
 const un= new user('name')
const h = un.sayHello;
