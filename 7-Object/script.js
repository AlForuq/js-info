let obj1 = { name: "webbrain" };
let obj2 = { name: "webbrain" };
let obj3 = obj1;

// obj1.name = "academy";
// obj1 = {webbrain: 'IT center'}

// console.log(obj1);
// console.log(obj3);

/* =================================== */

let user = {
  name: "Muhammadamin",
  age: 21,
  sayHi() {
    console.log(this.name); // this way is better, because it will access the nearest parent
    // console.log(`Hi, ${user.name}`);
  },
};

// user.sayHi(); // no problem

// But problem go on here
// let user2 = user;
// user = null;
// user2.sayHi();

/* ================================= */

// let ArrowInObj = {
//   name: "webbrain",
//   getArrow: () => {
//     console.log(this); // {}
//     console.log(this.name); // undefined
//   },
// };

// ArrowInObj.getArrow();

/* ==================================== */

// "this" inside Arrow Function will work, if the arrowFunction is located inside the regular function
// let ArrowInObj = {
//   name: "webbrain",
//   getArrow: function () {
//     console.log(this.name);
//     return () => {
//       console.log(this.name);
//     };
//   },
// };

// ArrowInObj.getArrow()();

/* ======================================== */
// class (constructor)
class oldBoy {
  constructor() {
    this.name = "brain";
    return this;
  }
}

// console.log(new oldBoy());

// function constuctor
function newBoy() {
  this.name = "web";
  return this;
}

// console.log(new newBoy());

/* ============================================ */

function newBoy() {
  this.name = "web";
  this.sayHi = function () {
    console.log(this);
    return "Hi from func";
  };
}

// console.log(new newBoy()); // equal to "this"

console.log(new newBoy().sayHi());

// console.log(newBoy()); // undefined *cause it is not constructor and Not returning anthing.

/* =================================== */

// updating the contructor
function UpdatenewBoy() {
  this.name = "web";
  this.sayBye = function () {
    this.name = "pdp";
    return this;
  };
}

console.log(new UpdatenewBoy().sayBye());

/* =================================================== */

// new.target helps us to differantiate between constructor and regular function

function checkFunc() {
  console.log(new.target);
}

// checkFunc(); // undefined => in regular function
// new checkFunc(); // [Function: checkFunc] => in constructor

/* ================================ */

let symb1 = Symbol("id");
let symb2 = Symbol("id");

// console.log(symb1 == symb2); // false

let obj = {
  [symb1]: "webbrain", // only variable of Symbol is available in this way'
  ["symb2"]: "academy",
};

// console.log(obj[symb1]);
// console.log(obj[symb2]);

/* ======================================== */

let dynamicKeys = {
  name: "Muhammadamin",
  age: 21,
  status: "Learner",
};

for (let keys in dynamicKeys) {
  // console.log(dynamicKeys[keys]); // this is dynamic
  // console.log(dynamicKeys.keys); // this is not Dynamic
}

/* ============ distructure ========================= */
const distructureObj = {
  named: "Muhammadamin",
  age: 21,
  position: "Learner",
  child: {
    names: "smb",
    age: "0",
  },
};

let position = "Coder";

const {
  named,
  age: goodAge, // just rename without any reason
  position: newPosition, // if Identifier 'position' has already been declared, (line 154)
  //you can change the name of variable. Test by removing "newPosition"

  child: { names }, // you can distruct the object in this way
} = distructureObj;

// console.log(named, goodAge, newPosition, names);

/* ========= spreadOperator ================ */

let spreadOperObj = {
  name: "FERUZBEK",
};

// console.log({ ...spreadOperObj, name: "Muhammadamin" });
// console.log({ spreadOperObj, name: "Muhammadamin" });
