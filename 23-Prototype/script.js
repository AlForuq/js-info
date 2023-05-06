let user1 = { firstName: "WEBBRAIN" };
let user2 = { lastName: "ACADEMY" };

// Object.assign(user1, user2);
// console.log(user1); // { firstName: 'WEBBRAIN', lastName: 'ACADEMY' }

// user1.__proto__ = user2;
// for (let value in user1) {
//   console.log(user1[value]);
// }

let user3 = {
  name: "PDP",
  last: "IT Center",
};
let user4 = {
  name: "NT",
  last: "IT Company",
};

/* ========== */

Object.prototype.fullName = function () {
  return this;
};
// console.log(user3.fullName());
// console.log(user4.fullName());

/* ========== */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.remove = function (n) {
  return this.filter((v) => v != n);
};
// console.log(arr.remove(4));
// console.log(arr.remove(3));

/* ==== HomeWork ====== */

let user5 = { name: "me", age: 1 };

Object.prototype.delete = function (p) {
    Object.defineProperty(this, p, { configurable: false });
  delete this[p];
  return this;
};

// console.log(user5.delete("age"));
console.log(user5.set("age"));
