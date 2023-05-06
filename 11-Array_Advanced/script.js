// let arr = ["webbaarain", "academy"];

// function calc(param) {
//   let obj = {};

//   param.forEach((item) =>
//     item.split("").forEach((item) => {
//       obj[item] = (obj[item] || 0) + 1;
//     })
//   );
//   return obj;
// }
// console.log(calc(arr));

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };
// obj["a"] = obj["d"];
// obj["e"] = obj["d"];
// console.log(obj);

/* ============================================== */

// console.log([] == 0); // true
// console.log([] === 0); // false
// console.log([] == "0"); // false
// console.log([] + "0"); // "0"
// console.log([] + 0); // "0"

/* =========== filter =================================== */

let filterArr = [1, 2, 54, 34, 54];
let res = filterArr.filter((value, index, array) => {
  return value > 10;
  return false;
  return value;
  return true;
  return true;
  return 0;
});
// console.log(res);

let filterArr2 = ["apple", "orange", "apelsin"];
let res2 = filterArr2.filter(function (v, i, a) {
  return v.length <= 5;
});
// console.log(res2);

/* ================ sort  ==================================== */

/* XULOSA: sort ASL ARRAYNI O'ZAGINI O'ZGARTIRB YUBORADI */

let sortArray = [5, 1, 6, 4, 7, 2];
let sortArray2 = [3, 61, 31, 26, 4, 92];

// sortArray.sort(); // can sort natural number
// sortArray2.sort(); // but CANNOT sort a two-digit number or more
// console.log(sortArray);
// console.log(sortArray2);

// sortArray2.sort((a, b) => a - b); // increase
// sortArray2.sort((a, b) => b - a); // decrease

// sortArray2.sort((a, b) => -1); // reverse
// sortArray2.sort((a, b) => 1); // exactly

// console.log(sortArray2);

let sortFruits = ["Apple", "orange", "Kivi", "banana"];

sortFruits.sort(); // [ 'Apple', 'Kivi', 'banana', 'orange' ]
sortFruits.sort((a, b) => a.localeCompare(b)); // [ 'Apple', 'banana', 'Kivi', 'orange' ]

let students = [
  { id: 1, year: 2002, name: "Abror" },
  { id: 2, year: 2003, name: "Sardor" },
  { id: 3, year: 1999, name: "Elshod" },
  { id: 4, year: 2004, name: "Farrux" },
  { id: 5, year: 2002, name: "Muhammadamin" },
  { id: 6, year: 2001, name: "Shohrux" },
  { id: 7, year: 1996, name: "Behruz" },
  { id: 8, year: 2002, name: "Feruz" },
];

// students.sort((a, b) => {
//   return a.name.localeCompare(b.name);
//   //   return b.id - a.id;
// });

// console.log(students);

/* ==================== find, findIndex ================================== */

let findItem = [10, 5, 6, 7, 8];

findItem.find((v) => v < 7); // 5

students.find((v) => v.id === 5); // { id: 5, year: 2002, name: 'Muhammadamin' }
students.findIndex((v) => v.id === 5); // 4
students.findLastIndex((v) => v.year === 9999); // -1
students.findLastIndex((v) => v.year === 2002); // 7

/* ==================== map vs forEach ================================== */

let mapItems = [10, 5, 6, 7, 8];

// mapItems.map((v) => "any"); // [ 'any', 'any', 'any', 'any', 'any' ]
// mapItems.map((v) => v); // [ 10, 5, 6, 7, 8 ]
// mapItems.map((v) => {}); // [ undefined, undefined, undefined, undefined, undefined ]

// console.log(isNaN('S'));

/* ==================== fill ================================== */

let fillArray = [1, 2, 3, 4, "55", 77, 88, 99, 101, 105];

// fillArray.fill("hi", 2);
// fillArray.fill("bye", 4);
// fillArray.fill("hello", 6, 8);
// console.log(fillArray);

/* MDN */
const fillMdn = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
// console.log(fillMdn.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
// console.log(fillMdn.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

// console.log(fillMdn.fill(6));
// Expected output: Array [6, 6, 6, 6]

/* ==================== copy ================================== */

/* XULOSA: copyWithin ASL ARRAYNI O'ZAGINI O'ZGARTIRB YUBORADI */

let copyArray = [
  "Apple",
  "orange",
  "Kivi",
  "banana",
  "javascript",
  "c++",
  "java",
];

copyArray.copyWithin(1, 3, 6); // ["Apple", "banana", "javascript", "c++", "javascript", "c++", "java"]
// copyArray.copyWithin(2, 3, 6); // ["Apple", "banana", "c++", "javascript", "c++", "c++", "java"]
// copyArray.copyWithin(6, 3, 6); // ["Apple", "banana", "c++", "javascript", "c++", "c++", "javascript"]
// copyArray.copyWithin(7, 3, 6); // ["Apple", "banana", "c++", "javascript", "c++", "c++", "javascript"]
// console.log(copyArray);

