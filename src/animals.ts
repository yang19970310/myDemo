import { IFireShow, IWisdomShow } from "./interfaces";

export abstract class Animal{
    abstract type: string;
    constructor(
        public name:string,
        public age:number
    ){}
    syHolle(){
        console.log(`my is ${this.name}`)
    }
}
export class Lion extends Animal implements IFireShow{

    type:string = "狮子";
    singleFire(): void {
        console.log(`${this.name}跳跃了单火圈`)
    }
    doubleFire(): void {
        console.log(`${this.name}跳跃双火圈`)
    }
    
}
export class Tiger extends Animal implements IFireShow{
   
    singleFire(): void {
        console.log(`${this.name}跳跃了单火圈`)
    }
    doubleFire(): void {
        console.log(`${this.name}跳跃双火圈`)
    }
   
    type:string = "老虎"
   
    

}
export class Dog extends Animal implements IWisdomShow{
    suanshuti(): void {
        console.log(`${this.name} 会算数`)
    }
    type:string = "狗"
    tiaowu(){
        console.log(`${this.name} 表演跳舞`)
    }
   
}
export class Monkey extends Animal{
    type:string = "猴子"
    dumujiao(){
        console.log(`${this.type}表演走钢丝`)
    }
}
//动物可以学习能力 所以增加能力时 你无法对其进行约束
//1.没有强制约束力 函数参数没有约束力
//2.容易强类型和耦合在一起
//