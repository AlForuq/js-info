/* creating Object */
let newObj = {};
let newObj2 = new Object();

/* difference between '.' and '[]' while accessing keyed values in obj */
let account = {
  name: "Webbrain",
  major: "Front end",
  founded: 2020,
  "Full name": "WB Academy",
  0: "number",
};

// let key = 'major'
// console.log(account.key); // undefined => cause* log meaning the 'key' inside the obj. NOT THE VARIABLE
// console.log(account[key]); // defined => cause* log meaning the VARIABLE. NOT from the obj

// console.log(account.name);
// console.log(account['Full name']); // you can use this way for double named keys

// console.log(account['0']); // you can use this way for number keys
// console.log(account[0]); // you can use this way for number keys

// account.name = 'IT' // this will change the value
// console.log(account);

// account.non_exist = 'Extra value' // if the key does NOT exist, this will add new values
// console.log(account);

// Object.freeze(account) // this will freeze the Obj, eleminating adding and deleting properties
// account.addedKey = "addedKey";
// account.founded = 'update'
// delete account.name
// console.log(account);

// Object.seal(account); // this will seal the Obj,  eleminating adding and deleting properties
// account.founded = "update"; // Working
// account.addedKey = "addedKey"; // Not working
// delete account.name; // Not Working
// console.log(account);

/* ================================================================== */

const obj1 = {
  name: "Muhammadamin",
  age: 1,
};

const obj2 = {
  name: "Muhammadamin",
  age: 1,
};

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false

let obj3 = obj1;
// console.log(obj3 == obj1); // true
// console.log(obj3 === obj1); // true

// obj1.name = 'Feruzbek' // if we update one of the objects, it will affect both.
// console.log(obj3);

// But if we clone the object, the object and its clone will NOT affec to each other.

let cloned = structuredClone(obj1);

// obj1.name = 'Feruzbek'

// cloned.name = 'Feruzbek'

// console.log(obj1);
// console.log(cloned);

/* ================ */

// console.log('name' in obj1); // boolean. If the key exist, then 'true', otherwise 'false'

/* ================ */

let assignedObj = {};
// Object.assign(assignedObj, obj1); // this is another way of cloning

// obj1.name = "Feruzbek";

// console.log(assignedObj);
// console.log(obj1);

/* ================================= */

// Exercises
let obj = {
  name: "Webbrain",
  age: 3,
  child: {
    name: "PDP",
    age: 3,
    child: {
      name: "NJ",
      age: 4,
    },
  },
};

// let sum = 0;
// while (obj) {
//   sum += obj.age;
//   obj = obj.child;
// }

// console.log(sum);
