

/*

Пояснение:
В JavaScript передача параметров в функцию работает по значению. Для примитивных типов (таких как строки, числа и т. д.)
это означает,что в функцию передается копия значения переменной. Изменение этой копии не влияет на оригинальное значение.
Поэтому после выполнения функции showMessage, локальная переменная from внутри функции становится "123", но глобальная переменная from остается "Аня".

*/

// для изменения переменной неоходимо не передавать ее в параметрах
function foo() {
    let from = "Аня";
    function showMessage(_, text) {
        from = "*" + from + "*";

        console.log(from + ":1 " + text);
    }

    showMessage(from, "Привет"); // *Аня*: Привет

    // значение "from" изменилось
    console.log(from); // Аня
}
// foo();

function anotherFunction() {
    return "some text";
}

let from = "Аня";

// anotherFunction() выполнится только если не передан text
function showMessage(from, text = anotherFunction()) {
    console.log(from + ": " + text);
}

// showMessage(from, "Привет"); // Аня: Привет
// showMessage(from); // Аня: some text

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



function func() {
    console.log(num);
}

let num = 1; // переменная снаружи функции
func(); // выведет 1

