// while Выведите в консоль числа от 1 до 100.
function foo() {
    let i = 0;
    while (i <= 100) {
        // console.log("i: ", i); // 0-100
        i++;
        // console.log("i: ", i); // 1-101
    }
}
// foo()
// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций, необходимых для этого.

function foo() {
    let num = 100;
    let j = 0;
    do {
        num *= 3;
        j++;
        //console.log('num: ', num);
    } while (num < 1000);
}
//console.log(j);
// foo()

/****************/

function fooFor() {
    let i2 = 0;
    function fig() {
        console.log("fig: ");
        return true;
    }

    function condition() {
        console.log("condition: ", i2);
        return false; //i2 < 3;
    }

    for (fig(); condition(); ) {
        console.log(i2++);
    }
}

fooFor();

/*
let j2 = 0;

function name() {
    return j2 < 3;
}

for (; name(); ) {
    console.log(j2++);
} */

// Выведите в консоль все элементы следующего массива:
function name() {
    let arr = ["a", "b", "c", "d", "e"];
    let k = 0;
    while (k < arr.length) {
        console.log(arr[k]);
        k++;
    }

    for (let l = 0; l < arr.length; ) {
        console.log(arr[l]);
        l++;
    }
}

//Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:

let arr2 = ["a", "b", "c", "d", "e"];

let q = 1;
while (q < arr2.length - 1) {
    // console.log(arr2[q]);
    q++;
}

let w = 1;
for (; w < arr2.length - 1; ) {
    // console.log(arr2[w]);
    w++;
}

function label() {
    outer: for (let i = 0; i < 3; i++) {
        console.log("i: ", i);

        for (let j = 0; j < 3; j++) {
            console.log("j: ", j);

            for (let k = 0; k < 3; k++) {
                console.log("k: ", k);

                var input = prompt(`Значение на координатах (${i},${j})`, "");
                console.log("input: ", input);
            }

            // если пустая строка или Отмена, то выйти из обоих циклов
            console.log("input2: ", input);

            if (!input) break outer; // (*)

            // сделать что-нибудь со значениями...
        }
    }

    console.log("Готово!");
}

//label();

function name() {
    let arr = [2, 5, 9, 15, 1, 4];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3 && arr[i] < 10) {
            console.log(arr[i]);
        }
    }
}
// name()

function sum() {
    let i = 2;
    let sum = 0;
    while (i <= 100) {
        if (i % 2 === 0) {
            console.log("i: ", i);
            sum += i;
        }
        i++;
    }
    console.log(sum);
}
// sum();

function foo() {
    // постфиксный
    let j = 0;
    while (j++ < 5) console.log(j); // увеличивает j, возвращая старое значение, // 1,2,3,4,5
    // префиксный
    let i = 0;
    while (++i < 5) console.log(i); //  возвращает новое значение, сначала происходит увеличение, а потом – сравнение // 1,2,3,4
}

// foo();

function foo() {
    // постфиксный
    for (let i = 0; i < 5; ) {
        console.log("before", i); // 0,1,2,3,4
        i++; // 0,1,2,3,4
        console.log("after", i); // 1,2,3,4,5
    }
    console.log("--");
    // префиксный
    for (let i = 0; i < 5; ) {
        console.log("before", i); // 0,1,2,3,4
        ++i; //1,2,3,4,5
        console.log("after", i); // 1,2,3,4,5
    }
}
// foo();

/*
Напишите цикл, который предлагает prompt ввести число, большее 100.
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/

function foo() {
    for (let input = prompt("Введите число больше 100"); input < 100; ) {
        input = prompt("Введите число больше 100");
    }
}
// foo();

/*
С помощью двух вложенных циклов выведите на экран следующую строку:

111222333444555666777888999
*/

function foo() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(i);
        }
    }
}
// foo();

/*
Используя цикл и метод push заполните массив числами от 1 до 10.
*/
function pushArray(params) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
}
// pushArray();
