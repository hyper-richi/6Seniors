const user = {
  name: "John",
  status: "admin",
};

const descName = Object.getOwnPropertyDescriptor(user, "name");
console.log("descName: ", descName);

Object.defineProperty(user, "status", {
  value: this, // window
  enumerable: this, // проигнорирует
});

const decsStatus = Object.getOwnPropertyDescriptor(user, "status");

console.log("decsStatus: ", decsStatus);

// console.log(Object.getOwnPropertyDescriptor(user, "status"));

Object.getOwnPropertyDescriptor(user, "name");

const o = {};
Object.defineProperty(o, "name", { value: "value" });

/*
{
  configurable:true
  enumerable:true
  value:"value"
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
  // value: this, TypeError: Invalid property descriptor.
});

console.log("client.age: ", client.age);
