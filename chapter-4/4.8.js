const objectStr = {
    name: "Jack",
    age: 123,
    toString(...args) {
        // args -> []
        console.log("toString", args);
        return this.name;
    },
    valueOf(...args) {
        // args -> []
        console.log("valueOf");
        return this.age;
    },
    [Symbol.toPrimitive]: function (hint) {
        // args -> []
        switch (hint) {
            case "string":
                console.log('case "string"');
                return this.name;
            case "number":
                console.log('case "number"');
                return this.age;
            case "default":
                console.log('case "default"');
                return "Jack";
            default:
                break;
        }
    },
};

// Как сделать, чтобы объект: был равен определенной строке?
const object = {
    name: "Jack",
    num: 123,

    toString(name) {
        return name ? name : this.name;
    },
};

// console.log("Jack" + object); // true
// Как сделать, чтобы объект: - был равен определенному числу?

const object2 = {
    name: "Jack",
    num: 123,

    valueOf(num) {
        return num ? num : this.num;
    },
};

// console.log(123 == object2); // true
// console.log(123 == object2.valueOf(123)); // true

// obj > 0 // true. Как это сделать?

const object3 = {
    name: "Jack",
    num: 123,
    valueOf(num) {
        return num ? num : this.num;
    },
};

//console.log(object3 > 0); // true

// String(obj < 0) + String(obj < 0) // "truefalse"

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
