// alert(window.innerHeight);
// alert(window.innerWidth);
// alert(document.title = 'Module')
// alert(location.pathname);
// console.log(document);

/* ===================================================== */

// let body = document.getElementsByTagName("body");
// let mainDiv = document.getElementsByClassName('parent')
let childDiv = document.getElementById("id");

// console.log(childDiv.childNodes);
// console.log(childDiv.children);

// console.log(body.childNodes);
// body[0].style.background = 'whitesmoke'
// mainDiv[0].style.background = 'white'

/* ===================================================== */

let body = document.querySelector("body");
let mainDiv = document.querySelector(".parent");
let childDivs = document.querySelectorAll("#id");

body.style.background = "whitesmoke";
mainDiv.style.background = "white";

childDivs.forEach((v) => (v.style.color = "red"));

/* ======================================================= */

let a = document.querySelector("#text1");
let b = document.querySelector("#text2");
let c = document.querySelector("#text3");
a.innerHTML = "<i>one</i>"; // you can add content as well as element

// b.textContent = "Hi";

// console.log(a);

// console.log(b.textContent);
// console.log(b.innerText);

/* if you get data, using id, id must be unique, otherwise, you will get undefined. */
// console.log(text3.textContent, "taking from id");
// console.log(text3.innerHTML, "taking from id");
// console.log(text3.innerText, "taking from id");

// text3.hidden = false;

// console.log(body.outerHTML); // outerHTML => document in string


// console.log(c.nextElementSibling);
// console.log(c.nextSibling);