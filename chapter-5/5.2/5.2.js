let widthTab = "100px";

function parseIntCustom(str) {
    let resultStr = "";

    for (let i = 0; i < str.length; i++) {
        if (Number(str[i])) {
            if (String(str[i])) {
                resultStr = str[i];
                // console.log("Number(str[i]): ", Number(str[i]));
            }
        } else break;
    }
    return Number(resultStr);
}

console.log(parseIntCustom("100px"));
