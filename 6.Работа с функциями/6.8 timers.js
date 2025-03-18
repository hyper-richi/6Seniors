function countdown(seconds) {
  const idInterval = setInterval(() => {
    console.log(seconds--);
    if (seconds < 0) clearInterval(idInterval);
  }, 1000);
}

function blinkText(element) {
  if (element) {
    const idInterval = setInterval(() => {
      element.style.opacity = element.style.opacity === "0" ? "1" : "0";
    }, 500);
  }
}

const element = document.querySelector("#myElement");
blinkText(element);

function moveElement(element) {
  const idInterval = setInterval(() => {
    const marginNumber = Number(element.style.marginLeft.replace(/px$/, ""));

    element.style.marginLeft = marginNumber + 1 + "px";

    if (marginNumber >= 300) {
      clearInterval(idInterval);
    }
  }, 10);
}

const box = document.querySelector("#box");
moveElement(box);

function chainCalls(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      arr[i]();
    }, 1000 * i);
  }
}

const tasks = [() => console.log("Задача 1"), () => console.log("Задача 2"), () => console.log("Задача 3")];

// chainCalls(tasks);

function delayedFunction(func, delay) {
  const timerId = setTimeout(func, delay);
  return function () {
    console.log("Отмена");
    clearInterval(timerId);
  };
}

const cancelExecution = delayedFunction(() => console.log("Функция выполнена!"), 3000);

setTimeout(() => {
  cancelExecution();
}, 4000); // Отмена выполнения через 4 секунды
