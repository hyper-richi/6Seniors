// 2.7

//    Преобразование типов

//    Строковое

console.log("------------Строковое------------");
console.log(String(0)); // "0"
console.log(String(-0)); // "0" (ноль и отрицательный ноль равны при преобразовании в строку)
console.log(String(1));
console.log(String(-123.56));
console.log(String(123n)); // BigInt
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(undefined));
console.log(String(null));
console.log(String(function name(params) {}));
console.log("{}->", String({}));
console.log("[]->", String([])); // toString
console.log("[1,2,3]->", String([1, 2, 3])); // toString
console.log("[1, 'two'...]->", String([1, "two", null, undefined, NaN, Infinity, {}, [], function name(params) {}])); // toString
console.log(String(true));
console.log(String(false));

// при использовании оператора + со строкой

console.log("" + 1);
console.log("1" + 1);

const value = 42;
console.log(`Value is: ${value}`);

// Числовое

console.log("------------Числовое------------");
console.log(Number("1"));
console.log(Number("   123   "));
console.log(Number("89."));
console.log(Number("89:"));
console.log("undefined->", Number(undefined)); // когда не возможно преобразовать к числу будет NaN
console.log("null->", Number(null));
console.log(Number(Infinity));
console.log("NaN->", Number(NaN));
console.log(Number(true));
console.log(Number(false));
console.log("123n->", Number(123n)); // BigInt
console.log("1234567890123456789012345678901234567890n->", Number(1234567890123456789012345678901234567890n)); // BigInt

// при использовании математических операторов  *, +, -, /, %, **.

console.log("6" / "2");
console.log("5" - 3);
console.log("5" * "2");
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
console.log(+"123");
console.log(-true); // -1
console.log(-false); // -0 (или просто `0`)
console.log(-null); // -0 (или просто `0`)
console.log(-undefined); // NaN
console.log(3 ** "2"); // 3 в степени 2
console.log(true ** 3); // один в степени 3

// Логическое

console.log("------------Логическое------------");
console.log("Boolean 1", Boolean(1));
console.log("Boolean 11", Boolean(11));
console.log("Boolean 0", Boolean(0));
console.log("Boolean -0", Boolean(-0));
console.log("Boolean 123n", Boolean(123n)); // BigInt
console.log('Boolean ""', Boolean(""));
console.log('Boolean " "', Boolean(" "));
console.log('Boolean "string"', Boolean("string"));
console.log("Boolean null", Boolean(null));
console.log("Boolean undefined", Boolean(undefined));
console.log("Boolean NaN", Boolean(NaN));
console.log("Boolean Infinity", Boolean(Infinity));
console.log("Boolean {}", Boolean({}));
console.log("Boolean { false: false }", Boolean({ false: false }));
console.log("Boolean []", Boolean([]));
console.log("Boolean [false]", Boolean([false]));

console.log("hello", !!"hello");
console.log(!!11);
console.log("str" === "true");
console.log("str" == "true");
console.log("true" > "false");
console.log("true" < "false");
