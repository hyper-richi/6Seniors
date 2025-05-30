// Задача 1. Переписать на Promise

function getSmth(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * num), 1000);
  });
}

async function func() {
  let arr = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let elem of arr) {
    console.log("elem: ", elem);
    sum += await getSmth(elem);
  }

  console.log("sum", sum);
}
// console.log("start");
// func();

//------------------------------------------------------

// var p3 = new Promise(function (resolve, reject) {
//   resolve("B");
// });

// var p1 = new Promise(function (resolve, reject) {
//   resolve(p3);
// });

// var p2 = new Promise(function (resolve, reject) {
//   resolve("A");
// });

// p1.then(function (v) {
//   console.log(v);
// });

// p2.then(function (v) {
//   console.log(v);
// });

//------------------------------------------------------

// Задача 2. Все промисы отработали по очереди, с интревалом в 1 сек.
// Сейчас появляются 3 массива сразу, один массив с 1 элементом, второй массив с двумя элементами и т.д

// console.time("test");

const myPromise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("I'm done-3000");
  }, 3000),
);

const myPromise2 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Me too!-1500");
  }, 1500),
);

const myPromise3 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Finished!-1000");
  }, 1000),
);

const myPromise4 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("2000!");
  }, 2000),
);

// function handlePromises(...args) {
//   const results = [];

//    results.push(await myPromise1);
//   console.log(results);

//   results.push(await myPromise2);
//   console.log(results);

//   results.push(await myPromise3);
//   console.log(results);
// }

// handlePromises(myPromise1, myPromise2, myPromise3);
// console.timeEnd("test");

// **************--Решение--*******************

/* const myPromise1 = function name(params) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("I'm done 1000");
    }, 100),
  );
};

const myPromise2 = function name(params) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Me too! 2000");
    }, 200),
  );
};

const myPromise3 = function name(params) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Finished! 3000");
    }, 300),
  );
}; */

async function handlePromises(...args) {
  const results = [];

  results.push(await myPromise1);
  console.log(results);

  results.push(await myPromise2);
  console.log(results);

  results.push(await myPromise3);
  console.log(results);
}

// handlePromises(myPromise1, myPromise2, myPromise3);
// console.timeEnd("test");

// Задача 3 Сумма двух промисов

// Реализуйте функцию sum, принимающую два промиса, внутри которых лежат числа, и возвращающую промис с суммой этих чисел.
// Гарантируется, что промисы успешно завершаются.

// const p1 = new Promise((resolve) => resolve(1));
// const p2 = new Promise((resolve) => resolve(2));

// sum(p1, p2).then((result) => {
//   console.log("sum", result); // 1 + 2 === 3
// });

// ==================--Решение--====================

// Вариант на промисах
// function sum(p1, p2) {
//   return Promise.all([p1, p2]).then(([val1, val2]) => {
//     return new Promise((resolve) => resolve(val1 + val2)).then((result) => {
//       return result;
//     });
//   });
// }

// Вариант на async/await

// async function sum2(p1, p2) {
//   const n1 = await p1; // ждём завершения первого промиса
//   const n2 = await p2; // ждём завершения второго промиса
//   return n1 + n2; // возвращаем сумму — автоматически оборачивается в промис
// }
// sum2(p1, p2).then((result) => {
//   console.log("sum2", result); // 1 + 2 === 3
// });

// Задача 3

// const p1 = new Promise((resolve) => resolve(1));
// const p2 = new Promise((resolve) => resolve(2));
// const p3 = new Promise((resolve) => resolve(3));

// Вариант на промисах

// function sum(...args) {
//   return Promise.all(args).then((arrRes) => {
//     return arrRes.reduce((prev, current) => prev + current, 0);
//   });
// }

// sum().then(console.log); // 0
// sum(p1).then(console.log); // 1
// sum(p1, p2).then(console.log); // 3
// sum(p1, p2, p3).then(console.log); // 6

// Вариант на async/await

// async function sum2(...args) {
//   const arrRes = await Promise.all(args);
//   return arrRes.reduce((prev, current) => prev + current, 0);
// }

// sum2().then(console.log); // 0
// sum2(p1).then(console.log); // 1
// sum2(p1, p2).then(console.log); // 3
// sum2(p1, p2, p3).then(console.log); // 6

// Задача 4 Promise Logic
// https://maxcode.dev/problems/promise-logic/
/*
Реализуйте функцию and, которая принимает два промиса и возвращает промис.

Если оба входных промиса резолвятся, итоговый промис тоже должен резолвнуться.
Если хотя бы один из входных промисов реджектится, итоговый промис реджектится.

Итоговый промис может резолвиться или реджектиться любым значением, это никак не проверяется.

*/

// async function and(p1, p2) {
//   return await Promise.all([p1, p2]).then((result) => result);
// }

// and(Promise.resolve(1), Promise.resolve(2)).then(
//   () => console.log("fulfulled"), // ✓
//   () => console.log("rejected"),
// );

// and(Promise.reject(1), Promise.resolve(2)).then(
//   () => console.log("fulfulled"),
//   () => console.log("rejected"), // ✓
// );

/*
// Задача 5 Количество успешных промисов

Реализуйте функцию countFulfilledPromises, которая принимает произвольное количество промисов и возвращает промис,
в котором лежит количество успешно завершившихся промисов.
*/

// const p1 = new Promise((resolve) => resolve(11));
// const p2 = new Promise((resolve) => resolve(22));
// const p3 = new Promise((_, reject) => reject(33));

