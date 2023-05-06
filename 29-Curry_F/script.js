const operation = (type) => {
  return (a) => (b) => (c) => {
    switch (type) {
      case "multiply":
        return a * b * c;
        break;
      case "divide":
        return a / b / c;
        break;
      case "add":
        return a + b + c;
        break;
      case "substract":
        return a - b - c;
    }
  };
};

const math = operation("multiply");
// console.log(math(1)(2)(3));

// function sum(a) {
//   return (b) => {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(sum(6)(2));

// let count = 0;
// function sum(a) {
//   count += a;
//   let func = (b) => {
//     count += b;
//     return func;
//   };
//   return func;
// }

// console.log(sum(6)(2));
