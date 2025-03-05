function factorial(n) {
  if (n === 1) {
    return 1;
  }
  debugger;
  return n * factorial(n - 1);
}

//console.log(factorial(5)); // 120
// console.log(factorial(3)); // 6

function sumArray(arr) {
  const len = arr.length;
  if (len === 0) {
    return 0;
  }

  function recurs(count) {
    if (count === 0) {
      return arr[0];
    }

    debugger;

    return arr[count] + recurs(count - 1); // 4+3+12+10
  }

  return recurs(len - 1);
}

//console.log(sumArray([10, 12, 3, 4]));
function sum(a, b, ...rest) {
  console.log("rest: ", rest);
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5));
