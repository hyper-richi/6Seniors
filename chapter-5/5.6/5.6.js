// "use strict";


const person = {
  name: "Mark",
  age: 30,
  gender: "male",
  interests: ["music", "fishing"],
};

// 1. вызов for..of сначала вызывает эту функцию
person[Symbol.iterator] = function () {
  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором,
  // запрашивая у него новые значения
  const properties = Object.keys(this);
  console.log("properties: ", properties);
  let count = 0;

  return {
    // 3. next() вызывается на каждой итерации цикла for..of

    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}

      let result = { done: !(count < properties.length), value: person[properties[count++]] };

      return result;
    },
  };
};

for (let value of person) {
  console.log("value", value); //
}

// Array.from

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arrayLike2 = {
  0: "Hello",
  1: "World",
};

// for (let value of arrayLike) {
//   console.log("value", value); // TypeError: arrayLike is not iterable
// }

let arr = Array.from(arrayLike2); // (*)
console.log("arr", arr); // [ 'Hello', 'World' ]
for (let value of arr) {
  console.log(value); // Hello,World
}

const person2 = {
  name: "Mark",
  age: 30,
  gender: "male",
  interests: ["music", "fishing"],
};

const arrPerson = Array.from(person);
console.log("arrPerson: ", arrPerson); // []
