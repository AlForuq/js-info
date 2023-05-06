function getData() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

let user = {
  name: "todos",
  getTodos() {
    return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
      (res) => res.json()
    );
  },
};

function getCached(func) {
  let cache = new Map();
  return function(x){   // must be function in order to make use of "this". Not Arrow function
    if (cache.has(x)) {
      console.log(cache.get(x));
      return cache.get(x);
    }
      // let res = func();
    let res = func.call(this);
    return cache.set(x, res);
  };
}

// getData = getCached(getData);
user.getTodos = getCached(user.getTodos);
