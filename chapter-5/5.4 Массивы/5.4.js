// "use strict";
let arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(arr + ""); // 1,2,3,1,2,3,1,2,3

const numbersArray = [4, 12, 8, 15, 2, 25];

numbersArray.filter(function (item) {
  return item > 10;
});

numbersArray["02"] = "02";
numbersArray["12"] = 12;
numbersArray[-1] = -1;
console.log("numbersArray[-1]: ", numbersArray[-1]);
console.log("numbersArray[02]: ", numbersArray["02"]);
console.log("numbersArray: ", numbersArray);

for (let value of numbersArray) {
  console.log("not iterable index", value);
}

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
  console.log('with iterator',value);
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

let fruits = ["Apple", "Orange", "Plum"];

// fruits[Symbol.toPrimitive] = function (hint) {
//   console.log("hint: ", hint); // number
// };

//console.log(`${numbersArray}`);