// countFulfilledPromises().then(console.log); // 0
// countFulfilledPromises(p1).then(console.log); // 1
// countFulfilledPromises(p1, p2).then(console.log); // 2
// countFulfilledPromises(p1, p2, p3).then(console.log); // 2
// countFulfilledPromises(p1, p3).then(console.log); // 1
// countFulfilledPromises(p3).then(console.log); // 0

// async function countFulfilledPromises(...promises) {
//   return Promise.allSettled(promises).then((results) => results.filter(({ status }) => status === "fulfilled").length);
// }

/*
// Задача 6 Promise.race
Своя реализация существующего метода и называется полифилом. Необходимо реализовать полифил стандартного метода Promise.race.

Что принимает race
Функция race принимает iterable, например, Array или Set. У iterable нет длины, но, например, по нему можно пройти циклом for-of.

Что возвращает race
Функция race возвращает промис, который завершается значением и статусом первого завершившегося промиса из коллекции.
Если в iterable есть элементы, не являющиеся промисом, то итоговый промис зарезолвится первым из них.
*/

let rand = (name) => {
  const time = Math.random() * 2000;
  console.log(`time: ${name}`, time);
  return time;
};

let p1 = new Promise((r) => setTimeout(r, rand("A"), "A"));
let p2 = new Promise((r) => setTimeout(r, rand("B"), "B"));
let p3 = new Promise((r) => setTimeout(r, rand("C"), "C"));
let p4 = new Promise((r) => setTimeout(r, rand("D"), "D"));

function race(promises) {
  return new Promise((resolve, reject) => {
    let settled = false;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          if (!settled) {
            settled = true;
            resolve(value);
          }
        })
        .catch((error) => {
          if (!settled) {
            settled = true;
            reject(error);
          }
        });
    });

    // Если передан пустой массив, промис никогда не разрешится
  });
}

// race([p1, p2, p3, 'p4']).then(
//   (value) => console.log("1 >>>", value),
//   (reason) => console.log("2 >>>", reason),
// );

/*
Упрощенный Promise.all
Необходимо реализовать упрощенную версию стандартного метода Promise.all.

Допустим, у нас есть три промиса:

p1 резолвится значением "🍎" через 2 секунды
p2 резолвится значением "🍋" через 3 секунды
p3 резолвится значением "🍉" через 1 секунду
Функция all принимает массив промисов и возвращает новый промис. Через 3 секунды он резолвится массивом результатов переданных промисов.
Порядок значений должен соответствовать порядку промисов в массиве.

Гарантируется, что входящие промисы никогда не станут rejected.
*/

/*
function all(promises) {
  return new Promise(async (resolve, reject) => {
    const results = [];

    for (let promise of promises) {
      results.push(await Promise.resolve(promise));
    }
    resolve(results);
  });
}
  */

function all(promises) {
  return new Promise((resolve, reject) => {
    const results = new Array(promises.length);
    let completed = 0;

    promises.map((promise, idx) => {
      Promise.resolve(promise).then((result) => {
        results[idx] = result;
        if (++completed === promises.length) resolve(results);
      });
    });
  });
}

// function all(promises) {

//   return new Promise((resolve) => {
//     const results = new Array(promises.length);
//     let completed = 0;

//     promises.map((promise, index) => {
//       Promise.resolve(promise).then(value => {
//         results[index] = value;
//         if (++completed === promises.length) resolve(results);
//       });
//     });
//   });
// }

// Код для тестирования

rand = () => Math.random() * 2000;

p1 = new Promise((r) => setTimeout(r, rand(), "A"));
p2 = new Promise((r) => setTimeout(r, rand(), "B"));
p3 = new Promise((r) => setTimeout(r, rand(), "C"));
p4 = new Promise((/* _, */ r) => setTimeout(r, rand(), "D"));

// all([p1, p2, p3, p4]).then(
//   (value) => console.log("1 >>>", value),
//   (reason) => console.log("2 >>>", reason),
// );

/*

Дополнительные требования
Подробное описание того, как работает Promise.all можно прочитать на mdn.

all принимает iterable, например, Array или Set.
Элементами этого iterable могут быть промисом или не промисом.
Если значение в iterable не является промисом, то оно в том же виде попадает в ответ.
Итоговый промис резолвится массивом с результатами промисов в том же порядке, в каком промисы находились в iterable.
Если передается пустой iterable, итоговый промис резолвится пустым массивом.
Итоговый промис реджектится, когда реджектится любой из промисов, значением этого реджектнутого промиса.

*/

// function all(promises) {
//   const arrPromises = Array.from(promises);

//   if (arrPromises.length === 0) return Promise.resolve([]);

//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completed = 0;

//     arrPromises.forEach((promise, idx) => {
//       Promise.resolve(promise)
//         .then((result) => {
//           results[idx] = result;
//           if (++completed === arrPromises.length) resolve(results);
//         })
//         .catch((error) => reject(error));
//     });
//   });
// }

// Полифил Promise.allSettled

// Дополнительные требования
// Подробное описание того, как работает Promise.allSettled можно прочитать на mdn.

// allSettled принимает iterable, например, Array или Set.
// Элементы этого iterable могут быть промисами или не промисами.
// Если значение в iterable не является промисом, то оно в том же виде попадает в ответ.
// Итоговый промис резолвится массивом, содержащим информацию о промисах в том же порядке, в каком промисы находились в iterable.
// Если передается пустой iterable, итоговый промис резолвится пустым массивом.

