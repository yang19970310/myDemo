class user {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(this, this.name);
    }
}
const un = new user('name');
const h = un.sayHello;
