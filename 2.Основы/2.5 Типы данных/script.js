/*
--2.5--

Типы данных

    Есть 8 основных типов данных в JavaScript.

    number - Числовой тип данных представляет как целочисленные значения, так и числа с плавающей точкой.
    в диапазоне от 2 в 253 стпепени до минус 2 в 253 стпепени. Иначе при больших числах будет ошибка точности.

        Infinity представляет собой математическую бесконечность. Это особое значение, которое больше любого числа.
        alert( 1 / 0 ); //  при делении на ноль получается Infinity
        alert( Infinity ); // Infinity

        NaN - означает что произошла ошибка при математической операции с числами

        alert( "не число" / 2 ); // NaN, такое деление является ошибкой
        Любая математическая операция с NaN возвращает NaN, за исключением
        аlert(NaN ** 0); // 1 Оператор возведения в степень (**)

    BigInt -

        // символ "n" в конце означает, что это BigInt
        const bigInt = 1234567890123456789012345678901234567890n;

    string - создается при помощи 3 видов кавычек '' "" ``

        let str = "Привет";
        alert( `Привет, ${name}!` ); // Привет, Иван!

        Метод String.fromCharCode():
        let str5 = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"

    boolean - true/false

    null - представляет собой «ничего», «пусто» или «значение неизвестно».

            Результат typeof null === "object" является историческим артефактом, возникшим из-за особенностей первоначальной реализации JavaScript в 1995 году.

            Внутреннее представление типов:

            - В ранней реализации JavaScript для идентификации типов данных использовалась система "типовых тегов" (type tags),
            которая использовала младшие биты в двоичном представлении значения.
            - Объекты имели типовой тег с префиксом 000, а null — представляющий "пустой" или "несуществующий объект" — получил тот же самый типовой тег, 000.
            - Это привело к ошибочной классификации null как объекта на внутреннем уровне.

            Роль оператора typeof:

            - Оператор typeof был разработан для чтения этих типовых тегов.
            - При встрече с null он видит тот же тег 000, что и у объектов, и возвращает "object", даже несмотря на то, что null на самом деле объектом не является.

            Почему это не было исправлено?

            - Когда эта проблема была признана багом, значительное количество кода уже полагалось на поведение typeof null === "object".
            - Исправление этого поведения привело бы к массовым проблемам с совместимостью, что сломало бы существующие сайты и приложения.
            - Поэтому это поведение оставили в языке для обеспечения обратной совместимости.

    undefined - Оно означает, что «значение не было присвоено».

        let age;

        alert(age); // выведет "undefined"


    object - В объектах хранят коллекции данных или более сложные структуры.

        1. let obj = {};

        2. const obj = new Object(); // Конструктор Object()

        3. function Person(name, age) {
                this.name = name;
                this.age = age;
                this.greet = function() {
                console.log(`Привет, я ${this.name}`);
                };
            }
            const person = new Person("Иван", 30); // функция конструктор

        5. const person = Object.create(obj); метод Object.create

        6. class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                greet() {
                    console.log(`Привет, я ${this.name}`);
                }
            }
            const person = new Person("Иван", 30); // классы ES6

    symbol - используется для создания уникальных идентификаторов в объектах.
    const sym1 = Symbol();
    const sym2 = Symbol();
    console.log(sym1 === sym2);

    Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

    Имеет две формы:
    - typeof x;
    - typeof(x);

    Возвращает строку с именем типа. Например, "function".
    Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.

    Таблица всех случаев:
        Значение	            Тип
    undefined	            "undefined"
    true, false	            "boolean"
    42, NaN, Infinity	    "number"
    10n	                    "bigint"
    "hello", 'world'	    "string"
    Symbol("id")	        "symbol"
    {}, [], null	        "object"
    function example() {}	"function"

*/
console.log("1 / 0=", 1 / 0);
console.log('"не число" / 2=', "string" / 2);
console.log("NaN ** 0=", NaN ** 0);
// для любого числа x (кроме нуля) в степени 0 всегда 1.
console.log("0 ** 0=", 0 ** 0);
console.log("0 ** 2=", 0 ** 2);
console.log("10 ** 0=", 10 ** 0);
console.log("[] / 2=", [] / 2);
console.log("{} / 2=", {} / 2);
console.log("Infinity / 2=", Infinity / 2);
console.log("undefined / 2=", undefined / 2);
console.log("null / 2=", null / 2);
console.log("true / 2=", true / 2);
console.log("false / 2=", false / 2);

let str = 'string';
console.log("str: ", str);

let str0 = `Это, ${str}!`;
console.log("str0: ", str0);

let str1 = "string";
console.log("str1: ", str1);

let str2 = "'string'";
console.log("str2: ", str2);

let str3 = '"string"';
console.log("str3: ", str3);

let str4 = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"
console.log("str4: ", str4);
