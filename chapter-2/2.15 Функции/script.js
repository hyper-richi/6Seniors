/*
Обратите внимание: функция изменяет значение from, но это изменение не видно снаружи. Функция всегда получает только копию значения
*/
function foo() {
    let from = "Аня";
    function showMessage(from, text) {
        from = "*" + from + "*"; // немного украсим "from"

        console.log(from + ": " + text);
        return (from = "123");
    }

    showMessage(from, "Привет"); // *Аня*: Привет

    // значение "from" осталось прежним, функция изменила значение локальной переменной
    console.log(from); // Аня
}
//foo();

/*

Пояснение:
В JavaScript передача параметров в функцию работает по значению. Для примитивных типов (таких как строки, числа и т. д.) это означает,
что в функцию передается копия значения переменной. Изменение этой копии не влияет на оригинальное значение.
Поэтому после выполнения функции showMessage, локальная переменная from внутри функции становится "123", но глобальная переменная from остается "Аня".

*/

function foo() {
    let from = "Аня";
    function showMessage(_, text) {
        from = "*" + from + "*"; // немного украсим "from"

        console.log(from + ":1 " + text);
    }

    showMessage(from, "Привет"); // *Аня*: Привет

    // значение "from" изменилось
    console.log(from); // Аня
}
// foo();

function anotherFunction() {
    return "anotherFunction";
}
let from = "Аня";

// anotherFunction() выполнится только если не передан text
function showMessage(from, text = anotherFunction()) {
    console.log(from + ": " + text);
}

//showMessage(from, "Привет"); // Аня: Привет
//showMessage(from); // Аня: anotherFunction

// Перепишите функцию, используя оператор '?' или '||'

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/
function checkAge(age) {
    return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge2(age) {
    return age > 18 || confirm("Родители разрешили?");
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

/*
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) {
    /* if (a < b) {
        return a;
    } else {
        return b;
    } */

    return a < b ? a : b;
}
//console.log("min(2, 5)", min(2, 5));
//console.log("min(3, -1): ", min(3, -1));
//console.log("min(1, 1): ", min(1, 1));

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// Только натуральные значения n, т.е. целые от 1 и выше.

/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

let x = Number(prompt("Введите число х возводимое в степень:"));
let n = 0; // = Number(prompt("Введите степень:"));

function isNaturalNumbers(num) {
    return num % 1 === 0 && num > 0;
}

function pow() {
    for (n = Number(prompt("Введите натуральное число степени, n:")); !isNaturalNumbers(n); ) {
        n = Number(prompt("Введите натуральное число степени, n:"));
    }
    return `${x} ** ${n} = ${x ** n}`;
}
console.log(pow());
//console.log("pow(3, 2): ", pow(3, 2));
//console.log("pow(3, 3): ", pow(3, 3));
//console.log("pow(1, 100): ", pow(1, 100));
