//将两个数组进行混合，
function mininArray<T,K>(arr1:T[],arr2:K[]):(T|K)[]{
    if(arr1.length == 0&&arr2.length == 0){
        throw new Error("不能为空")
    }
    let newarr:(T|K)[] = [];
    let length = arr1.length>arr2.length ?arr1.length:arr2.length;
    
    for (let i = 0; i < length; i++) {
        if(i<arr1.length){
            newarr.push(arr1[i])
        }
        if(i<arr2.length){
            newarr.push(arr2[i])
        }
    }
    return newarr;
}
console.log(mininArray([1,2],["e","b","c"]))