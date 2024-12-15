// pow.js
export function pow(x, n) {
    // Проверяем, что степень n - это целое число и n >= 0
    if (!Number.isInteger(n) || n < 0) {
        console.log("Степень n должна быть целым числом и n >= 0");
    }

    return x ** n;
}
