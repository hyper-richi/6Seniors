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

// лексическое окружение это  идентификаторы связаны со значениями в контексте выполнения кода
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
    console.log("getThisGetter-this", this);
    // return () => this;
    const obj = {
      objThis: this, // car
    };
    console.log("objThis: ", obj.objThis);

    const arrow = () => {
      console.log("arrow-this", this);
    };
    arrow();
    // return arrow;
  },
  arrow: () => {
    const obj = {
      objThis: this, // window
    };
    console.log("objThis: ", obj.objThis); // window
  },
};
// car.arrow();
// car.getThisGetter();

function foo() {
  console.log(this.a);
  console.log(this);
}

var a = 2;
var o = {
  a: 3,
  bar() {
    console.log(this.a);
    console.log(this);
  },
};
var p = {
  a: 4,
  foo(cb) {
    console.log(this.a);
    console.log(this);
    cb();
  },
};

// (o.foo = foo)(); // 2
// o.foo(); // 3
// (p.foo = foo)(); // 2
// p.foo(); // 4

p.foo(o.bar);
