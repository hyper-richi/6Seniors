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

class AdminUser extends UserClass {
  thisInClass = this;
  hide() {
    console.log(`${this.name} прячется!`);
    super.doSomething("AdminUser"); // вызываем родительский метод doSomething
  }
  constructor(name, earLength) {
    super();
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }
}

// let admin = new AdminUser("Белый кролик", 10);
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
// console.log(rabbit.name);

/*

Задача 1: Базовое наследование
Создайте класс Animal со свойствами name и методом speak(), который возвращает строку "<name> издает звук".
Наследуйте от него класс Dog, который переопределяет speak(), добавляя "Гав! " в начало результата вызова super.speak().
Цель: Проверить умение использовать super в методах и базовый синтаксис наследования.
*/
class AnimalDog {
  constructor(name) {
    // Ваш код
    this.name = name;
  }
  speak() {
    return `${this.name} издает звук`;
  }
}

class Dog extends AnimalDog {
  speak() {
    // Ваш код
    return "Гав! " + super.speak();
  }
}

const dog = new Dog("Бобик");
console.log(dog.speak()); // "Гав! Бобик издает звук"

/**Задача 2: Многоуровневое наследование
Создайте иерархию:

Vehicle → Car → ElectricCar.

Vehicle принимает maxSpeed, Car добавляет fuelType, ElectricCar добавляет batteryCapacity.

В конструкторе ElectricCar вызовите super с fuelType = "electric".
Цель: Проверить понимание цепочки конструкторов и передачу параметров через super.
 */

class Vehicle {
  constructor(maxSpeed) {
    this.maxSpeed = maxSpeed;
  }
}

class Car extends Vehicle {
  constructor(maxSpeed, fuelType) {
    super(maxSpeed);
    this.fuelType = fuelType;
    this.maxSpeed = maxSpeed;
  }
}

class ElectricCar extends Car {
  constructor(maxSpeed, batteryCapacity) {
    super(maxSpeed, "electric");
    this.batteryCapacity = batteryCapacity;
  }
}

const electroMobile = new ElectricCar(250, 100);
console.log("electroMobile: ", electroMobile);

/**Задача 3: Переопределение методов с обязательным вызовом super
Создайте класс Validator с методом validate(value), который выбрасывает ошибку, если value === undefined.
Наследуйте NumberValidator, который проверяет, что value - число, и вызывает super.validate(value).
Если super.validate() не вызван, должна возникать ошибка.
Цель: Проверить использование super как обязательного условия.
 */

class Validator {
  validate(value) {
    if (value === undefined) throw new Error("value это undefined");
  }
}

class NumberValidator extends Validator {
  validate(value) {
    console.log("value: ", typeof value);
    super.validate(value);
    if (typeof value !== "number") this.createError();
  }
  createError() {
    throw new Error("value не является числом");
  }
}

const isNumber = new NumberValidator();
isNumber.validate(5); // ОК
// isNumber.validate(); // Error

/*
 Задача 4: Исправление ошибок в наследовании
  Дан некорректный код. Найдите и исправьте ошибки:

 */
class User {
  constructor(login) {
    this.login = login;
  }
}

class Admin extends User {
  constructor(login, role) {
    super(login);
    this.role = role;
  }
}

const admin = new Admin("admin", "superuser");
console.log("admin: ", admin);

/*
Задача 5: Комплексное наследование с методами
Создайте класс Storage с методами:

save(data) - сохраняет data в свойство _data.

load() - возвращает _data.

Наследуйте EncryptedStorage, который:

Принимает key в конструкторе.

Переопределяет save(data), шифруя data как data + key (простая конкатенация) и вызывает super.save().

Переопределяет load(), возвращая расшифрованные данные (удаляет key из строки).

Цель: Проверить умение комбинировать super с модификацией данных.
 */

class Storage {
  save(data) {
    this._data = data;
  }
  load() {
    return this._data;
  }
}

class EncryptedStorage extends Storage {
  constructor(key) {
    super();
    this.key = key;
  }
  save(data) {
    super.save(data + this.key);
  }
  load() {
    const cryptoData = super.load();
    return cryptoData.replace(`${this.key}`, "");
  }
}
const secret = new EncryptedStorage("secret");
secret.save("message");
console.log(secret.load()); // "message"
