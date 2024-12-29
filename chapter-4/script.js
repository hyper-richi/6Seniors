// user.sayHi();

/* const user = {
    name: "John",
    sayHi() {
        let arrow = () => console.log("console-1", user);
        arrow();
    },
    arrow: (() => console.log("console-2"))(),
};
user.sayHi(); */

/* let calculator = {
    result: 0,
    num1: 1,
    num2: 2,
    read() {
        return this.result;
    },
    sum() {
        this.result = this.num1 + this.num2;
    },
    mul() {
        this.result = this.num1 * this.num2;
        return this.result;
    },
};
console.log("calculator.mul:", calculator.mul());
console.log("calculator.sum2:", calculator.sum());
console.log("calculator.read:", calculator.read()); */

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        // показывает текущую ступеньку
        console.log(this.step);
        return this;
    },
};
ladder.up().up().down().showStep().down().showStep();
