// Если добавить несколько .then к одному промису, они выполнятся параллельно и независимо, каждый получит один и тот же результат.

let promise = new Promise((resolve) => {
  resolve(1);
});
promise.then((result) => {
  console.log(result); // 1
});
promise.then((result) => {
  console.log(result); // 1
});
promise.then((result) => {
  console.log(result); // 1
});

// цепочка промисов это когда результат передается к следующему then

Promise.resolve("a")
  .then((result) => {
    console.log(result); // a
    return result + "b"; // ab
  })
  .then((result) => {
    console.log(result); // ab
    return result + "c"; // abc
  })
  .then((result) => {
    console.log(result); // abc
    return result + "d"; // abcd
  });

Promise.resolve("a2")
  .then((result) => {
    console.log(result); // a
    return result + "b"; // ab
  })
  .then((result) => {
    console.log(result); // ab
    return result + "c"; // abc
  })
  .then((result) => {
    console.log(result); // abc
    return result + "d"; // abcd
  });
