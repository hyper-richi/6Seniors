function factorial(n) {
    debugger; // Точка останова для отладки
    if (n < 0) {
        return "Ошибка: число не может быть отрицательным!";
    }
    let result = 1;
    for (var i = 1; i <= n; ) {

        debugger; // Точка останова для отладки
        i++;
        debugger; // Точка останова для отладки

        result *= i;
    }
    return result;
}

// Пример вызова функции
console.log("factorial(5)", factorial(5)); // Ожидаемый результат: 120
console.log("factorial(-3)", factorial(-3));