/* MDN */
const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

/* ============== reduce ======================= */
let = reducerArray = [3, 2, 3, 4, 5, 6, 2];

let test = reducerArray.reduce((sum, value) => {
  // console.log(sum, "sum"); // 1 -> 10, 6 -> 11 to 16
  /*     sum + value    */
  return sum + 1;
}, 10);
// console.log(test, "test"); // 2

/* */

let test2 = reducerArray.reduce((sum, value) => {
  // console.log(sum, "sum"); // 1->10, 6->2 /
  /*     sum + value    */
  return 1 + 1; // 2
}, 10);
// console.log(test2, "test2"); // 2

/* */

let reducer = reducerArray.reduce((sum, value) => {
  // console.log(sum, "sum");
  return sum + value;
}, 10);
// console.log(reducer, "reducerFunc");

/*  */

let number = [1, 2, 3, 4, 5];

let ress = number.reduce((sum, current, i) => {
  // console.log(sum, i, sum - i);
  // console.log(i, sum, i - sum);
  return i - sum;
}, 0);

// console.log(ress, "res");

// 0 0 0
// 0 1 -1
// 1 2 -1
// 1 3 -2
// 2 4 -2
// 2 res

/* ================ flat ============================= */

let flatArray = [1, 1, [2, 2, [3, 3, ["4", ["5"]]]]];
// flatArray         => [ 1, 1, [ 2, 2, [ 3, 3, [Array] ] ] ]
// flatArray.flat(0) => [ 1, 1, [ 2, 2, [ 3, 3, [Array] ] ] ]

// flatArray.flat()  => [ 1, 1, 2, 2, [ 3, 3, [ '4', [Array] ] ] ]
// flatArray.flat(1) => [ 1, 1, 2, 2, [ 3, 3, [ '4', [Array] ] ] ]

// flatArray.flat(2) => [ 1, 1, 2, 2, 3, 3, [ '4', [ '5' ] ] ]
// flatArray.flat(3) => [ 1, 1, 2, 2, 3, 3, '4', [ '5' ] ]
// flatArray.flat(4) => [1, 1, 2, 2, 3, 3, '4', '5']
// flatArray.flat(Infinity) => [1, 1, 2, 2, 3, 3, '4', '5']

// console.log(flatArray.flat(Infinity).reduce((sum, value) => sum + value, 0)); // "1245"

/* ========= new Set vs alternative way =================== */

let a = [1, 2, 2, 3, 3, 4, 4, 5];

new Set(a); // Set(5){ 1, 2, 3, 4, 5 }
Array.from(new Set(a)); // [ 1, 2, 3, 4, 5 ]

// console.log(a.filter((value, index, array)=> index === array.indexOf(value)));

/*================ new Map =================*/

let object = {
  name: "Muhammadamin",
  age: 21,
};
Object.entries(object); // [ [ 'name', 'Muhammadamin' ], [ 'age', 21 ] ]

let newMap = new Map([
  ["name", "Muhammadamin"],
  ["age", 21],
]);
// console.log(newMap); // Map(2) { 'name' => 'Muhammadamin', 'age' => 21 }

newMap.keys(); //    [Map Iterator] { 'name', 'age' }
newMap.values(); //  [Map Iterator] { 'Muhammadamin', 21 }
newMap.entries(); // [Map Entries] { [ 'name', 'Muhammadamin' ], [ 'age', 21 ] }

Array.from(newMap.keys()); // [ 'name', 'age' ]
Array.from(newMap.values()); // [ 'Muhammadamin', 21 ]
Array.from(newMap.entries()); // [ [ 'name', 'Muhammadamin' ], [ 'age', 21 ] ]

/* ========== Array ======================== */

Array.from(55); // []
Array.from("web"); // [ 'w', 'e', 'b' ]
// Array.from("web", 3); // 3 is not a function  => second param must be callback
Array.from("web", (value) => value); // [ 'w', 'e', 'b' ]
Array.from("web", (value) => value.toUpperCase()); // [ 'W', 'E', 'B' ]

/* ========= newMap entries next generator ===================== */

const map = new Map([
  ["a", 1],
  ["b", 2],
]).entries(); // [Map Entries] { [ 'a', 1 ], [ 'b', 2 ] }
// .keys()
// .values()

map.next(); // { value: [ 'a', 1 ], done: false }
map.next(); // { value: [ 'b', 2 ], done: false }
map.next(); // { value: undefined, done: true }
