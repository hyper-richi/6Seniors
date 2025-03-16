function init() {
  console.log("Инициализация выполнена");
}

function onceDecorator() {
  let call = false;
  return function () {
    if (call) {
      return;
    } else {
      init();
      call = true;
    }
  };
}

const initOnce = onceDecorator(init);
initOnce();
initOnce();
initOnce();
