/* IIFE */ // immedietly invoked function expression

// var a = 10;
// (function () {
//   var a = 30;
//   console.log(a);
// })(); // 30
// console.log(a); // 10

// var a = 10;
// function get() {
//   var a = 30;
//   console.log(a);
// }
// get(); // 30
// console.log(a); // 10

// globalThis.a = 10;
// function get() {
//   var a = 30;
//   console.log(a, globalThis.a);
// }
// get(); // 30 10
// console.log(a); // 10

// function test(a, b, c, ...rest) {}
// console.log(test.name);
// console.log(test.length);

/* NFE */ // name funnction expression
const getName = function recursion(name) {
  console.log(`Hi, ${name}`);

  return recursion();
  return getName();
};
// getName("Me");

let getString = new Function("console.log('hey')");
// getString();

function getFunc() {
  let variable = "ME";
  let getString = new Function("console.log(variable)");
  return getString();
}
getFunc();
