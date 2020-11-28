import { ArrayHelper } from "./ArrayHelper";

//函数使用泛型
function tack<T>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}
const newArr = tack(['1', '2', '3', 'a4', '5', '6'], 4)
console.log(newArr)
//类型别名使用泛型
type callback<T> = (n: T, i: number) => boolean
function filter<T>(arr:T[], callback: callback<T>): T[] {
    const newArr: T[] = [];
    
    return newArr;
}
const arr = [3, 5, 6, 8, 7];
console.log(filter(arr, (n,i) => (i) % 2 !== 0))
//类中使用泛型
let arr1 = new ArrayHelper(["aa","cc","ff","bb","dd"])
console.log(arr1.shuffle())