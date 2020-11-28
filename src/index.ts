class User {
    readonly id: string
    // public name:string
    // public age:number

    constructor(public name: string, private _age: number) {
        this.id = Math.random().toString();
    }
    set age(value: number) {
        if (value > 100) {
            value = 100;
        } else if (value < 0) {
            value = 0;
        }
        this._age = Math.floor(value);
    }
    get age() {
        return this._age;
    }
}
const user = new User("aa", 21)
user.age = 1.5;
console.log(user.age)