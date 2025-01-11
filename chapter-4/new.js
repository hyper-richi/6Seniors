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

function BigUser3(name) {}
// console.log("return this:", new BigUser3()); // возвращает this BigUser3 {}

// Создание методов в конструкторе

function foo() {
    console.log("foo.this:", this);
}

function UserWithMethods(name, cb) {
    this.name = name;
    this.cb = cb;
    this.sayHi = function () {
        console.log("this.sayHi:", this.name);
    };
}

let johnWithMethods = new UserWithMethods("John", foo);
//console.log("johnWithMethods:", johnWithMethods, johnWithMethods.sayHi());
johnWithMethods.cb();
