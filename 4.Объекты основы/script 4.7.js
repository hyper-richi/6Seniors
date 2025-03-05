const id = Symbol("id");
let user = {
    firstName: "Jack Daniels",
    age: 30,
    [id]: 123,
    [Symbol("id")]: 'Symbol("id")',
};
//console.log("user[id]: ", user[id]);

/* console.log("Object.keys", Object.keys(user));
console.log("Object.values", Object.values(user));
console.log("Object.entries:", Object.entries(user));

const cloneUser = Object.assign({}, user);
console.log("cloneUser:", cloneUser); // user = { ... }; */

// console.log(cloneUser[id]); // 123

let globalSymbol = Symbol.for(1);
let globalSymbol2 = Symbol.for(1);
console.log(globalSymbol === globalSymbol2);
let localSymbol = Symbol("name");

//console.log(Symbol.keyFor(globalSymbol)); // name, глобальный символ
//console.log(Symbol.keyFor(localSymbol)); // undefined для неглобального символа

//console.log(localSymbol.description); // name
//console.log("Symbol->String:", String(id)); // Symbol(id)
//console.log("Symbol->Number:", Number(id)); // TypeError: Cannot convert a Symbol value to a number


