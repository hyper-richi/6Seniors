//codeium:disable

const person = {
  name: "Mark",
  level: 30,
  gender: "male",
  interests: ["music", "fishing"],
};

const entries = [
  ["key1", "value1"],
  ["key2", "value2"],
];

const arr = [10, 20, 30];

// Попытка деструктурировать массив как объект
const { 0: first, 1: second } = arr;

const myWeakMap = new WeakMap();
const keyObj = { id: 1 };

myWeakMap.set(keyObj, "data");

// Попытка сериализации
const serializedWeakMap = JSON.stringify(myWeakMap); // пустой объект
console.log("serializedWeakMap: ", serializedWeakMap);
