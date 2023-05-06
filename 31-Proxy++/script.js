/* =============== ownKeys =================== */

let user = { name: "Feruzbek", pw: 1234 };

let proxy1 = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((v) => v !== "pw");
  },
});

// console.log(proxy1);

// for (i in proxy) {
//   console.log(i); // no pw
// }

/* ==================== has ================= */
let range = { from: 1, to: 10 };

let proxy2 = new Proxy(range, {
  has(target, prop) {
    return target.from <= prop && target.to >= prop;
  },
});

// range.to = 4;
// console.log(5 in proxy2); // here 5 is prop

/* =================== Reflect =================== */

Reflect.set(user, "pdp", "it center");
// console.log(user);
// console.log(Reflect.get(user, "pdp"));

/* =============== reference this ============= */

let usr = {
  name: "me",
  age: "21",
  getValue(hi) {
    console.log(this.name, this.age);
  },
};

// usr.getValue();

/* if function is redeclared, its reference will be gone. and we have to use "call or apply" */
let data = usr.getValue;
// data.call(usr);

/* =========== Global this ============= */

outer = "outer";
function get() {
  inner = "inner";
  console.log(this);
}
get();
console.log(this); // {}
