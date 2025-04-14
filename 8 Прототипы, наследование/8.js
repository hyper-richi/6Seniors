const animal = {
  eats: true,
  jumps() {
    console.log("jumps");
  },
};

const dog = {
  isRuns: true,
  runs() {
    console.log("runs");
  },
  map() {
    console.log("map");
  },
};

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.print = function () {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  };
}
console.dir(Person);

// Создание объектов через конструктор
const tom = new Person("Tom", 29);

// Добавление метода в прототип ф-ии конструктора
Person.prototype.log = function (arg) {
  console.log(arg);
};

// Цепочка прототипов
// поиск св-в объекта происходит вверх по цепочке прототипа

// Наследование
// объекты могут наследовать св-ва и методы от других объектов через св- прототип объекта

// Методы в прототипе
// методы в прототипе яв-ся общими для всех экземпляров объекта

// Проверка наличия свойства или метода
console.log("tom: ", tom);
console.log("name" in tom); // true
console.log("log" in tom); // true
console.log(tom.hasOwnProperty("log")); // false
console.log(tom.hasOwnProperty("name")); // true

// Модификация встроенных прототипов
// добавление в прототипы глобальных объектов новых методов
Array.prototype.myMap = function (cb) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    arr[i] = cb(this[i], i);
  }

  return arr;
};

const arr2 = [1, 2, 3].myMap((item, idx) => {
  return item * 2;
});
// console.log("arr2: ", arr2); // [2,4,6]

// Использование Object.create
// создает новый объект устанавливая в его прототип методы и св-ва родительского объекта,
// 2 аргументом принимает дескрипторы св-в.
const animalInPrototype = Object.create(animal, {
  name: {
    value: "Rex",
  },
});
console.log("animalInPrototype", animalInPrototype);

// Использование Object.assign
// копирует собственные перечислимые enumerable св-ва объекта в новый
// прототипные св-ва не копируются
console.log(Object.assign({}, animalInPrototype));

// Разница между свойствами __proto__ (или [[Prototype]]) и prototype
// __proto__ сво-во для объектов, prototype св-во для функций

// Перезапись прототипа
animalInPrototype.__proto__ = null; // стерт прототип
Object.setPrototypeOf(animalInPrototype, animal);
console.log("animalInPrototype: ", animalInPrototype);

// Удаление свойств из прототипа
delete animalInPrototype.__proto__.eats;
delete Person.prototype.constructor; // удалит constructor

// посмотреть прототип объекта
// Object.getPrototypeOf возвращает прототип объекта
console.log(animal.__proto__);
const cat = Object.create(animal);
console.log(animal.isPrototypeOf(cat)); // true
console.log("getPrototypeOf", Object.getPrototypeOf(cat));

animalInPrototype.__proto__ = Object.create(animal);
console.log(animal.isPrototypeOf(animalInPrototype)); // true

// вывести прототип ф-ии конструктора
console.log(Person.prototype);
console.dir(Person.prototype);

// **Задача 1: Создание метода через `Function.prototype`**

// Добавьте метод `logName` в `Function.prototype`, который будет выводить в консоль имя функции, вызванной этим методом.

function sayHello() {}

function whatTheFuck() {}

Function.prototype.logName = function () {
  console.log(this.name);
};

sayHello.logName(); //  sayHello
whatTheFuck.logName(); //  whatTheFuck

// **Задача 2: Имитация метода `bind`**

// Реализуйте метод `myBind` на `Function.prototype`, который работает аналогично `Function.prototype.bind`.

Function.prototype.myBind = function (obj, ...args1) {
  const originalFunction = this;
  return function (...args2) {
    return originalFunction.apply(obj, [...args1, ...args2]);
  };
};

function logMessage(greeting) {
  console.log(`${greeting}, ${this.message}`);
}

const userMessage = { message: "Hello, world!" };
const clientMessage = { message: "Give mee Iphone" };

const boundUserMessage = logMessage.myBind(userMessage, "Hi");
const boundClientMessage = logMessage.myBind(clientMessage, "Please");
boundUserMessage(); // Hi, Hello, world!
boundClientMessage(); // Please, Give mee Iphone

// **Задача 3: Имитация метода `call`**

// Реализуйте метод `myCall` на `Function.prototype`, который работает аналогично `Function.prototype.call`.

Function.prototype.myCall = function (obj, ...args) {
  obj.func = this;

  const res = obj.func(...args);

  delete obj.func;

  console.log(obj.func); // undefined

  return res;
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const alice = { name: "Alice" };
const jack = { name: "Jack" };

console.log(greet.myCall(alice, "Hello", "!")); // "Hello, Alice!"
console.log(greet.myCall(jack, "Hi", "!!!")); // "Hi, Jack!!!"

//  **Задача 4: Имитация метода `apply`**

Function.prototype.myApply = function (obj, args = []) {
  obj.func = this;

  const res = obj.func(...args);

  delete obj.func;
  console.log(obj.func); // undefined

  return res;
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

console.log(greet.myApply(alice, ["Hello2", "!"])); // "Hello2, Alice!"

// **Задача 5: Добавление метода `delay` к `Function.prototype`**

// Создайте метод `delay` в `Function.prototype`, который позволяет вызвать функцию с задержкой.

Function.prototype.delay = function (time, ...args) {
  setTimeout(() => this(...args), time);
};

function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

sayHi.delay(2000, "Jack"); // Выведет "Hi, Jack!" через 2 секунды

// **Задача 6: Ограничение вызова функции (`once`)**

// Добавьте метод `once` в `Function.prototype`, который гарантирует, что функция будет вызвана только один раз.

Function.prototype.once = function () {
  const func = this;
  let wasCall = false;

  return function () {
    if (wasCall) {
      // console.log("no call");
      return;
    } else {
      func();
      wasCall = true;
    }
  };
};

const greetOnce = greet.once();
greetOnce(); // Выведет "Hello!"
greetOnce(); // no call
greetOnce(); // no call

// **Задача 7: Метод `after` для выполнения функции после N вызовов**

// Создайте метод `after` в `Function.prototype`, который изменяет функцию так,
// что она выполнится только после N вызовов.

Function.prototype.after = function (countCalls) {
  let count = 0;
  const func = this;

  return function () {
    count++;
    console.log("count: ", count);

    if (count < countCalls) {
      // console.log("no call");
      return;
    } else {
      func();
    }
  };
};

function showMessage() {
  console.log("Message");
}

const showAfter3Calls = showMessage.after(3);

showAfter3Calls(); // Ничего не происходит
showAfter3Calls(); // Ничего не происходит
showAfter3Calls(); // "Message"
showAfter3Calls(); // "Message"
