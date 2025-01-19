1. Что такое this?.

-   это ключевое слово, которое ссылается на объект.
-   используется в методах оъекта, где this ссылается на объект к которому прикреплен метод. Что позволяет переиспользовать метод на других объектах.
-   значение this зависит от того на каком объекте вызывается фу-ия

2. Как "потерять" this?

-   предача метода как коллбэка
-   вложенные функции. Внутренние функции не наследуют контекст this от внешней функции.

3. Как "не терять" this?

-   использовать стрелочные ф-ии в нутри методов объекта
-   .bind() для привязки метода к объекту

4. Чему равен this в свойствах объекта?

-   наследует this из окружающей области видимости,в котором был определен объект

5. Чему равен this внутри функции-стрелки?

-   наследует this из окружающей области видимости, в которой была определена стрелочная функция.

6. Как сделать, чтобы объект:

-   был равен определенному числу?

```js
const object = {
    name: "Jack",
    num: 123,

    valueOf(num) {
        return num ? num : this.num;
    },
};

console.log(123 == object); // true
console.log(123 == object.valueOf(123)); // true
```

-   был равен определенной строке?

```js
const object2 = {
    name: "Jack",
    num: 123,

    toString(name) {
        return name ? name : this.name;
    },
};

console.log("Jack" == object2); // true
```

-   obj > 0 // true. Как это сделать?

```js
const object3 = {
    name: "Jack",
    num: 123,

    valueOf(num) {
        return num ? num : this.num;
    },
};

console.log(object3 > 0); // true
```

-   String(obj < 0) + String(obj < 0) // "truefalse". Как это сделать?

```js
const object4 = {
    name: "Jack",
    num: 123,
    isFirstCheck: true,

    valueOf() {
        if (this.isFirstCheck) {
            this.isFirstCheck = false;
            return -1;
        } else {
            return 1;
        }
    },
};

console.log(String(object4 < 0) + String(object4 < 0));
```
