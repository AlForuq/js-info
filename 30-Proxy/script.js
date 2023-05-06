let user = {
  name: "web",
  _stir: 23451,
};

/* ========= get =============== */

let proxy = new Proxy(user, {
  get(target, key) {
    if (key === "_stir") {
      return "cant access";
    }
    return target[key]; // Without this, "proxy.existKeys" resturns "undefined"
  },
});

// console.log(proxy.name); // web
// console.log(proxy._stir); // "cant access"
// console.log(proxy.nonExist);  // andefined

// console.log(proxy); // { name: 'web', _stir: 23451 }
// proxy._stir = "new stir";
// proxy.name = "new name";
// console.log(proxy); //  { name: 'web', _stir: 'new stir' }

/* ========== set ============== */

let user2 = { name: "Muhammadamin", password: 12345 };

let proxy2 = new Proxy(user2, {
  set(target, key, value) {
    console.log(target, key, value);
    if (key === "password") {
      return false; // this will stop updating certain property values
    } else {
      return (target[key] = value); // this will UPDATE and ADD. Without this, NO UPDATE and ADD
    }
  },
});

// proxy2.name = "Feruzbek";
// proxy2.password = "new pw"; // Cannot change password because it comes with "false" (line 23)

// proxy2.stats = "developer";

// console.log(proxy2);

