function sayHello() {}

function whatTheFuck() {}

Function.prototype.logName = function () {
  console.log(this.name);
};

// sayHello.logName(); // Должно вывести "sayHello"
// whatTheFuck.logName(); // Должно вывести "whatTheFuck"

Function.prototype.myBind = function (obj) {
  const originalFunction = this;
  return function () {
    return originalFunction.apply(obj);
  };
};

function logMessage() {
  console.log(this.message);
}

const userMessage = { message: "Hello, world!" };
const clientMessage = { message: "Give mee Iphone" };

const boundUserMessage = logMessage.myBind(userMessage);
const boundClientMessage = logMessage.myBind(clientMessage);
// boundUserMessage(); // "Hello, world!"
// boundClientMessage(); // Give mee Iphone

function sayHi() {
  console.log("Hi!");
}

Function.prototype.delay = function (time) {
  setTimeout(this, time);
};

// sayHi.delay(2000); // Выведет "Hi!" через 2 секунды

function greet() {
  console.log("Hello!");
}

Function.prototype.once = function () {
  const func = this;
  let wasCall = false;

  return function () {
    if (wasCall) {
      console.log("no call");
      return;
    } else {
      func();
      wasCall = true;
    }
  };
};

const greetOnce = greet.once();
// greetOnce(); // Выведет "Hello!"
// greetOnce(); // no call
// greetOnce(); // no call

function showMessage() {
  console.log("Message displayed!");
}

Function.prototype.after = function (countCalls) {
  let count = 0;
  const func = this;

  return function () {
    count++;

    if (count < countCalls) {
      console.log("no call");
      return;
    } else {
      func();
    }
  };
};

const showAfter3Calls = showMessage.after(3);

showAfter3Calls(); // Ничего не происходит
showAfter3Calls(); // Ничего не происходит
showAfter3Calls(); // "Message displayed!"
showAfter3Calls(); // "Message displayed!" (выполняется и далее)
