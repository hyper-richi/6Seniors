const target = { a: 1, b: 2 };
const src1 = { b: 4, c: 5 };
const src2 = { b: 9 };

const returnedTarget = Object.assign(target, src2, src1);

// console.log(target);

let user = {
    name: "John",
};

let admin = user;
user = null;
// console.log("admin: ", admin);
// console.log("user: ", user); // null

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    };
}

let family = marry(
    {
        name: "John",
    },
    {
        name: "Ann",
    },
);
console.log("family: ", family);

delete family.father.wify;
delete family.father;

console.log("family-2: ", family);
