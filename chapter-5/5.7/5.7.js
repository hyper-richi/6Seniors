// "use strict";

const person = {
  name: "Mark",
  age: 30,
  gender: "male",
  interests: ["music", "fishing"],
};

person.name = "Bob";
person.name = "Jonathan";

// console.log("person: ", person); // здесь еще нет св-ва 'some'

// person["some"] = "что-то";

// console.log("person: ", person); // здесь есть св-во 'some'

const contacts = new Map();

contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.set("1", "Значение под строковым ключом 1");
contacts.set(2, "Значение под числовым ключом 2");
contacts.set(true, "Значение под булевым ключом true");

contacts[123] = 123;
contacts.value = "value";
console.log("contacts.value: ", contacts.value);
console.log("contacts[123]: ", contacts[123]);

// прочитать значение Map

// console.log(contacts["1"]); // undеfined не читатется
// console.log(contacts.get("1")); // "Значение под строковым ключом 1"

// Методы перебора коллекции Map

// for of

for (let value of contacts) {
  console.log("for..of", value); // [ 'Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' } ]
}

// for in не срабатывает

// for (let key in contacts) {
//   console.log("for in:", key);
// }

// contacts.forEach((value, key, map) => {
//   console.log("key: ", key);
//   console.log("value: ", value);
//   console.log("map: ", map);
//   console.log("forEach:", `${key}: ${value}`); // forEach: 1: Значение под строковым ключом 1
// });

// this

// contacts.set("getThis", function () {
//   console.log(this);
// });

// contacts["prop"] = "value";

// const getThis = contacts.get("getThis");
// console.log(getThis()); // globalThis

// Методы перебора map.keys()

//const mapKeys = contacts.keys();
// console.log("mapKeys: ", mapKeys);

// for of

// for (let key of mapKeys) {
//    console.log("for..of", `${key}`);
// }

// for in не срабатывает

// for (let key in mapKeys) {
//    console.log("for in:", `${key}`);
// }

// forEach

// mapKeys.forEach((value, key, map) => {
//    console.log(`${key}: ${value}`); TypeError: mapKeys.forEach is not a function
// });

// const mapValues = contacts.values();

// for (let key of mapValues) {
//    console.log("for..of", `${key}`);
// }

// const mapEntries = contacts.entries();
// console.log("mapEntries: ", mapEntries);

// for (let [key, value] of mapEntries) {
//    console.log("for..of", `${key}:`, `${value}`);
// }
