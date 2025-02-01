// "use strict";

// медленный for in для массивов.

let orangeArr = new Array(10).fill("Orange");

function getTimeForOfArray() {
    const start = performance.now();

    for (let prop of orangeArr) {
        console.log("prop: ", prop);
    }

    const end = performance.now();
    console.log(`for of time: ${end - start} milliseconds`); // 5.740700006484985
}

function getTimeForInArray() {
    const start = performance.now();

    for (let i in orangeArr) {
        console.log("i:", orangeArr[i]);
    }

    const end = performance.now();
    console.log(`for in time: ${end - start} milliseconds`); // 0.7041999995708466
}

//getTimeForOfArray();
//getTimeForInArray();

// Задача 1: Фильтрация массива больше 10
const numbers = [4, 12, 8, 15, 2, 25];

function filterArray(arr) {
    /* const res = arr.filter((item) => item > 10);
    console.log("res: ", res); */
    const res = arr.map((item) => (item > 10 ? item : null));
    console.log("res: ", res);
}
filterArray(numbers);
