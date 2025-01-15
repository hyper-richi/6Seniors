const objectStr = {
    name: "Jack",
    age: 23,
    valueOf(...args) {
        // args -> []
        console.log("valueOf");
    },
    toString(...args) {
        // args -> []
        console.log("toString");
    },
    toString: null,
    [Symbol.toPrimitive]: function (hint) {
        // args -> []
        console.log("hint: ", hint);
        return "строка";
    },
};

/* objectStr.prototype.toString = function () {
    console.log("prototype.toString");
    return "toString";
}; */

const objectNum = {
    prop: 123,
};

//console.log("objectStr: ", objectStr.toString());
console.log(String(objectStr));
//console.log(objectStr + "123");
