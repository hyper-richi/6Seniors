let person = {
  name: "John",
  age: 30,
};

function Rabbit() {}
// console.dir(Rabbit);

// Array.prototype.duplicate = function () {
//   console.log("duplicate", this);
//   return [...this, ...this];
// };

// const arr = [1, 2, 3];
// console.log("arr: ", arr);

function Obj(name) {
  this.name = name;
}
// console.dir(Obj.constructor);

let obj = new Obj("White Rabbit");

let obj2 = new obj.constructor("Mr. White");

function Person(name, age) {
  console.log("Person");
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`"Hello, my name is ${this.name} and I am ${this.age} years old."`);
};

function Student(name, age) {
  console.log("Student: ");
  this.name = name;
  this.age = age;
}

Student.prototype = new Person("Jack", 123);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log(`"${name} is studying."`);
};

const student = new Student("Bob", 21);
const mary = new Person("Mary", 23);

mary.greet();
console.log("mary: ", mary);
console.log("student: ", student);
console.dir(Person);
console.dir(Student);

student.greet();
student.study();
