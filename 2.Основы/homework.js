/*
Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна
выводить слово «Fizz», а вместо чисел, кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить
слово «FizzBuzz»
*/

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
// fizzBuzz();

// напишите проверку на NaN без использования методов isNaN

function isNan(variable) {
    if (typeof variable === "string") return "No";
    if (String(variable) === "NaN") {
        return "Yes";
    } else return "No";
}

function isNan2(variable) {
    return variable !== variable;
}
console.log("isNan: NaN", isNan2(NaN));
console.log("isNan: undefined", isNan2(undefined));
console.log('isNan: "NaN"', isNan2("NaN"));
console.log("isNan: null", isNan2(null));
