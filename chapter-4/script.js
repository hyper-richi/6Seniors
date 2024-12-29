// user.sayHi();
"use strict";

const user = {
    name: "John",
    sayHi() {
        let arrow = () => console.log("console-1", this);
        arrow();
    },
    arrow: () => {
        this.name = "value";
        console.log("console-2", this);
    },
};
user.arrow();

const obj = {
    value: 42,
    getValue: function () {
        return this.value;
    },
    this: this,
    this1: this,
};
console.log("obj: ", obj);
