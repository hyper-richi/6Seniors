// "use strict";
// console.log(this);
// this вне функции - в браузере window, "use strict" не влияет
// Использование this в объектном литерале наследует значение из окружающей области видимости.
const obj = {
    this: this,
};

const arr = [1, this, 3];

// this в функции

// function declaration - в браузере window, "use strict" undefined

function funcDeclarThis() {
    console.log("funcDeclarThis:", this); // в браузере window, "use strict" undefined
}
//funcDeclarThis();

// function expression - в браузере window, "use strict" undefined

const funcExpres = function () {
    console.log("funcExpres:", this); // в браузере window, "use strict" undefined
};
//funcExpres();

// arrow function - в браузере window, "use strict" не влияет
// сохраняют значение this лексического окружения, в котором были созданы
// лексическое окружение это  идентфикаторы связаны со значениями в контексте выполнения кода
// Environment Record - все локальные переменные и функции, объявленные в текущем контексте
// Outer Environment Reference  - позволяет функции доступ к переменным, определённым во внешних областях видимости

const arrow = (name) => {
    console.log(`arrowThis-${name}`, this); // в браузере window, "use strict" не влияет
};
//arrow("global");


const car = {
    marka: "BMW",
    model: "M6",
    year: 2020,
    color: "white",
    obj: {
        objThis: this, // window
    },
    getThisGetter() {
        // console.log("this", this);
        // return () => this;
        const arrow = () => this;
        return arrow;
    },
};
