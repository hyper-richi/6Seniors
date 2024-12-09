function foo() {
    let x = "value";
    switch (x) {
        case "value1": // if (x === 'value1')
            console.log("value1: ");
            break;
        case "value3": // if (x === 'value2')
            console.log("value: ");

        case "value2": // if (x === 'value2')
            console.log("value2: ");
        //break;

        default:
            console.log("default: ");
            break;
    }
}
// foo();

function foo() {
    let x = "value";
    switch (x) {
        case "value1": // if (x === 'value1')
            console.log("value1: ");
            break;
        case "value3": // if (x === 'value2')
            console.log("value: ");

        case "value2": // if (x === 'value2')
            console.log("value2: ");
        //break;

        default:
            console.log("default: ");
            break;
    }
}
foo();
function getDayName(day) {
    switch (day) {
        case 0:
            return "Sunday"; // Возвращает значение и завершает выполнение функции
        case 1:
            return "Monday"; // Возвращает значение и завершает выполнение функции
        case 2:
            return "Tuesday"; // Возвращает значение и завершает выполнение функции
        default:
            return "Invalid day"; // Возвращает значение и завершает выполнение функции
    }
    console.log("end");
}

//console.log(getDayName(1)); // Monday

function getDayMessage(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        default:
            console.log("Other day");
            break;
    }
    console.log("This is after the switch");
}

//getDayMessage(1);
// Monday
// This is after the switch
