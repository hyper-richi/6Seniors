//codeium:disable

const person = {
  name: "Mark",
  age: 30,
  gender: "male",
  interests: ["music", "fishing"],
};

const entries = [
  ["key1", "value1"],
  ["key2", "value2"],
];

const objEntries = Object.fromEntries(entries);

const contacts = new Map();

// установить значения Map

contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.set("1", "Значение под строковым ключом 1");
contacts.set(2, "Значение под числовым ключом 2");
contacts.set(true, "Значение под булевым ключом true");

// как синтаксис объекта
contacts[123] = 123;
contacts.value = "value";

// Методы перебора коллекции Map

// for of

for (let value of contacts) {
  // console.log("for..of", value); // [ 'Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' } ]
}

// for in не срабатывает

for (let key in contacts) {
  // console.log("for in:", key);
}

// forEach

contacts.forEach((value, key, map) => {
  // console.log("key: ", key);
  // console.log("value: ", value);
  // console.log("map: ", map);
  // console.log("forEach:", `${key}: ${value}`); // forEach: 1: Значение под строковым ключом 1
});

// this

contacts.set("getThis", function () {
  //console.log("this", this); // globalObject
});

const getThis = contacts.get("getThis");
getThis();

// Методы перебора map.keys()

const mapKeys = contacts.keys(); // [Map Iterator] { 'Jessie', '1', 2, true, 'getThis' }

// перебирается for..of

for (let key of mapKeys) {
  // console.log("for..of", key); // 'Jessie', '1', 2, true, 'getThis'
}

// for in не срабатывает

for (let key in mapKeys) {
  // console.log("for in:", key);
}

const mapValues = contacts.values(); // [Map Iterator] {  { phone: '213-555-1234', address: '123 N 1st Ave' },{"Значение под строковым ключом 1"} ....}

for (let values of mapValues) {
  // console.log("for..of", values);
}

const mapEntries = contacts.entries(); // {[ключ, значение]}, этот вариант используется по умолчанию в for..of.

for (let [key, value] of mapEntries) {
  // console.log("for..of", key, value);
}

const key = "Jessie";
contacts.delete(key); // true возвращает если удалил, false если ключ не найден

// Object.entries: Map из Object
// создать из объекта Map
const obj = { a: 1, b: 2, c: 3 };
const map = new Map(Object.entries(obj));

// Object.fromEntries: Object из Map
// создать из Map -> Object

const obj2 = Object.fromEntries(map);
// console.log(obj2);

// Set

const mySet = new Set([1, 2, "Jessie", true, 1, { a: 1 }, { a: 1 }]);
// console.log("mySet: ", mySet); // { 1, 2, 'Jessie', true, { a: 1 }, { a: 1 } }

// кол-во элементов
mySet.size; // 3

// удалить всё

// mySet.clear();

// проверка наличия элемента

mySet.has(1); // true

// удалить значение

mySet.delete(2); // true если удалилось, false если нет значения

// добавить значение

mySet.add(2); // возвращает тот же объект set

// перебор элементов

mySet.forEach((value, valueAgain, mySet) => {
  // console.log(value);
});

for (let value of mySet) {
  // console.log(value);
}

const values = mySet.values(); // [Set Iterator] { 1, 'Jessie', true, { a: 1 }, { a: 1 }, 2 }

const keys = mySet.keys(); // [Set Iterator] { 1, 'Jessie', true, { a: 1 }, { a: 1 }, 2 }

const arrValues = mySet.entries(); // [ value,value ] {  [ 1, 1 ],  [ 'Jessie', 'Jessie' ],  [ true, true ],  [ { a: 1 }, { a: 1 } ],  [ { a: 1 }, { a: 1 } ],  [ 2, 2 ] }

// Задачи

// Ожидаемый результат:
// [{ id: 1, name: "Alice" }]

const users = [
  { id: 0, name: "Alice0" },
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 2, name: "Bob2" },
  { id: 1, name: "Alice2" },
  { id: 1, name: "Alice3" },
  { id: 3, name: "Charlie" },
  { id: 3, name: "Charlie3" },
];

function dublicate() {
  const unique = new Map();
  const dublicate = new Map();

  for (let item of users) {
    if (dublicate.has(item.id)) {
      continue;
    } else {
      unique.has(item.id) ? dublicate.set(item.id, item) : unique.set(item.id, item);
    }
  }

  return [...dublicate.values()];
}

console.log("dublicate: ", dublicate());
