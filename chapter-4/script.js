let user = {
    name: "John",
    age: 30,
    test: undefined,
};

console.log("name" in user); // true
console.log("test" in user); // true

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}

// console.log("clone: ", clone);

clone.name = "Pete"; // изменим в нём данные
// console.log("user.name", user.name);

let cloneNumber = Object.assign(0, user);
console.log("cloneNumber: ", cloneNumber);

let cloneString = Object.assign("", user);
console.log("cloneString: ", cloneString);

//let cloneNullUndefined = Object.assign(null, user);
//console.log("cloneNullUndefined: ", cloneNullUndefined);

let mySymbol = Symbol();
let cloneSymbol = Object.assign(mySymbol, user);
console.log("cloneSymbol: ", cloneSymbol);

let cloneArr = Object.assign([], user);
console.log("cloneArr: ", cloneArr['name']);
// [ name: 'John', age: 30, test: undefined ]

let fullName = {
    name: "John",
};

let admin = fullName;
fullName = null;
// console.log("admin: ", admin);

let arr = [1, 2, 3, 4];
for (key in arr) {
    // console.log("key: ", key); // 0,1,2,3
}
for (prop of arr) {
    // console.log("prop: ", prop);
}

function isEmpty(obj) {
    for (let key in obj) {
        console.log("key: ", key);

        return false;
    }
    return true;
}

let obj = { value: 1 };

console.log("isEmpty(obj):", isEmpty({})); // true
console.log("isEmpty(obj):", isEmpty({ value: 1 })); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sum(salaries) {
    let sumSalaries = 0;

    for (let prop in salaries) {
        sumSalaries += salaries[prop];
    }
    return sumSalaries;
}

console.log("sum:", sum(salaries));
