console.log("------------  Условное ветвление: if, '?'  ------------");
('Какое "официальное" название JavaScript?');

let numeric = prompt("Введите число");
/* if (numeric % 2 === 0) {
    console.log("Четное");
} else {
    console.log("Не четное");
} */

numeric % 2 === 0 ? console.log("Четное") : console.log("Не четное");

// переписать на '?'
let message;

message = login == "Сотрудник" ? "Привет" : "Здравствуйте";
message = login == "" ? "Нет логина" : "";
