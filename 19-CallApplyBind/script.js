let user1 = {
  name: "Webbrain",
  lastName: "Academy",
};

let user2 = {
  name: "Digital",
  lastName: "One",
};

let users = [
  {
    name: "Webbrain",
    lastName: "Academy",
  },
  {
    name: "Digital",
    lastName: "One",
  },
];

function getInfo(a = "default", b = "value") {
  return `${this.name} ${this.lastName} is a ${a} ${b}`;
}

// getInfo.call(user1); // Webbrain Academy
// getInfo(); // undefined undefined

for (let user of users) {
  // console.log(getInfo.call(user, "Good", "IT center"));
}

for (let user of users) {
  // console.log(getInfo.apply(user, ["Good", "Company"]));
  // console.log(getInfo.apply(this, ["Good", "Company"]));
}

let mt = getInfo.bind(user1, "Good Binded", "Company");
// console.log(mt); // [Function: bound getInfo]
// console.log(mt()); //  Webbrain Academy is a Good Binded Company
