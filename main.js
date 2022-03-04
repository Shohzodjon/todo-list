const addTo = document.querySelector(".btn-primary");
const clear = document.querySelector(".btn-danger");
const input = document.querySelector("#itemInput");
const ul = document.querySelector("#todoList");
const body = document.querySelector("body");

const addVal = (e) => {
  const li = document.createElement("li");
  const span = document.createElement("span");

  if (input.value !== "") {
    ul.append(li);
    li.append(span);
    span.textContent = input.value;
    input.value = "";
  }
  const delet = document.createElement("button");
  delet.innerHTML = "delete";
  li.append(delet);

  const complete = document.createElement("button");
  complete.innerHTML = "Complete";
  li.append(complete);

  const edit = document.createElement("button");
  edit.innerHTML = "Edit";
  li.append(edit);

  edit.classList.add("btn-info");
  edit.style.right = "250px";
  edit.style.top = "25%";
  delet.classList.add("btn-warning");
  delet.style.right = "150px";
  delet.style.top = "25%";
  complete.classList.add("btn-danger");
  complete.style.right = "50px";
  complete.style.top = "25%";

  edit.addEventListener("click", function () {
    const div = document.createElement("div");
    div.classList.add("div");
    body.appendChild(div);
    div.style.display = 'block'
    const inpt = document.createElement("input");
    inpt.classList.add("input");
    inpt.value = span.textContent;
    div.appendChild(inpt);
    const x = document.createElement("button");
    x.textContent = "✔";
    x.classList.add("x");
    div.appendChild(x);
    x.addEventListener("click", function () {
      div.style.display = "none";
      const text = inpt.value;
      span.textContent = text + "  ✏️";
    });
  });

  complete.addEventListener("click", function () {
    span.style.textDecoration = "line-through";
    complete.style.display = "none";
    span.style.color = "gray";
    const incomplete = document.createElement("button");
    incomplete.innerHTML = "incomplete";
    li.append(incomplete);
    incomplete.classList.add("btn-danger");
    incomplete.style.right = "50px";
    incomplete.style.top = "25%";

    incomplete.addEventListener("click", function () {
      span.style.textDecoration = "none";
      complete.style.display = "block";
      incomplete.style.display = "none";
      span.style.color = "black";
    });
  });

  delet.addEventListener("click", function () {
    li.remove();
  });
  clear.addEventListener("click", function () {
    li.remove();
    div.style.display = "none";
  });
};

addTo.addEventListener("click", addVal);
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    addVal();
  }
});



// const JsonLi = JSON.stringify(li);
// localStorage.setItem("li", JsonLi);
// const getItem = localStorage.getItem("li");
// console.log(getItem);
// const getItemParse = JSON.parse(getItem);
// console.log("getItem", getItemParse);