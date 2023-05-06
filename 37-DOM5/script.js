ctxmenu.addEventListener("contextmenu", () => {
  alert("contextmenu");
});

let title = document.querySelector("#copyTitle");

title.oncopy = () => {
  return false;
};

let nm = document.querySelector("#nm");

function change(e) {
  console.log(e.key, e.type, e.code);
  nm.textContent = e.target.value;
}

box.style.cssText = `
margin-top: 20px;
border: 1px solid black;
width: 200px;
height: 200px;
overflow: auto;
`;
box.addEventListener("mousemove", (e) => {
  if (e.ctrlKey) box.style.backgroundColor = `rgb(${0} ${e.y} ${e.x})`;
});

box.addEventListener("scroll", (e) => {
  console.log(Math.trunc(e.target.scrollTop) + e.target.clientHeight);
  // console.log(e.target.scrollHeight);
  if (
    e.target.scrollHeight - 50 <=
    Math.trunc(e.target.scrollTop) + e.target.clientHeight
  ) {
    box.textContent += box.textContent;
  }
});

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0px 6px 8px 0px black";
  } else {
    navbar.style.boxShadow = null;
  }
});
