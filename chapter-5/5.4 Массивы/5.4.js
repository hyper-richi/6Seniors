// "use strict";

const numbersArray = [4, 12, 8, 15, 2, 25];
console.log("numbersArray: ", numbersArray);

numbersArray.getThis = function (cb) {
  console.log("numbersArray.getThis", this);
  cb.call(this);// привязал numbersArray
  const getThisArrow = () => {
    console.log("getThisArrow", this);
  };
  getThisArrow();
};

numbersArray.getThis(function (item) {
  console.log("this-cb:", this); // window
  return item > 10;
});

numbersArray.filter(function (item) {
  8; // console.log("this-filter:", this); // window
  return item > 10;
});
