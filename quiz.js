// "use strict";
/* function foo(a, b, c) {
    console.log(a);
    console.log(arguments[0]);
}

foo(1, 2, 3, 4, 5); */

/* function foo(person) {
    arguments[0] = "ninja";
    console.log(person);
}

foo("person");
 */

function foo(a, b, c) {
    arguments[0] = 9;
    
    console.log(a);
    console.log(arguments[0]);
}

foo(1, 2, 3, 4, 5);
