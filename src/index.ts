//泛型约束
/**
 * 将某个对象的name属性的每个单词的首字母大写，然后返回
 */
interface hasNameProperty{
    name:string
}
function nameToUpperCase<T extends hasNameProperty>(obj :T):T{
    obj.name = obj.name.split(" ").map(s=>s[0].toUpperCase() + s.substr(1)).join(" ")
    return obj;
}
const o = {
    name : "yang jian",
    age:20
}
const newO = nameToUpperCase(o);
console.log(newO)
