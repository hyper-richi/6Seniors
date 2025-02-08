// "use strict";

const numbersArray = [4, 12, 8, 15, 2, 25];
console.log("numbersArray: ", numbersArray);

// numbersArray[Symbol.iterator] = null;

for (let num of numbersArray) {
  // console.log(num); // 1, затем 2, 3, 4, 5
}

let range = {
  from: 1,
  to: 5,
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {
  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором,
  // запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// теперь работает!
for (let num of range) {
  // console.log(num); // 1, затем 2, 3, 4, 5
}

const person = {
  name: "Mark",
  age: 30,
  gender: "male",
  interests: ["music", "fishing"],
};

person[Symbol.iterator] = function () {
  const properties = Object.keys(this);
  let count = 0;

  return {
    next() {
      for (let i = 0; i < properties.length; i++) {
        // console.log("i: ", i);
      }
      let result = { done: !(count < properties.length), value: count };

      count++;

      return result;

      /*  for (let i = 0; true; i++) {
        return { done: !(i < properties.length), value: i };
      } */
      /* if (count < properties.length) {
        console.log("count: ", count);
        const key = properties[count];
        let result = { done: false, value: person[key] };
        count++;
        console.log("count++: ", count);
        return result;
      } else {
        return { done: true };
      } */
    },
  };
};

console.log("person", person);

const symbolsPerson = Object.getOwnPropertySymbols(person); // посмотреть наличие Symbols
console.log("symbolsPerson: ", symbolsPerson);

const symbolsNumbersArray = Object.getOwnPropertySymbols(numbersArray); // посмотреть наличие Symbols
console.log("symbolsNumbersArray: ", symbolsNumbersArray);

// for (let num of person) {
//   console.log("for..of", num); // 1, затем 2, 3, 4, 5
// }

// какие еще методы объекта применимы к итерируемым объектам ?

for (let key in person) {
  console.log("for..in", key); // 1, затем 2, 3, 4, 5
}

// Array.from

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2,
// };

// for (let prop of arrayLike) {
//    console.log("prop", prop); // arrayLike is not iterable
// }

// let arr = Array.from(arrayLike); // (*)
// console.log(arr.pop());
