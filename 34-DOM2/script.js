let parent = document.querySelector(".parent");

let child = document.querySelectorAll("#id");

console.log(parent.hasAttribute("class"));
console.log(parent.getAttribute("class"));

// parent.removeAttribute("class");
parent.setAttribute("id", "changeBorderColor");

let childDiv = document.createElement("div");
let text = document.createTextNode("Hey DOM");
childDiv.prepend(text);

childDiv.setAttribute("id", "solidBorder");

// parent.before(childDiv);
// parent.after(childDiv);
// parent.append(childDiv);
parent.append(childDiv);

// childDiv.remove()

// childDiv = parent.cloneNode(true); // <div class="parent" id="changeBorderColor"></div>

// parent.style.cssText = `
//     background-color: pink;
//     color: red;
//     border: 2px solid blue;

// `;

const ul = parent.children[0].children; // HTMLCollection(4) [li, li, li, li]

for (let i = 0; i < ul.length; i++) {
  if (i % 2 == 0) {
    ul[i].style.color = "red";
  } else {
    ul[i].style.color = "blue";
  }
}

// Array.from(ul).forEach((v) => (v.style.color = "red"));

let textParent = document.querySelector(".text");
let scrollBtn = document.querySelector(".scrollBtn");
let autoScrl = document.querySelector(".autoScrl");

let org = textParent.clientWidth;

function scrl() {
  if (textParent.clientHeight === textParent.scrollHeight) {
    textParent.style.height = `${org}px`;
    scrollBtn.innerHTML = "show more";
  } else {
    textParent.style.height = `${textParent.scrollHeight}px`;
    scrollBtn.innerHTML = "show less";
  }
}

function funcAutoScrl() {
  textParent.scrollBy(0, 50);
}

