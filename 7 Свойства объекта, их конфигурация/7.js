let user = {
  name: "John",
  status: "admin",
  this: this,
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name", {
  this: this,
});
console.log("descriptor: ", descriptor);
// console.log(Object.getOwnPropertyDescriptor(user, "status"));

Object.getOwnPropertyDescriptor(user, "name");

const o = {};
Object.defineProperty(o, "name", { value: "value" });

/*
{
  configurable:true
  enumerable:true
  value:"John"
  writable:true
}
*/

const client = {
  name: "client",
  surname: "surname",
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

let descriptorClient = Object.getOwnPropertyDescriptor(client, "age");
console.log("descriptorClient: ", descriptorClient);

Object.defineProperty(client, "age", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
  this: this,
});

console.log("client.age: ", client.age);
