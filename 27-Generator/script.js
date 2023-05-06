function* getData() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let generator = getData();
// console.log(generator); // Object [Generator] {}

// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }

// console.log([...generator]); // [ 3, 4, 5 ]
//
// for (vl of generator) {
//   console.log(vl); // nothing because done is true
// } //

// console.log(generator.next()); // { value: undefined, done: true }

// console.log([...generator]); //  []

/* ========= How to use generator function ============== */

function* getId() {
  let id = 4;
  //   console.log(users.length); // 3 because onDelete working before getId()
  while (true) {
    yield ++id;

    // if (id == 7) {
    //   return id;
    // }
  }
}

let generatorId = getId();

let users = [
  { id: 1, name: "me1" },
  { id: 2, name: "me2" },
  { id: 3, name: "me3" },
  { id: 4, name: "me4" },
];

const onDelete = (id) => {
  let res = users.filter((v) => v.id !== id);
  users = res;
};

const add = (newUser) => {
  let res = [...users, { id: generatorId.next().value, name: newUser }];
  users = res;
};

onDelete(1);
add("newUser1");
add("newUser2");
onDelete(4);

// console.log(users);

/* ============== get Id From Array  ============= */

function* getIdFromArray(param) {
  for (let vl of param) {
    yield vl;
  }
}

let generat = getIdFromArray([1, 2]);

console.log(generat.next());
console.log(generat.next());
console.log(generat.next());



/* ========== sending param to generator =============== */

function* getIdFr() {
  let i = 0;
  while (true) {
    let gn = yield ++i; //
    if (gn) {
      i = i + gn;
    }
  }
}

let ge = getIdFr();

// console.log(ge.next().value);  // 1
// console.log(ge.next(2).value); // 4
// console.log(ge.next(8).value); // 13
// console.log(ge.next(6).value); // 20
// console.log(ge.next(3).value); // 24
// console.log(ge.next(1).value); // 26
