// "use strict";
let arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// console.log(arr + ""); // 1,2,3,1,2,3,1,2,3

const numbersArray = [4, 12, 8, 15, 2, 25];

numbersArray.filter(function (item) {
  return item > 10;
});

numbersArray["02"] = "02";
numbersArray["12"] = 12;
numbersArray[-1] = -1;
// console.log("numbersArray[-1]: ", numbersArray[-1]);
// console.log("numbersArray[02]: ", numbersArray["02"]);
// console.log("numbersArray: ", numbersArray);

// итерационные методы массивов и циклы пропускают не целлочисленные индексы

for (let value of numbersArray) {
  // console.log("not iterable index", value);
}

// подключаем Symbol.iterator и выводим все св-ва и не целлочисленные индексы

numbersArray[Symbol.iterator] = function () {
  const properties = Object.keys(this);
  let count = 0;

  return {
    next() {
      const key = properties[count];
      let result = { done: !(count < properties.length), value: numbersArray[key] };
      count++;
      return result;
    },
  };
};

for (let value of numbersArray) {
  // console.log("with iterator", value);
}

// valueOf toString

// numbersArray["toString"] = function (...args) {
//   console.log("toString");
// };

// numbersArray["valueOf"] = function (...args) {
//   console.log("valueOf");
// };

// numbersArray["default"] = function (...args) {
//   console.log("default");
// };

// Symbol.toPrimitive

let fruits = ["Apple", "Orange", "Plum", 1, 2, 3];

console.log(
  "map: ",
  fruits.map((item) => {
    if ("string" === typeof item) return item; // [ 'Apple', 'Orange', 'Plum', undefined, undefined, undefined ]
  }),
);
console.log("unshift: ", fruits.unshift("unshift"), fruits);
console.log("push: ", fruits.push("push"), fruits);
console.log("slice: ", fruits.slice(0, 1), fruits);
console.log("splice: ", fruits.splice(0, 2, "splice"), fruits);
console.log(  "reduce: ",  fruits.reduce((acc, item) => acc + item, 0),); // 0spliceOrangePlum123push

let fruits2 = ["Apple", "Orange", "Plum", 1, 2, 3, numbersArray];

console.log('includes:	', fruits2.includes(numbersArray)); // true