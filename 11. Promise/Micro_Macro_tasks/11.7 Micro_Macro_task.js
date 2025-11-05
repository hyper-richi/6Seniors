console.log("micro");
/*
1. Sleep
Необходимо реализовать функцию sleep, которая принимает время ms (в миллисекундах), на которое замедляется выполнение цепочки промисов.

Пример
Функция multiplyBy3 принимает число и возвращает промис с утроенным числом, который резолвится через 500 мс
Функция divideBy5 аналогично делит на 5 через 1500 мс
Функция square возводит в квадрат через 2000 мс
*/
// multiplyBy3(10)
//   .then((x) => divideBy5(x))
//   .then((x) => square(x))
//   .then((x) => console.log(x)); // 36 через 4 секунды

// multiplyBy3(10)
//   .then((x) => divideBy5(x))
//   .then(sleep(2000)) // добавляет дополнительные 2 секунды
//   .then((x) => square(x))
//   .then((x) => console.log(x)); // 36 через 6 секунд

function multiplyBy3(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 500);
  });
}
function divideBy5(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num / 5);
    }, 1500);
  });
}
function square(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num ** 2);
    }, 2000);
  });
}

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

Promise.resolve()
  .then(() => console.log(0))
  .then(() => console.log("00"));

Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2));

Promise.resolve()
  .then(() => console.log(3))
  .then(() => console.log(4))
  .then(() => console.log(5));
