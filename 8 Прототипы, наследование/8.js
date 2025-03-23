const animal = {
  eats: true,
};

const dog = {
  jumps: true,
};

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.print = function () {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  };
}

// Создание объектов через конструктор
const tom = new Person("Tom", 29);
console.log("Person: ", Person);
console.dir(Person);

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
console.log("name" in tom); // true
console.log("log" in tom); // true
console.log(tom.hasOwnProperty("log")); // false
console.log(tom.hasOwnProperty("name")); // true

// Модификация встроенных прототипов
// добавление в прототипы глобальных объектов новых методов

Array.prototype.myMap = function (){
  
}

// Использование Object.create
// разницу между свойствами __proto__ (или [[Prototype]]) и prototype
// __proto__ сво-во для объектов, prototype св-во для функций
// Перезапись прототипа
// Удаление свойств из прототипа
// посмотреть прототип объекта

// console.log(animal.__proto__);
// console.log(Object.getPrototypeOf(animal));

// вывести прототип ф-ии конструктора
