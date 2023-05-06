console.log("started");

let id = setTimeout(
  (a, b) => {
    console.log(a, b);
  },
  2000,
  "hi",
  "man"
);

let intervalId = setInterval(() => {
  let date = new Date();
  console.log(
    `Clock: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
}, 1000);

clearInterval(intervalId);
clearTimeout(id);

// function getFunc() {
//   return function (name) {
//     console.log(name);
//   };
// }

// getFunc()("name");

function CurryFunc(a) {
  return (b) => {
    if (b) {
      return CurryFunc(a + b);
    } else {
      return a;
    }
  };
}

// console.log(CurryFunc(1)(2)(3)(4)()); // 10
// console.log(CurryFunc(1)(2)(3)(4)(5)); //[Function (anonymous)]


