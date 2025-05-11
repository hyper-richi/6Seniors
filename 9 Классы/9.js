class UserClass {
  user = "user";
  foo = function () {
    console.log("foo");
  };
  constructor(name) {
    this.name = name;
    console.log("constructor UserClass");
    this.user = "new user";
  }
  doSomething(arg) {
    console.log("doSomething", arg);
  }
}

// const user = new UserClass("12365");
// console.log("user: ", user);

// console.log(typeof UserClass); // function

// for (prop in user) {
//   console.log("prop", prop); // user, foo, doSomething
// }

class Admin extends UserClass {
  thisInClass = this;
  hide() {
    console.log(`${this.name} прячется!`);
    super.doSomething("Admin"); // вызываем родительский метод doSomething
  }
  constructor(name, earLength) {
    super();
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }
}

// let admin = new Admin("Белый кролик", 10);
// console.log("admin: ", admin);
// console.log('thisInClass: ', admin.thisInClass);

// admin.doSomething(5); // Белый кролик бежит со скоростью 5.
// admin.hide(); // Белый кролик прячется!

// ------------ Задачи -----------------

// Ошибка создания экземпляра класса
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);
