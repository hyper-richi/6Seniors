// console.log("start"); // 1

// let promise = new Promise((resolve, reject) => {
//   console.log("executor"); // 2

//   const responseUser = fetch(`https://api.github.com/users/kamalov`);

//   responseUser
//     .then((response) => {
//       console.log("then-1,response:"); // 5
//       return response.json();
//     })
//     .then((result) => {
//       console.log("then-2", result); // 6
//       return result.avatar_url;
//     })
//     .then((avatar_src) => {
//       console.log("then-3"); // 7

//       let img = document.createElement("img");
//       img.src = avatar_src;
//       img.className = "promise-avatar-example";
//       document.body.append(img);

//       setTimeout(() => {
//         img.remove();
//         console.log("remove"); // 8
//       }, 3000);
//     });

//   resolve();
//   reject();
// });

// promise.then(
//   () => console.log("then-res"), // 4
//   () => console.log("then-reject"),
// );
// promise.catch(() => console.log("catch"));

// console.log("end"); // 3

// ------------------------Promise.all-------------------------------------

// - если отменился хоть один промис, то в catch возможно посмотреть какой промис отклонен

// const promise1 = Promise.resolve("Промис 1");
// const promise2 = Promise.reject("Ошибка в промисе 2");
// const promise3 = Promise.resolve("Промис 3");

// const arrResult = Promise.all([promise1, promise3, promise2])
//   .then((results) => {
//     console.log("then-results:", results);
//     // throw new Error("throw");
//     // return results;
//   })
//   .catch((error) => {
//     console.log("Ошибка в одном из промисов:", error);
//   });

// console.log("arrResult: ", arrResult);


// Функции цепочки могут также возвращать промисы. В этом случае результат этого промиса попадет в следующий then


let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("string");
  }, 1000);
});

promise
  .then(function (result) {
    return result + "1";
  })
  /* .then(function (result) {
    return new Promise(function (resolve) {
      resolve(result + "2"); // этот результат попадет в следующий then
    });
  }) */
  .then(async function (result) {
    console.log("result-2: ", result);
    return await new Promise((resolve, reject) => {}).then((result) => {
      console.log("777");
      return result;
    });
  })
  .then(function (result) {
    console.log("result-after: ", result);
    return result + "3";
  })
  .then(function (result) {
    console.log(result); // выведет 'string123'
  });

// console.log(new Promise(function () {}) === "pending");

// ---------------------- асинхронный цикл for...of


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

// 3. Создание "пустого" промиса для инициализации цепочки

let chain = Promise.resolve();

[1, 2, 3].forEach(num => {
  chain = chain.then(() => {
    // console.log(num);
    return new Promise(resolve => setTimeout(resolve, 2000));
  });
});


