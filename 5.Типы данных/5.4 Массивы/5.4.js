// "use strict";

// valueOf toString

// Массивы не имеют Symbol.toPrimitive, ни valueOf, они реализуют только toString преобразование

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

// console.log(numbersArray * 1); // NaN // valueOf

const array = [1, 2, 3];

const res = array.reduce((acc, item, idx, arr) => {
  arr[idx] += 1; // [ 2, 3, 4 ]
}, 0);
const resForEach = array.forEach((item, idx) => {
  //array[idx] += 1;
});
console.log("array: ", array);
console.log("res: ", res);

const retSplice = array.splice(0,1)
console.log('retSplice: ', retSplice); // [ 2 ]