import  { users } from "./data.js";

container.style.cssText = `
  border: 1px solid black;
  width: 200px;
  // height: 200px;
  padding: 20px;
  margin-top: 10px;
`;

let data = users;

let onDelete = (id) => {
  let res = data.filter((v) => v.id !== id);
  data = res;
  container.innerHTML = null;
  call();
};

function call() {
  if (!data.length) container.innerHTML = "<bold>NO DATA</bold>";
  data.forEach((value) => {
    console.log(value);
    const div = document.createElement("div");
    const btn1 = document.createElement("button");
    btn1.innerHTML = "delete";
    div.innerHTML = `${value.name}`;

    btn1.addEventListener("click", () => onDelete(value.id));

    div.append(btn1);
    container.append(div);
  });
}

call();
