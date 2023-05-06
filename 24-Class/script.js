class User {
  constructor(param) {
    // constructor's param can only be used inside of constructor
    this.title = param;
  }
  alternative = "another way";

  getTitle(numbers) {
    this.alternative = "a way";

    console.log(numbers, this.title);
  }
}

let user1 = new User("Title in constructor");
let user2 = new User("Theme in constructor");

// user1.getTitle("One");
// user2.getTitle("Two");
// console.log(user1);

/* ========= getter setter ============= */

class NewUser {
  constructor(param) {
    // constructor's param can only be used inside of constructor
    this.title = param;
  }
  alternative = "another way";

  set getTitle(value) {
    this.alternative = value;
    this.title = value;
  }

  get ["get" + "title"]() {
    // dynamic
    console.log(this.alternative);
  }
}

let newUser = new NewUser("constructor param");

// newUser.getTitle = "new value";
// newUser.getTitle;
// console.log(newUser);

/* =========== Inheritance ========== */

class Animal {
  constructor(param) {
    this.name = param;
  }
  speed(speed) {
    console.log(`${this.name} Runs ${speed}km per hour`);
  }
}

class Rabbit extends Animal {
  constructor(...args) {
    super(...args);
  }
}

class Wolf extends Animal {
  constructor(animal) {
    super(animal);
  }
  child() {
    console.log("calling child");
  }

  info() {
    this.child();
    super.speed();
  }
}

let animal = new Animal("Animal");
// console.log(animal);

// let rb = new Rabbit("Rabbit");
let wf = new Wolf("Wolf");
// console.log(wf);

// animal.speed(14);
// animal.speed(12);

// rb.speed(14); // getting it with proto
// wf.speed(12); // getting it with proto

// wf.info();

/* ======= OverRiding  =========== */

class Hayvon {
  constructor(param, param2, param3) {
    console.log(param, param2, param3);
  }
}

class Quyon extends Hayvon {
  /*==== default ====*/
  //   constructor(...args) {
  //     console.log(args);
  //
  //     super(...args);
  //   }
}

// let hayvon = new Hayvon("Animal", "isn't", "bad");

// let qy = new Quyon("Rabbit", "is", "good");
