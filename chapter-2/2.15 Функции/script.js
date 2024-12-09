function func(num) {
    console.log("func", num);
    num = 2; // меняем локальную переменную
    console.log("func", num);
}

let num = 1;
func(num);
console.log(num); // выведет 1 - ничего не поменялось
