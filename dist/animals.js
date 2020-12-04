Object.defineProperty(exports, "__esModule", { value: true });
exports.Monkey = exports.Dog = exports.Tiger = exports.Lion = exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    syHolle() {
        console.log(`my is ${this.name}`);
    }
}
exports.Animal = Animal;
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.type = "狮子";
    }
    singleFire() {
        console.log(`${this.name}跳跃了单火圈`);
    }
    doubleFire() {
        console.log(`${this.name}跳跃双火圈`);
    }
}
exports.Lion = Lion;
class Tiger extends Animal {
    constructor() {
        super(...arguments);
        this.type = "老虎";
    }
    singleFire() {
        console.log(`${this.name}跳跃了单火圈`);
    }
    doubleFire() {
        console.log(`${this.name}跳跃双火圈`);
    }
}
exports.Tiger = Tiger;
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.type = "狗";
    }
    tiaowu() {
        console.log(`${this.name}表演跳舞`);
    }
}
exports.Dog = Dog;
class Monkey extends Animal {
    constructor() {
        super(...arguments);
        this.type = "猴子";
    }
    dumujiao() {
        console.log(`${this.type}表演走钢丝`);
    }
}
exports.Monkey = Monkey;
