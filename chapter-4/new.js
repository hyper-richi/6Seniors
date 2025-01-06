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

    this.sum = function () {
        alert(`sum = ${this.a + this.b}`);
    };

    this.mul = function () {
        alert(`mul = ${this.a * this.b}`);
    };
}

//const calculator = new Calculator();

//calculator.sum();
//calculator.mul();

// Задача 3

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value = this.value + Number(prompt("введите число:", 0));
    };
}

//const accumulator = new Accumulator(1);
//accumulator.read();
//accumulator.read();
//alert(`итоговое число: ${accumulator.value}`);

// задача 4

const users = [
    new User({ id: 1, name: "Alice", age: 25, email: "alice@example.com", tags: ["developer", "react"] }),
    new User({ id: 2, name: "Bob", age: 30, email: "bob@example.com", tags: ["designer", "figma"] }),
    new User({ id: 3, name: "Charlie", age: 35, email: "charlie@example.com", tags: ["developer", "nodejs"] }),
    new User({ id: 4, name: "Diana", age: 28, email: "diana@example.com", tags: ["manager", "scrum"] }),
    new User({ id: 5, name: "Eve", age: 22, email: "eve@example.com", tags: ["developer", "javascript"] }),
];

// Ожидаемый результат

({
    averageAge: 28, // Средний возраст пользователей
    developers: ["Alice", "Charlie", "Eve"], // Список имен пользователей с тегом "developer"
    emailsByTag: {
        developer: ["alice@example.com", "charlie@example.com", "eve@example.com"],
        designer: ["bob@example.com"],
        manager: ["diana@example.com"],
    },
    youngestUser: { id: 5, name: "Eve", age: 22, email: "eve@example.com", tags: ["developer", "javascript"] },
});

function Create(arr) {
    this.averageAge =
        arr.reduce((previousValue, currentValue, index) => {
            return previousValue + currentValue.name.age;
        }, 0) / arr.length;
    this.developers = arr.filter((user) => user.name.tags.includes("developer")).map((user) => user.name.name);

    this.emailsByTag = {
        developer: arr
            .filter((user) => {
                if (user.name.tags.includes("developer")) {
                    return user.name.name;
                }
            })
            .map((user) => user.name.email),
        designer: arr
            .filter((user) => {
                if (user.name.tags.includes("designer")) {
                    return user.name.name;
                }
            })
            .map((user) => user.name.email),
        manager: arr
            .filter((user) => {
                if (user.name.tags.includes("manager")) {
                    return user.name.name;
                }
            })
            .map((user) => user.name.email),
    };
    this.youngestUser = arr.reduce((previousUser, currentUser) => {
        return currentUser.name.age < previousUser.name.age ? currentUser : previousUser;
    });
}

//const result = new Create(users);
// console.log("result: ", result);

// задача 5

function Counter() {
    this.count = 0;
    this.increment = function () {
        this.count++;
    };
    this.decrement = function () {
        this.count--;
    };

    this.getCount = function () {
        console.log("this.count", this.count);
        return this.count;
    };
}

/* const counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.getCount();

const counter2 = new Counter();
counter2.decrement();
counter2.getCount(); */

// задача 6

function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.caregory = category;

    this.discount = function (percent) {
        const discountPrice = (this.price / 100) * percent;
        this.price -= discountPrice;
        console.log(" this.price: ", this.price);
        return this.price;
    };
}

//const laptop = new Product("Laptop", 1000, "Electronics");
//const book = new Product("Book", 20, "Literature");

//laptop.discount(10); // 900
//book.discount(25); // 15

