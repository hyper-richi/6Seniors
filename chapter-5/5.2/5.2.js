
function parseIntCustom(str) {
    let resultStr = "";

    for (let i = 0; i < str.length; i++) {
        if (!Object.is(NaN, Number(str[i]))) {
            resultStr += str[i];
        } else break;
    }
    return Number(resultStr);
}

console.log(parseIntCustom("100456px"));
console.log(parseInt("100123px"));
