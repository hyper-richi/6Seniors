// "use strict";
// console.log(this);
// this вне функции - в браузере window, "use strict" не влияет
// Использование this в объектном литерале наследует значение из окружающей области действия.
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

const arrow = (name) => {
    console.log(`arrowThis-${name}`, this); // в браузере window, "use strict" не влияет
};
//arrow("global");

// methods obj

const car = {
    marka: "BMW",
    model: "M6",
    year: 2020,
    color: "white",
    obj: {
        objThis: this, // window
    },
    getThisGetter() {
        console.log("this", this);
        // return () => this;
        const arrow = () => this;
        return arrow;
    },
    getModel() {
        console.log("getModel", this); // car
        const obj = {
            prop: this, // car
            model: "BMW",
            getThis() {
                console.log("car.getModel.getThis:", this); // obj
            },
        };
        return this;
        // obj.getThis(); //
    },
    arrowIn: () => {
        console.log(`arrowIn:`, this); // window
        const obj = {
            prop: this, // window
            model: "BMW",
            getThis() {
                console.log(this); // obj
            },
        };
        console.log("obj.getThis: ", obj.getThis()); //
    },
};

// car.getModel();
// car.arrowIn();

// console.log("car.obj.objThis", car.obj.objThis);

const mersedes = {
    marka: "mersedes",
    model: "E300",
    year: 2020,
    color: "white",
    getModel() {
        console.log("this.model", this.model);
    },
};

function getThis(name) {
    console.log(`getThis-${name}:`, this);
}

//car.getThis = getThis;
//car.arrow = arrow;

const fn = car.getThisGetter();
console.log("fn", fn());

mersedes.getThis = getThis;
mersedes.arrow = arrow;

/* mersedes.getThis("mersedes");
car.getThis("car");
mersedes.arrow("mersedes");
car.arrow("car"); */

const globalObject = this;
const returnThis = () => this;
function returnFDThis() {
    return this;
}
const returnFEThis = function () {
    return this;
};

/* console.log(returnThis() === globalObject); // true
console.log(returnThis.call(car)); // window
console.log(returnFDThis.call(car)); // car
console.log(returnFEThis.call(car)); // car */

const user = {
    name: "Alice",
    sayHi() {
        console.log(this.name);
    },
};

function foo(cb) {
    console.log("cb: ", cb);
    cb("cb");
}

// foo(window.getThis); // undefined
