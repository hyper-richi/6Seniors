// "use strict";
function calculateTime(battary, charge) {
    let fastCharge = (battary * 0.85) / charge; // 1000 * 0.85 / 500
    let decreasingCharge = (battary * 0.1) / (charge * 0.5);
    let trickleCharge = (battary * 0.05) / (charge * 0.2);
    return +(fastCharge + decreasingCharge + trickleCharge).toFixed(2);
}

calculateTime(3458, 1594); // 2.6

// Ваша задача — подсчитать количество ячеек в таблице, содержащих число x.

`
1  2  3  4  (5)
2  4  6  8  10
3  6  9  12 15
4  8  12 16 20
(5) 10 15 20 25
`;

function countNumber(n, x) {
    //coding and coding..
    let count = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i * j === x) count++;
        }
    }
    // console.log("count", count);
}

countNumber(5, 5); // 2
countNumber(10, 5); // 2
countNumber(6, 12); // 4
countNumber(9, 484); // 0

function selfDescriptive(num) {
    const numStr = num.toString();
    const length = numStr.length;

    const dataCounts = Array(length).fill(0);
    for (let char of numStr) {
        dataCounts[char]++;
    }

    for (let i = 0; i < length; i++) {
        if (numStr[i] != dataCounts[i]) {
            return false;
        }
    }
    return true;
}

// selfDescriptive = (n) => [...(n += "")].every((v, i) => (n.match(RegExp(i, "g")) || []).length == v);

console.log(selfDescriptive(21200)); // true
console.log(selfDescriptive(3211000)); // true
console.log(selfDescriptive(42101000)); // true
console.log(selfDescriptive(1210)); // true
console.log(selfDescriptive(2020)); // true

console.log(selfDescriptive(21230)); // false
console.log(selfDescriptive(11200)); // false
console.log(selfDescriptive(99252)); // false
console.log(selfDescriptive(24781)); // false
