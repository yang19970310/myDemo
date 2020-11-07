// let a = 10;
// let fs = require('fs');
// fs.readFile('../txt/a.txt', 'utf-8', (err, data) => {

//     if (data) {
//         fs.readFile(data, 'utf-8', (err, data) => {

//             if (data) {
//                 fs.readFile(data, 'utf-8', (err, data) => {
//                     console.log(data)
//                 })
//             }
//         })
//     }

// })

function show(data) {
    console.log(data);
}
function show2(data){
    console.log(data)
}
let oStudent = {};
let fs = require('fs');
fs.readFile('../txt/a.txt', 'utf-8', (err, data) => {
    if (data) oStudent.name= data;
    store.fire(oStudent);
})
fs.readFile('../txt/b.txt', 'utf-8', (err, data) => {
    if (data) oStudent.age = data;
    store.fire(oStudent);
})
fs.readFile('../txt/c.txt', 'utf-8', (err, data) => {
    if (data) oStudent.slx = data;
    store.fire(oStudent);
})

let store = {
    list: [],
    times: 3,
    subscribe(func) {
        this.list.push(func);
    },
    fire(...arg) {
        --this.times == 0 && this.list.forEach(ele => {
            ele.apply(null, arg);
        })
    }
}
store.subscribe(show);
store.subscribe(show2);