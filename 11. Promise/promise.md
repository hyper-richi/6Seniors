## 2: Сумма нескольких промисов
Реализуйте функцию sum, принимающую произвольное количество промисов, внутри которых лежат числа, и возвращающую промис с суммой этих чисел.
Гарантируется, что промисы успешно завершаются.

```js

const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
const p3 = new Promise(resolve => resolve(3));

sum().then(console.log);            // 0
sum(p1).then(console.log);          // 1
sum(p1, p2).then(console.log);      // 3
sum(p1, p2, p3).then(console.log);  // 6


```