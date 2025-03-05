// "use strict";

// Строки неизменяемы
let str = "Hi";

str[0] = "h"; // не работает
//console.log(str[0]); // H

// Изменение регистра
const strData = "Interface";

const str2 = strData.toUpperCase();
//console.log("str2: ", str2);

const str3 = strData.toLowerCase();
//console.log("str3: ", str3);
//console.log("strData: ", strData);

function contamination(text, char) {
    const wordToReplace = char.repeat(text.length);
    return text.replace(text, wordToReplace);
}
contamination("abc", "z"); // zzz
contamination("", "z"); // ''
contamination("abc", ""); // ''
contamination("_3ebzgh4", "&"); // "&&&&&&&&"
contamination("//case", " "); // "      "

function hasOneChar(str) {

    console.log([...str].every((char) => char === str[0]));

}

hasOneChar("a"); // true
hasOneChar("aaaaa"); // true
hasOneChar("aaaab"); // false
hasOneChar("bbbbb"); // true
hasOneChar("bbabb"); // false