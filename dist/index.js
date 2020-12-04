Object.defineProperty(exports, "__esModule", { value: true });
const animals_1 = require("./animals");
const animals = [
    new animals_1.Lion("小狮子", 44),
    new animals_1.Tiger("小老虎", 11),
    new animals_1.Dog("小二哈", 4),
    new animals_1.Monkey("小猴子", 4)
];
function hasFireShow(ani) {
    if (ani.singleFire && ani.doubleFire) {
        return true;
    }
    return false;
}
animals.forEach(ele => {
    if (hasFireShow(ele)) {
        ele.singleFire();
        ele.doubleFire();
    }
    else {
        ele.syHolle();
    }
});
