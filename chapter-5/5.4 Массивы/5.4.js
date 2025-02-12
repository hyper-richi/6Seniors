// "use strict";

// valueOf toString

const numbersArray = [1, 2, 3];

console.log(numbersArray.toString); // ƒ toString() { [native code] }
console.log(numbersArray.valueOf); // ƒ valueOf() { [native code] }
console.log(numbersArray.toLowerCase); // undefined
console.log("Symbol.toPrimitive: ", numbersArray[Symbol.toPrimitive]); // undefined

numbersArray["toString"] = function () {
  console.log("toString");
};

numbersArray["valueOf"] = function () {
  console.log("valueOf");
};

// Symbol.toPrimitive;

// numbersArray[Symbol.toPrimitive] = function (hint) {
//   console.log("hint: ", hint);
//   return "";
// };

console.log(numbersArray * 1); // NaN // valueOf
