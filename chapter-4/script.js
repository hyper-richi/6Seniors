let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    },
    arrow: (() => console.log("arrow this:", this.firstName))(),
};

user.sayHi();
