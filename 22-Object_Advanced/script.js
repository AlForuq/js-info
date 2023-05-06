let user = { name: "webbrain", title: "IT center", check() {} };

// console.log(Object.getOwnPropertyDescriptors(user));
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
//
Object.defineProperty(user, "name", { value: "NT" }); //  Rename
// console.log(user);

Object.defineProperty(user, "name", { writable: false, value: "NT" }); // Cant make renamed
user["name"] = "PDP";
console.log(user);

Object.defineProperty(user, "title", { enumerable: false }); // Cant make counted
for (let v in user) {
  //   console.log(v); // name // check;
}
// console.log(user); // { name: 'NT', check: [Function: check] }

Object.defineProperty(user, "check", { configurable: false }); // Cant make delete
// delete user.check;
// console.log(user);

// console.log(Object.getOwnPropertyDescriptors(user));

let obj = {
  name: "Muhammadamin",
  set fullname(value) {
    /* Dont use Console in setter */
    this.name = value.name;
  },
  get fullname() {
    console.log(this.name);
  },
};

// obj.fullname = { name: "Feruzbek" }; // setter
// obj.fullname; // getter
