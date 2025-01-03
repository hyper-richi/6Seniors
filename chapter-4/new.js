function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");
// console.log("user: ", user);

function createUser(name) {
    return {
        name,
        isAdmin: false,
    };
}

let jack = createUser("Jack");
let john = createUser("John");
let linda = createUser("Linda");
//console.log("jack: ", jack);
//console.log("john: ", john);
//console.log("linda: ", linda);
//console.log("john === jack: ", john === jack);

// new.target

function NewUser() {
    return new.target;
}

//console.log("без new:", NewUser()); // undefined

//console.log("с new:", new NewUser()); // function User { ... }

// Возврат значения из конструктора, return

function BigUser(name) {
    this.name = name;

    return { userName: "Godzilla" };
}

//console.log("return obj:", new BigUser("John")); // возвращает { userName: 'Godzilla'}

function BigUser2(name) {
    this.name = name;
    return;
}
//console.log("return this:", new BigUser2("John")); // возвращает this

// Создание методов в конструкторе

function UserWithMethods(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("this.sayHi:", this.name);
    };
}

let johnWithMethods = new UserWithMethods("John");
//console.log("johnWithMethods:", johnWithMethods, johnWithMethods.sayHi());

// практика

// Задача 1

function A() {}
function B(a) {
    return a;
}

let a = new A();
let b = new B(a);

//console.log(a == b); // true

// Задача 2

function Calculator() {
    this.a = Number(prompt("a", 0));
    this.b = Number(prompt("b", 0));
    //this.sum = this.a + this.b;
    //this.sum = alert(`a+b = ${this.sum}`);
    //this.mul = this.a * this.b;
    //this.mul = alert(`a*b = ${this.mul}`);

    this.sum = function () {
        alert(`sum = ${this.a + this.b}`);
    };

    this.mul = function () {
        alert(`mul = ${this.a * this.b}`);
    };
}

// const calculator = new Calculator();

//calculator.sum();
//calculator.mul();

// Задача 3

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value = this.value + Number(prompt("введите число:", 0));
    };
}

const accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(`итоговое число: ${accumulator.value}`);
