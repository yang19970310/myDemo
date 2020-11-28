import { maxHeaderSize } from "http";

export class ArrayHelper<T>{
    constructor(private array:T[]){

    }
    take( n: number): T[] {
        const newArr: T[] = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.array[i])
        }
        return newArr;
    }

    shuffle() {
        

        for (let i = 0; i < this.array.length; i++) {
            const index = this.getRandom(3, this.array.length);
            const temp = this.array[i];
            this.array[i] = this.array[index]
            this.array[index] = temp;

        }
        return this.array;
    }
    private getRandom(min: number, max: number) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
}
