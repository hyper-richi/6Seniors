let user = {
  name: "John",
  status: "admin",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(Object.getOwnPropertyDescriptor(user, "status"));

Object.getOwnPropertyDescriptor(user, "name");

const o = {};
Object.defineProperty(o, "name", { value: "value" });

// console.log(Object.getOwnPropertyDescriptor(o, "name"));

/*
{
  configurable:true
  enumerable:true
  value:"John"
  writable:true
}
*/

const client = {
  _age: 23,
  get age() {
    return this._age;
  },
  set age(value) {
    if (0 <= value && value >= 120) {
      console.log("Ошибка: Некорректный возраст!");
      return;
    } else {
      this._age = value;
    }
  },
};

// Object.defineProperty(client, "age", {
//   get() {
//     return this._age;
//   },
//   set(value) {
//     if (0 <= value && value >= 120) {
//       console.log("Ошибка: Некорректный возраст!");
//       return;
//     } else {
//       this._age = value;
//     }
//   },
//   /*   enumerable: true,
//   configurable: false,
//  */
// });

const descriptorClient = Object.getOwnPropertyDescriptor(client, "age");
// console.log("descriptorClient: ", descriptorClient);

// client.age = 25;
// console.log("client: ", client);
// console.log(client.age); //  25
// client.age = 150; // Ошибка: Некорректный возраст

const calculator = {
  a: 0, // исчезнут если удалить гетеры a/b
  b: 0,
  _sum: null,

  get sum() {
    if (this._sum === null) {
      this._sum = this.a + this.b;
      console.log("Сумма вычислена!");
    }
    return this._sum;
  },
  set sum(value) {
    console.log("Нельзя установить значение напрямую!");
  },
  set a(value) {
    console.log("set a");
    this._a = value;
    this._sum = null; // Сбрасываем _sum при изменении a
  },
  get a() {
    return this._a;
  },
  set b(value) {
    console.log("set b");

    this._b = value;
    this._sum = null; // Сбрасываем _sum при изменении a
  },
  get b() {
    return this._b;
  },
};

// Object.defineProperty(calculator, "");

console.log("calculator: ", calculator);
calculator.a = 10;
calculator.b = 20;
console.log(calculator.sum); // 30 (вычисляется в момент обращения)
calculator.a = 5;
console.log(calculator.sum); //  25 (значение пересчитывается)
