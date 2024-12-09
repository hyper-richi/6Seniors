function anotherFunction() {
    return "some text";
}

let from = "Аня";

// anotherFunction() выполнится только если не передан text
function showMessage(from, text = anotherFunction()) {
    console.log(from + ": " + text);
}

// showMessage(from, "Привет"); // Аня: Привет
showMessage(from, NaN); // Аня: NaN
showMessage(from, null); // Аня: null
showMessage(from, 0); // Аня: 0
showMessage(from, undefined); // Аня: some text
showMessage(from); // Аня: some text
