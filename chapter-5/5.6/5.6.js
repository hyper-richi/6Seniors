// "use strict";

const person = {
  name: "Mark",
  age: 30,
  interests: ["music", "fishing"],
};

// 1. вызов for..of сначала вызывает эту функцию
person[Symbol.iterator] = function () {
  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором,
  // запрашивая у него новые значения
  const properties = Object.keys(this);
  // [ 'name', 'age', 'interests' ]
  let count = 0;

  return {
    // 3. next() вызывается на каждой итерации цикла for..of

    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (count < properties.length) {
        const res = { done: false, value: person[properties[count]] };
        count++;
        return res;
      } else {
        return { done: true, value: count };
      }
    },
  };
};

// теперь работает!
// for (let num of person) {
//   console.log(num); // Mark, 30, male, [ 'music', 'fishing' ]
// }

// Array.from
// prettier-ignore
let arrayLike = {
  0: "Hello",
  1: "World",
  'n': "Fuck up",
  length: 3,
};

let arrayLike2 = {
  0: "Hello",
  1: "World",
};

// for (let value of arrayLike) {
//    console.log("arrayLike value:", value); // TypeError: arrayLike is not iterable
// }

let arr = Array.from(arrayLike); // (*)
console.log("arr", arr); // [ 'Hello', 'World' ]
for (let value of arr) {
  console.log(value); // Hello,World
}
