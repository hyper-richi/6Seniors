//  someObj = null;

function process(data) {
  // делаем что-то интересное
  // console.log("process");
}

const registry = new FinalizationRegistry(() => {
  // console.log(`gets garbage collected`, window);
});
// для очистки памяти {}
{
  const someObj = { a: 1, b: 2, str: "string" };

  registry.register(someObj, someObj.data);

  process(someObj);
}

/********************************************/

function foo() {
  let a = 2;

  function bar() {
    console.log(a++);
  }

  return bar;
}

const registryFoo = new FinalizationRegistry(() => {
  // console.log(`garbage collected foo`, window);
});

registryFoo.register(foo, "foo");

const baz = foo();
// console.dir("baz: ", baz);
foo = null;

// baz(); // 2
// baz(); // 3

/********************************************/

// const btn = document.getElementById("my_button");

// btn?.addEventListener("click", function click(evt) {
//   console.log("button clicked");
//   // counter();
//   changeGlobalCounter();
// });

let globalCounter = 0;

// function createCounter(argCount = 0) {
//   let outerCounter = 0;
//   let outerGlobalCounter = globalCounter;

//   return function closureCount() {
//     let innerCount = 0;
//     console.log("outerGlobalCounter: ", outerGlobalCounter);

//     argCount++;
//     console.log("argCount: ", argCount);
//     globalCounter++;
//     console.log("globalCounter: ", globalCounter);
//     outerCounter++;
//     console.log("outerCounter: ", outerCounter);
//     innerCount++;
//     console.log("innerCount: ", innerCount);
//   };
// }
// const counter = createCounter();

// console.dir(counter);
// console.dir(createCounter)
// counter();

// function changeGlobalCounter() {
//   console.log("changeGlobalCounter: ");
//   globalCounter++;
//   // counter();
//   const counter2 = createCounter();
//   console.dir(counter);
//   console.log("counter2");
//   console.dir(counter2);
// }

// for (var i = 0; i < 3; i++) {
//   function log() {
//     console.log(i); // What is logged?
//   }
//   console.dir(log);
//     setTimeout(function outerLog() {
//     console.log("outerLog", i); // What is logged?
//     return log;
//   }, 1000);

//   log();
// }

function nextCount(n) {
  return n + 1;
}

function sumConsecutive(n) {
  return n + nextCount(n);
}
// console.log(sumConsecutive(5));

function nextItem(arr, findItem, idx) {
  if (idx >= arr.length) return false;

  if (arr[idx] === findItem) return true;

  return contains(arr, findItem, idx + 1);
}

function contains(arr, findItem, idx = 0) {
  if (idx >= arr.length) return false;

  if (arr[idx] === findItem) return true;

  return nextItem(arr, findItem, idx + 1);
}

// console.log(contains([1, 2, 3, 5, 6, 7], 4));

function printReverse(num) {
  if (num === 0) return;
  console.log(num);
  return printReverse(num - 1);
}
// printReverse(5);

function reverseString(str, idx = 0, revertStr = "") {
  revertStr += str[str.length - 1 - idx];

  if (idx >= str.length - 1) return revertStr;

  return reverseString(str, idx + 1, revertStr);
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("live")); // evil
