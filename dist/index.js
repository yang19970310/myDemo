class User {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this.id = Math.random().toString();
    }
    set age(value) {
        this._age = value;
    }
    get age() {
        return this._age;
    }
}
const user = new User("aa", 21);
user.age = 10;
console.log(user.age);
