interface Duck {
    sount:"嘎嘎嘎"
    swin():void
} 
let person ={
    name:'hhh',
    age:20,
    sount:"嘎嘎嘎" as "嘎嘎嘎",
    swin:function(){
        console.log("嘎嘎嘎")
    }
}
let duck:Duck = person;