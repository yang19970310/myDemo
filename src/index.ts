
import { unlink } from "fs";
import { Dog, Lion, Monkey, Tiger,Animal} from "./animals";
import { IFireShow, IWisdomShow } from "./interfaces";


const animals:Animal[]=[
    new Lion("小狮子",44),
    new Tiger("小老虎",11),
    new Dog("小二哈",4),
    new Monkey("小猴子",4)
]
function hasFireShow(ani: object):ani is IFireShow{
    if((ani as unknown as IFireShow).singleFire && (ani as unknown as IFireShow).doubleFire){
        return true;
    }
    return false;
    
}
// animals.forEach(ele=>{
//     if(hasFireShow(ele)){
//         ele.singleFire()
//         ele.doubleFire()
//     }else{
//         ele.syHolle()
//     }
// })
function  hasIWisdomShow(ele:object):ele is  IWisdomShow{
    if((ele as unknown as IWisdomShow).suanshuti && (ele as unknown as IWisdomShow).tiaowu){
        return true
    }else{
        return false
    }
    
}
animals.forEach(ele=>{
    if(hasIWisdomShow(ele)){
        ele.suanshuti()
        ele.tiaowu()
    }else{
        ele.syHolle()
    }
})

class A{
    a:string
    b:string
}
class B{
    c:string
    d:string
}
interface c extends A,B{}
const C:c ={
    a:'',
    b:'',
    c:'',
    d:''
}
console.log(typeof C)