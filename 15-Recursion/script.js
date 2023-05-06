/* Recursion function */

// let res = 0;
// const sum = (n) => {
//   if (n === 1) {
//     return (res += 1);
//   } else {
//     res += n;
//     return sum(n - 1);
//   }
// };

// console.log(sum(4));

let company = {
  sales: [
    { names: "John", salary: 1000 },
    { names: "Alex", salary: 2000 },
  ],
  development: {
    sites: [
      { names: "Peter", salary: 3000 },
      { names: "Dimon", salary: 4000 },
    ],
    internals: [{ name: "Jack", salary: 5000 }],
  },
};

function calc(deparment) {
  if (Array.isArray(deparment)) {
    return deparment.reduce((sum, current) => sum + current.salary, 0);
  } else {
    let sum = 0;
    for (let sub of Object.values(deparment)) {
      sum += calc(sub);
    }
    return sum;
  }
}
console.log(calc(company));
