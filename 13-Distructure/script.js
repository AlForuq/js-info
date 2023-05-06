/* ================== Object Distructure ================== */

let obj = {
  name: "Muhammadamin",
  age: 21,
  data: { year: 2023, child: { nick: "Mike" } },
};

let name = "Feruzbek";

let {
  name: newName,
  age,
  data: {
    year,
    child: { nick },
  },
} = obj;

// (newName); // Muhammadamin
// (year);    // 2023
// (nick);    // Mike
// (data); // ReferenceError: data is not defined
// (child); // ReferenceError: child is not defined

/* ================== Array Distructure ================== */

let arr = ["Apple", "Kivi", "Orange"];

let [first, second, third, fourth] = arr;
let [firstOne, ...restOnes] = arr;

// first; // Apple
// second; // Kivi
// third; // Orange
// fourth; // undefined

// restOnes // ["Kivi", "Orange"];

/* ================== Distructure in Function ================== */

const getData = ({ name, id }) => {
  console.log(name, id);
};
// getData(val); // TypeError: Cannot destructure property 'name' of 'undefined' as it is undefined.
// ReferenceError: val is not defined
// getData(55); // undefined undefined
// getData({ name: "me", id: 1 }); // me 1

const handleError = (data) => {
  console.log(data && data.name); // undefined
  console.log(data?.name); // undefined
};
// handleError();
// handleError(f); // ReferenceError: f is not defined

const handleDefault = (data = {}) => {
  console.log(data.name); // undefined
};
// handleDefault();
// handleDefault(f); // ReferenceError: f is not defined

/* ============ Object to Array  ========================= */

let object = {
  name: "Muhammadamin",
  age: 21,
  data: { done: false },
};
Object.entries(object);
// [ [ 'name', 'Muhammadamin' ],  [ 'age', 21 ],  [ 'data', { done: false } ] ]

Object.entries(object).map(([key, value], index) => {
  // console.log(key, value);
});

/* ================== Date ====================*/

// getYear => deprecated

let date = new Date();
// console.log(date);

// console.log(Date.now());
// console.log(date.getTime());

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const getDay = () => {
  return week[date.getDay() - 1];
};
// console.log(getDay());

/* ============ JSON =========== */

let user = {
  name: "Muhammadamin",
  age: 21,
  data: { done: false, child: { value: true } },
};

let json = JSON.stringify(user);
let toObj = JSON.parse(json);

let specifyJson = JSON.stringify(user, ["name"]);

console.log(specifyJson); // {"name":"Muhammadamin"}

let specifyMore = JSON.stringify(
  user,
  ["name", "data", "done", "child", "value"], // test by removing some strings
  2 // this makes object more readable
);

console.log(specifyMore);
