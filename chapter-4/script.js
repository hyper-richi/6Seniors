let user = {
    name: "John",
    age: 30,
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}

// console.log("clone: ", clone);

clone.name = "Pete"; // изменим в нём данные
// console.log("user.name", user.name);

let fullName = {
    name: "John",
};

let admin = fullName;
fullName = null;
console.log("admin: ", admin);
