# Задачи

1. Написать функцию, которая возвращает массив с минимальным и максимальным числами из этого массива.

```
 let nums = [4, 5, 1, 2, -10, 100, 5] // [ -10, 100]
```

```js
function getMaxMin(array) {
    const maxValues = array.sort((a, b) => a - b);

    return [maxValues[0], maxValues[maxValues.length - 1]];
}

console.log(getMaxMin(nums));
```

2. Сделать цикл и вывести числа от 0 до 100 включительно в console.log

    - Если число делится на 3 то рядом с числом вывести строку «Fizz».
    - Если число делится на 5, то рядом с числом вывести строку «Buzz».
    - Если число делится одновременно на 3 и на 5, то рядом вывести «FizzBuzz».

```js
function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && !(i % 5 === 0)) {
            console.log("Fizz", i);
        }

        if (i % 5 === 0 && !(i % 3 === 0)) {
            console.log("Buzz", i);
        }

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz", i);
        }
    }
}
fizzBuzz();
```

3. Написать реализацию parseInt.

```js
function parseIntCustom(str) {
    let resultStr = "";

    for (let i = 0; i < str.length; i++) {
        if (!Object.is(NaN, Number(str[i]))) {
            resultStr += str[i];
        } else if (Object.is(NaN, Number(str[0]))) {
            return NaN;
        } else break;
    }
    return Number(resultStr);
}

console.log(parseIntCustom("0px")); // 0
console.log(parseIntCustom("1px")); // 1
console.log(parseIntCustom("100px")); // 100
console.log(parseIntCustom("100.5px")); // 100
console.log(parseIntCustom("px100.5px")); // NaN

// console.log('parseInt("100px"): ', parseInt("100px")); // 100
// console.log('parseInt("100.5px"): ', parseInt("100.5px")); // 100
// console.log('parseInt("px100.5px"): ', parseInt("px100.5px")); // NaN
```

4.  Написать функцию, которая проверяет, является ли строка палиндромом. Вернуть true, если является, и false если нет.
Палиндром - это когда строка одинаково читается в обе стороны (пробелы и регистры букв опускаются)

Например:

Вход: «А Роза упала на лапу Азора» Выход: true

Вход: «Hello World» Выход: false

const word = 'А Роза упала на лапу Азора'

function isPalindrom(word) { const lowerWord = word.toLowerCase().split(' ').join('') console.log(lowerWord); // const wordRevert = lowerWord.toLowerCase().split('').reverse().join('') // return wordRevert === word return lowerWord.split('').every((char, index) => char === lowerWord[lowerWord.length - index - 1]); }

console.log(isPalindrom('А Роза упала на лапу Азора')); // console.log(isPalindrom('radar radar'));
