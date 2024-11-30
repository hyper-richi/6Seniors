console.log("------------  Логические операторы  ------------");

console.log("«||»");

console.log("true || true: ", true || true);
console.log("false || true: ", false || true);
console.log("true || false: ", true || false);
console.log("undefined || null || 0: ", undefined || null || 0);
console.log('"" || "" || "" || "last": ', "" || "" || "" || "last");
console.log("null || 2 || undefined: ", null || 2 || undefined);
console.log("console.log(1) || 2 || console.log(3):", console.log(1) || 2 || console.log(3)); // 1, 2

console.log("«&&»");

console.log("1 && 1 && undefined: ", 1 && 1 && undefined);
console.log("1 && 2 && 3:", 1 && 2 && 3);
console.log("null && 1 && undefined: ", null && 1 && undefined);
console.log("1 && 2 && null && 3: ", 1 && 2 && null && 3);
console.log("1 && null && 2:", 1 && null && 2); // null
console.log("console.log(«1») && console.log(«2»):", console.log("«1»") && console.log("«2»")); // 1, undefined
console.log("null || 2 && 3 || 4:", null || (2 && 3) || 4); // 3

let value = NaN;

value &&= 10; // value = NaN
value ||= 20; // value = 20
value &&= 30; // value = 30
value ||= 40; // value = 30

console.log(value); // 30

console.log("«!»");

console.log("!true: ", !true);
console.log("!0: ", !0);
