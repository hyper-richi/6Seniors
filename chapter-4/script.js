let user = {
    name2: "John",
    getName() {
        console.log("this.name2", this.name2);
    },
};

user.getName();
let getName = user.getName;
getName();
