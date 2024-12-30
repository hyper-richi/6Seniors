// "use strict";

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
    printThis: function () {
        console.log("console-3", this);
        let arrow = () => console.log("console-3.1", this);
        arrow();
    },
};

//user.sayHi();
//user.arrow();
//user.printThis();

const obj = {
    value: 42,
    getValue: function () {
        return this.value;
    },
    printThis() {
        return this;
    },
    thisInObj: this,
};
console.log("obj: ", obj);

function getThis() {
    return this;
}
console.log("getThis(): ", getThis());
