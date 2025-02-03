// "use strict";

// Задача 1: Фильтрация массива больше 10
const numbersArray = [4, 12, 8, 15, 2, 25];
console.log("numbersArray: ", numbersArray);

function filterArray(arr) {
  /* const res = arr.filter((item) => item > 10);
    console.log("res: ", res); */
  const res = arr.map((item) => (item > 10 ? item : null));
  console.log("res: ", res);
}
//filterArray(numbersArray);

// Задача 2: Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен
//  работать для массивов с любой длиной.

let fruits = ["Классика", "Яблоки", "Груша", "Апельсин"];

function writeInArray(arr) {
  const middle = arr.length % 2 === 0 ? arr.length / 2 : Math.round(arr.length / 2);

  // console.log(arr.splice(middle, 0, "Классика"));

  return arr.splice(middle, 0, "Классика");
}

// writeInArray(fruits);

// console.log(fruits);

// Задача 3: Вызов в контексте массива

let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

//arr[2](); // [ 'a', 'b', [Function (anonymous)] ]
// console.log(arr); // [ 'a', 'b', [Function (anonymous)] ]

// Фильтрация массива

// Задача 4: Дан массив чисел. Напишите функцию, которая возвращает новый массив, содержащий только
// четные числа.

function getEvenNumbers(arr) {
  const evenNumbersArr = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbersArr.push(num);
    }
  }
  return evenNumbersArr;
}

// console.log(getEvenNumbers(numbersArray));

// Задача 5: Напишите функцию, которая суммирует числа

function getSum() {
  let sum = 0;
  for (let num of numbersArray) {
    sum += num;
  }
  return sum;
}

function getSum2() {
  let sum = 0;

  numbersArray.forEach((item) => (sum += item));
  return sum;
}
// console.log("getSumArow: ", getSumArow(numbersArray));
// console.log("sum: ", sum);

// 3. Поиск и фильтрация

// 3.1 Найдите индекс первого элемента, который равен заданному значению.

function getIdxFirstItem(findValue) {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === findValue) return i;
  }
}
console.log(numbersArray.indexOf(2));
console.log(getIdxFirstItem(2));

// 3.2 Проверьте, все ли элементы массива удовлетворяют определенному условию.

function getEveryCondition(condition) {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === findValue) return i;
  }
}
console.log(getEveryCondition(condition))
// 3.3 Создайте новый массив, содержащий только элементы, которые удовлетворяют условию.

// 3.4 Найдите первый элемент массива, который удовлетворяет условию.
