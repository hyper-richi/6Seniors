console.log("------------  Условное ветвление: if, '?'  ------------");
('Какое "официальное" название JavaScript?');

/*let numeric = prompt("Введите число");
 if (numeric % 2 === 0) {
    console.log("Четное");
} else {
    console.log("Не четное");
} */

// numeric % 2 === 0 ? console.log("Четное") : console.log("Не четное");

// переписать на '?'
/* let message;

message = login == "Сотрудник" ? "Привет" : "Здравствуйте";
message = login == "" ? "Нет логина" : ""; */

/*
Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна
выводить слово «Fizz», а вместо чисел, кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить
слово «FizzBuzz»
*/

function fizzBuzz(num) {
    if (num % 3 === 0 && !(num % 5 === 0)) {
        return "Fizz";
    }
    if (num % 5 === 0 && !(num % 3 === 0)) {
        return "Buzz";
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
}

console.log("fizzBuzz(3): ", fizzBuzz(3));
console.log("fizzBuzz(5): ", fizzBuzz(5));
console.log("fizzBuzz(15): ", fizzBuzz(15));
