//  someObj = null;

function process(data) {
  // делаем что-то интересное
  // console.log("process");
}

// const registry = new FinalizationRegistry(() => {
//   // console.log(`gets garbage collected`, window);
// });
// для очистки памяти {}
{
  const someObj = { a: 1, b: 2, str: "string" };

  // registry.register(someObj, someObj.data);

  process(someObj);
}

/********************************************/
function outer() {
  let a = 2;
  function foo() {
    let b = "b in foo";
    function bar() {
      console.log(a++, b);
    }

    return bar;
  }
  return foo();
}

// const registryFoo = new FinalizationRegistry(() => {
//   // console.log(`garbage collected foo`, window);
// });

// registryFoo.register(foo, "foo");

// const bar = outer();
// console.dir(outer);
// console.dir(bar);
// foo = null;

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

let value = "Сюрприз!";
const globalVal = "globalVal";
export function f() {
  let value = "ближайшее значение";
  globalVal;
  function g() {
    value;
    // debugger; // в консоли: напишите alert(value); Сюрприз!
  }
  console.dir(g);

  return g;
}
console.dir(f);

export let g = f();

// g();

function countTheNumber() {
  var arrToStore = [];
  let x = 0;
  for (; x < 9; x++) {
    arrToStore[x] = function () {
      return x;
    };
  }
  return arrToStore;
}

const callInnerFunctions = countTheNumber();
console.log(callInnerFunctions[0]()); // ?
console.log(callInnerFunctions[1]()); // ?
