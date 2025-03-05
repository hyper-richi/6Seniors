console.log("------------  ??  ------------");

console.log("1 ?? undefined:", 1 ?? undefined);
console.log("undefined ?? 1:", undefined ?? 1);
console.log("1 ?? null:", 1 ?? null);
console.log("null ?? 1:", null ?? 1);
console.log("NaN ?? 1:", NaN ?? 1);
console.log("false ?? 1:", false ?? 1);
console.log("undefined ?? undefined:", undefined ?? undefined);
console.log("undefined ?? null:", undefined ?? null);

console.log("------------  ??=  ------------");
let x;
let y = 1;
console.log("x ??= y:", (x ??= y));
console.log('x: ', x);
