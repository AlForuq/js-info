"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(start, end) {
  return (v) => start <= v && v <= end;
}

let f = arr.filter(inBetween(3, 6));
// console.log(f);

function inArray(array) {
  return (v) => {
    return array.some((item) => item === v);
    return array.includes(v);
  };
}

let f2 = arr.filter(inArray([1, 2, 10]));
// console.log(f2);

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(param) {
  return (a, b) => (a[param] > b[param] ? 1 : -1);
}

users.sort(byField("name"));

// console.log(users);

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      console.log(j); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

// let count = 0;
// function makeCounter() {
//   return function () {
//     return count++;
//   };
// }

// console.log(makeCounter()()); // 0
// console.log(makeCounter()()); // 1
// console.log(makeCounter()()); // 2

// let counter = makeCounter();
// console.log(counter()); // 3
// console.log(counter()); // 4
// console.log(counter()); // 5
// console.log(counter()); // 6
