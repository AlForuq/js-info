class Webbrain {
  year = 0;
  getYear() {
    console.log(++this.year);
  }
}

let a = new Webbrain();
let b = new Webbrain();

// a.getYear();
// a.getYear();
// a.getYear();
// b.getYear();
// b.getYear();

/* ================================= */

class NT {
  static year = 0;
  getYear() {
    console.log(++NT.year);
  }
}

let st1 = new NT();
let st2 = new NT();

// st1.getYear();
// st1.getYear();
// st1.getYear();

// st2.getYear();
// st2.getYear();

/* ============================== */

class Pdp {
  static year = 0;
  static getYear() {
    console.log(++this.year);
  }
}

// Pdp.getYear();
// Pdp.getYear();
// Pdp.getYear();
// Pdp.getYear();

/* ============ PUBLIC vs PRIVATE ================= */

class Public {
  _name = "MuhammadAmin";
  getName() {
    return this._name;
  }
}

let public = new Public();
/* public._name = "Feruzbek"; */ // this will change the value of _name
// console.log(public._name);
// console.log(public.getName());

/* ============= */
/* we don't have straight access to #protected from outside of class */
class Private {
  #protected = "secret";
  getName() {
    return this.#protected;
  }
}

let private = new Private();
// console.log(private);
// console.log(private.getName());
// console.log(private.#protected);

/* ============= Private with getter setter ============= */
/* we can change #protected from outside of class with getter setter */
class Protected {
  #protected = "Loreto";
  set getName(value) {
    this.#protected = value;
  }
  get getName() {
    return this.#protected;
  }
}

let protected = new Protected();

// protected.getName = "MyName";
// console.log(protected.getName);

/* =========== Instaceof ========= */

class Any1 extends Array {}
let arr = new Any1();
arr[0] = "me";
// console.log(arr);
let map = arr.map((v) => v.toUpperCase());
// console.log(map);

class Any2 extends Object {} // default of class
let obj = new Any2();
obj.name = "My name";
// console.log(obj);
for (let i in obj) {
  // console.log(obj[i]);
}

// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true

// console.log(obj instanceof Object); // true
// console.log(obj instanceof Array); // false\

let func = () => {};
// console.log(func instanceof Array); // false
// console.log(func instanceof Object); // true

/* ========== Alternative to Extends =========  */

class User {
  getName() {
    console.log(this.name);
  }
}

let o = {
  name: "Muhammadamin",
  info() {
    console.log(this.name);
  },
};
Object.assign(User.prototype, o);

let extendedUser = new User();

console.log(extendedUser.name);
extendedUser.getName();
extendedUser.info();
