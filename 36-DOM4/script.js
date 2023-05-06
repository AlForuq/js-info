function onClick() {
  console.log("click from func");
}
function onMouseDown() {
  console.log("mousedown from func");
}
function onMouseUp() {
  console.log("mouseup from func");
}
btn.addEventListener("click", onClick);
btn.addEventListener("mousedown", onMouseDown);
btn.addEventListener("mouseup", onMouseUp);

/* ======================================================================= */

// class Eventer {
//   handleEvent(event) {
//     console.log(event.type);
//     switch (event.type) {
//       case "mousedown":
//         onMouseDown();
//         break;
//       case "click":
//         onClick();
//         break;
//       case "mouseup":
//         onMouseUp();
//         break;
//     }
//   }
// }
// const e = new Eventer();
// btn.addEventListener("click", e);
// btn.addEventListener("mousedown", e);
// btn.addEventListener("mouseup", e);

/* ================================================================= */
function grandParent() {
  console.log("grandParent");
}

function parent(param) {
  //   param.stopImmediatePropagation();
  param.stopPropagation();
  console.log("parent");
}

function child(param) {
  //   param.stopImmediatePropagation();
  param.stopPropagation();
  console.log("child");
}
/* ================================================================= */
let target = null;
table.onclick = function (e) {
  if (target) {
    target.classList.remove("highlight");
  }

  target = e.target;
  target.classList.add("highlight");
};

let check = false;
button.onclick = function () {
  console.log(check);
  check = true;
  console.log(check);
};
