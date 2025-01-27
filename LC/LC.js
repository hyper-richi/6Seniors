// 1. Написать функцию, которая возвращает массив с минимальным и максимальным числами из этого массива.
const nums = [4, 5, 1, 2, -10, 100, 5]; // [ -10, 100]
const nums2 = [40, 0.5, 1, 22, 10, 11, 5]; // [ -10, 100]

function getMaxMin(array) {
    const maxValues = array.sort((a, b) => a - b);

    return [maxValues[0], maxValues[maxValues.length - 1]];
}

// console.log(getMaxMin(nums));
// console.log(getMaxMin(nums2));

// 3. Написать реализацию parseInt.

/* function parseIntCustom(str) {
    let resultStr = "";

    for (let i = 0; i < str.length; i++) {
        if (!Object.is(NaN, Number(str[i]))) {
            resultStr += str[i];
        } else if (Object.is(NaN, Number(str[0]))) {
            return NaN;
        } else break;
    }
    return Number(resultStr);
} */

function parseIntCustom(number) {
    let newNumber = [];

    for (let x of number) {
        console.log("x: ", x);
        !isNaN(x) ? newNumber.push(x) : "";
    }
    return newNumber.join("");
}

console.log(parseIntCustom("0px")); // 0
// console.log(parseIntCustom("1px")); // 1
// console.log(parseIntCustom("100px")); // 100
// console.log(parseIntCustom("100.5px")); // 100
// console.log(parseIntCustom("px100.5px")); // NaN

/* console.log("0px".match(/\d+/)[0]); // 0
console.log("match", "100.5px".match(/\d+/)); // 100
console.log("100.5px".match(/\d+/)[0]); // 100
console.log("120px".match(/\d+/)[0]); // 120
console.log("px15px".match(/\d+/)[0]); // 15

console.log("px15px".replace(/[^0-9]/g, "")); // 15
console.log("150px".replace(/[^0-9]/g, "")); // 150
console.log("100.5px".replace(/[^0-9]/g, "")); // 1005 */

// console.log('parseInt("100px"): ', parseInt("100px")); // 100
// console.log('parseInt("100.5px"): ', parseInt("100.5px")); // 100
// console.log('parseInt("px100.5px"): ', parseInt("px100.5px")); // NaN

function minAndMax(nums) {
    return [Math.min(...nums), Math.max(...nums)];
}

console.log("minAndMax: ", minAndMax(nums));
