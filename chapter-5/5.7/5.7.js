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

console.log(first, second); // 10, 20
