// try {
//   console.log(hithere);
// } catch {
//   console.log('smth went wrong');
// }

// try {
//   console.log(hithere);
// } catch (error) {
//   // console.log(error); // ReferenceError: hithere is not defined
//   // console.log(error.name); // ReferenceError
//   // console.log(error.message); // hithere is not defined
//   // console.log(error.stack); // error in string
// }

function getData() {
  console.log("started");
  fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json().then((res) => console.log(res))
  );
  console.log("finished");
}

/* =========================================================== */
let login = {
  user1: {
    login: "Muhammadamin",
    fullName: "MUHAMMADIEV Muhammadamin",
    age: 21,
    password: 2002,
  },
  user2: {
    login: "Feruzbek",
    fullName: "MUHAMMADIEV Feruzbek",
    age: 21,
    password: 2002,
  },
};

console.log("started"); // 1

function func(lg, pw, callback) {
  setTimeout(() => {
    if (login.user1.login === lg && login.user1.password === pw) {
      return callback(`${login.user1.login}, Welcome!`);
    } else {
      callback("Incorrect login");
    }
  }, 1000);
}

let callback = (user) => {
  console.log(user);
  console.log("finished");
};

// func("Muhammadain", 2002, callback);

/* =========== Calback Inside of Callback. Callback Hell =============================== */

function ClbHell(lg, pw, callback) {
  setTimeout(() => {
    if (login.user1.login === lg && login.user1.password === pw) {
      return callback(`${login.user1.login} Welcome!`, (hi, anotherHel) => {
        console.log(`${hi} ${login.user1.fullName}`, anotherHel());
      });
    } else {
      callback("Incorrect login");
    }
  }, 1000);
}

let clb = (user, callback) => {
  console.log(user);
  typeof callback == "function" &&
    callback("Hi", (another) => "I am another hell");
  console.log("finished");
};

// ClbHell("Muhammadamin", 2002, clb);

/* ============= Promise =============== */

let promiseUser = new Promise((resolve, reject) => {
  if (login.user1.login === "Muhammadamin" && login.user1.password === 2002) {
    resolve(`Welcome to Facebook`);
  } else {
    reject("Incorrect");
  }
});

// promiseUser
//   .then((res) => {
//     console.log(res); // 3
//   })
//   .then(() => {
//     console.log("finished of then"); // 4
//   })
//   .catch((res) => {
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("Finally comes out of both then and catch"); // last
//   });
// console.log("finished"); // 2

const get = async () => {
  let res = await promiseUser;
  console.log(res);
  console.log("finished");
};
// get();
/* ========== Promise All ================ */

let all = Promise.all([
  new Promise((resolve, reject) => {
    if (login.user1.login === "Muhammadamin" && login.user1.password === 2002) {
      resolve(`Welcome to Facebook`);
    } else {
      reject("Incorrect");
    }
  }),
  new Promise((resolve, reject) => {
    if (login.user1.login === "Muhammadamin" && login.user1.password === 2002) {
      resolve(`Welcome to Instagram`);
    } else {
      reject("Incorrect");
    }
  }),
  new Promise((resolve, reject) => {
    if (login.user1.login === "Muhammadamin" && login.user1.password === 2002) {
      resolve(`Welcome to Twitter`);
    } else {
      reject("Incorrect");
    }
  }),
]);

// all.then((res) => console.log(res)).catch((res) => console.log(res));
