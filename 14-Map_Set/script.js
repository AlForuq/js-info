let map = new Map([["name", "wba"]]);

map.name = "webbrain";

// console.log(map, map.get("name")); // Map(1) { 'name' => 'wba', name: 'webbrain' } wba
// console.log(map, map.name); // Map(1) { 'name' => 'wba', name: 'webbrain' } webbrain
// console.log(map.size); // 1

map.set("title", "IT center");
// console.log(map.get("title")); // IT center
// console.log(map.title); // undefined
// console.log(map); // Map(2) { 'name' => 'wba', 'title' => 'IT center', name: 'webbrain' }
// console.log(map.size); // 2

/* ========== difference between map and object ============*/

let o = {};
let m = new Map();

o[false] = "boolean";
// console.log(o[false]); // boolean
// console.log(o);

m.set(false, "boolean");
// console.log(m.get(false)); // boolean
// console.log(m);

/* ================ map Methods ================ */

let mapMethod = new Map();

mapMethod[false] = "boolean In pure obj";
mapMethod.set(false, "boolean");
mapMethod.set(123, "number");

// console.log(mapMethod.has(123)); // true

mapMethod.delete(123);

// console.log(mapMethod.has(123)); // false
// console.log(mapMethod); // Map(1) { false => 'boolean', false: 'boolean' }

mapMethod.clear();

// console.log(mapMethod); // Map(0) { false: 'boolean In pure obj' }

/* ================ loop map ================== */

let user = { name: "Muhammadamin", age: 21, status: "student" };
Object.entries(user); // [ [ 'name', 'Muhammadamin' ], [ 'age', 21 ], [ 'status', 'student' ] ]

let mapUser = new Map([
  ["name", "Muhammadamin"],
  ["age", 21],
  ["status", "student"],
]);

// console.log(mapUser); // Map(3)
// console.log(mapUser.entries()); // [Map Entries]
// console.log(mapUser.keys()); // [Map Iterator]
// console.log(mapUser.values()); // [Map Iterator]

// mapUser.forEach(e => console.log(e))

for (let v of mapUser) {
  // console.log(v);
}
for (let v of mapUser.entries()) {
  //   console.log(v);
}
for (let v of mapUser.keys()) {
  //   console.log(v);
}
for (let v of mapUser.values()) {
  //   console.log(v);
}

let generator = mapUser.entries();

generator.next();
// console.log(generator.next());
generator.next();
// console.log(generator.next());

/*============ Object.fromEntries(map) =====================*/
// console.log(mapMethod);

// console.log(Object.entries(mapMethod)); // [ [ 'false', 'boolean In pure obj' ] ]
// console.log(Object.fromEntries([["false", "boolean In pure obj"]]));
// console.log(Object.fromEntries(mapUser));
// console.log(Object.fromEntries(mapUser).name);

/* ================== new Set =======================*/

let obj = { name: "Muhammadamin" };

let set = new Set();

set.add(obj);
set.add("name");
set.add(function () {});
set.add(obj);
set.add("name");
// console.log(set.has('name'));
// console.log(set);

/* ================== new weakMap, new weakSet =======================*/

/* javascript info */