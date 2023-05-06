/* ============= accessing by index ======================= */

let arr = [true, "string", null, undefined, 23, function () {}, {}];

// console.log(arr[-4]) // undefined *cause [] does not take minus
// console.log(arr.at(-1)) //
// console.log(arr[arr.length]); // undefined
// console.log(arr[arr.length - 1]); // last item of the array
// console.log(arr[arr.length - 3]);

/* ============== creating arrays ========================== */

let createArray1 = new Array(5); // [ <5 empty items> ]
let createArray2 = new Array("5"); // [ "5" ]
let createArray3 = new Array(5, 1); // [5, 1];

// createArray3[1] = "updated";
// createArray3[2] = "added";
// createArray3[4] = "jumped";
// console.log(createArray3);

let addItemArray = [];
// addItemArray[100] = 1;
// addItemArray[50] = 2
// console.log(addItemArray);

/* ==============  Arrays to String ========================== */

let stringArray = [1, 2, 3, 4];

stringArray.toString(); // 1,2,3,4
stringArray.join(""); // 1234
stringArray.join("/"); // 1/2/3/4

/* ============== adding array ========================= */

let addingArray = [5, 6, "numer", 7];
let addingArray2 = [1, 2, 3, 4];

// console.log(addingArray + addingArray2); // "1,2,3,45,6,numer,7"
// console.log(addingArray.concat(addingArray2)); // [ 1, 2, 3, 4, 5, 6, 'numer', 7 ]
// console.log(addingArray.concat(addingArray2, createArray1,addingArray)); // [ 1, 2, 3, 4, 5, 6, 'numer', 7 ]

/* =============== checking Array ========================== */

// console.log(typeof {}); // object
// console.log(typeof []); // object

// console.log(Array.isArray([])); // true

// console.log(+[]); // 0
// console.log([] == 0); // true
// console.log([] == '0'); // false

/* ============== Loop ============================== */

let loopArray = [true, "string", null, undefined, 23, function () {}, {}];

// for (let value of loopArray) { // of > for value
//   console.log(value);
// }

// for (let index in loopArray) { // in > for index
//   console.log(index);
// }

/* ============= methods ============================ */
let arrayMethod = [
  "me",
  "you",
  "they",
  "him",
  "her",
  "his",
  "them",
  "string",
  "name",
];
// arrayMethod.splice(3, 5); // remove
// console.log(arrayMethod.splice(3, 5)); // ['name'] // showing what is removed
// console.log(arrayMethod); //["me", "you", "they"]; // showing what is remained

/* !!! Console ONE BY ONE */
// arrayMethod.splice(2, 0, "Muhammadamin", "Feruzebk"); // adding values for the sake of removed values
// arrayMethod.splice(2, 1, "Muhammadamin", "Feruzebk"); // adding values for the sake of removed values
// arrayMethod.splice(2, 2, "Muhammadamin", "Feruzebk"); // adding values for the sake of removed values
// console.log(arrayMethod);

// console.log(arrayMethod.slice(2, 4)); // showing removed values
// console.log(arrayMethod); // showing ALL values

// console.log(arrayMethod.splice(2, 4)); // showing removed values
// console.log(arrayMethod); // showing REMAINED values

/* XULOSA: SLICE ASL ARRAYNI O'ZAGINI O'ZGARTIRB YUBORMAYDI */
/* XULOSA: SPLICE ASL ARRAYNI O'ZAGINI O'ZGARTIRB YUBORADI */

/* ============== difference between slice and splice ============================ */

let arraySplice = [
  "me",
  "you",
  "they",
  "him",
  "her",
  "his",
  "them",
  "string",
  "name",
];
let arraySlice = [
  "me",
  "you",
  "they",
  "him",
  "her",
  "his",
  "him",
  "them",
  "string",
  "name",
];
/* NO Difference because it is starting from 0 */
// console.log(arraySplice.splice(0, 3));
// console.log(arraySlice.slice(0, 3));

/* DIFFERENT */
// console.log(arraySplice.splice(2, 3)); // START and COUNT
// console.log(arraySlice.slice(2, 3)); // START to END
// console.log(arraySlice.slice(2, 2)); // []
// console.log(arraySlice.slice(2, 1)); // []

/* ========= split array ===================== */

let arraySplit = [1, 2, 3, 4, 5];
// console.log(arraySplit.split()); // TypeError: arraySplit.split is not a function

// console.log(arraySplit.join()); // 1,2,3,4,5
// console.log(arraySplit.join("+")); // 1+2+3+4+5
// console.log(arraySplit.join("+").split("+")); // [ '1', '2', '3', '4', '5' ]

// arraySplit.reverse();
// console.log(arraySplit);

// console.log(arraySplit.includes(5));

// let logo = ["webbrain", "academy"];

// function calc(param) {
//   let joined = param.join("").split("");
//   let obj = {};
//   joined.map((value, index, array) => {
//     obj[value] =
//   });
//   return obj;
// }

// console.log(calc(logo));

// let logo = ["webbrain", "academy"];

// function calc(param) {
//   let joined = param.join("").split("");
//   let obj = {};
//   let count = 1;
//   joined.map((value, index, array) => {
//     // console.log(index === array.lastIndexOf(value));
//     if (index === array.lastIndexOf(value)) {
//       obj[value] = 1;
//     } else {
//       obj[value] = 2;
//     }
//   });
//   return obj;
// }

// console.log(calc(logo));
