console.log("------------  Нестрогое равенство (==)  ------------");
let obj = {};
let copyObj = obj;
console.log("obj == copyObj:", obj == copyObj);
let obj2 = {};
console.log("obj2 == copyObj:", obj2 == copyObj);
console.log();
console.log("------ `null` vs `undefined` ------");
console.log();
console.log("null == undefined", null == undefined);
console.log("undefined == null", undefined == null);
console.log("undefined == NaN", undefined == NaN);
console.log("NaN == undefined", NaN == undefined);
console.log("NaN == NaN", NaN == NaN);
console.log('"ананас" > "яблоко"', "ананас" > "яблоко");
console.log('"2" > "12"', "2" > "12"); // сравниваются как строки без преобразования
console.log('null == "\n0\n": ', null == "\n0\n");
console.log('null === +"\n0\n": ', null === +"\n0\n");

console.log("---- строгое равенство (=== и !==) ----");
console.log("obj === copyObj:", obj === copyObj);
console.log("obj2 === copyObj:", obj2 === copyObj);
console.log("null === null", null === null);
console.log("undefined === undefined", undefined === undefined);
console.log("null === undefined", null === undefined);
