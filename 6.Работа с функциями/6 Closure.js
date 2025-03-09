//  someObj = null;

function process(data) {
  // делаем что-то интересное
  console.log("process");
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
console.dir("baz: ", baz);
foo = null;

baz(); // 2
baz(); // 3

/********************************************/

const btn = document.getElementById("my_button");

btn?.addEventListener("click", function click(evt) {
  console.log("button clicked");
  // counter();
  makeGlobalCounter();
});

let globalCounter = 0;

function createCounter(argCount = 0) {
  let outerCounter = 0;
  let outerGlobalCounter = globalCounter;

  return function closureCount() {
    let innerCount = 0;
    console.log("outerGlobalCounter: ", outerGlobalCounter);

    argCount++;
    console.log("argCount: ", argCount);
    globalCounter++;
    console.log("globalCounter: ", globalCounter);
    outerCounter++;
    console.log("outerCounter: ", outerCounter);
    innerCount++;
    console.log("innerCount: ", innerCount);
  };
}
// const counter = createCounter();

// console.dir(counter);
// console.dir(createCounter)
// counter();

function makeGlobalCounter() {
  console.log("makeGlobalCounter: ");
  globalCounter++;
  // counter();
  const counter2 = createCounter();
  console.dir(counter);
  console.log("counter2");
  console.dir(counter2);
}

function createTimer(timeInSec) {
  let timer = timeInSec;

  return function () {
    let timerId = setInterval(() => {
      console.log(timer);
      --timer;
      if (timer === 0) {
       // clearInterval(timerId);
        console.log("Time's up!");
      }
    }, 1000);
  };
}

const timerStart = createTimer(10);
timerStart();

