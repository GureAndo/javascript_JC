"use strict";
let span = document.querySelector("span");
let idCheck = document.querySelector("#checkbox");
let input = document.querySelector("#input");
let display = document.querySelector("#display");

console.log(display);
console.log(idCheck);
console.log(input);
span.style.color = "black";
display.style.color = "black";
//avec function
function show() {
  input.setAttribute("type", "text");
}
function hide() {
  input.setAttribute("type", "password");
}

idCheck.addEventListener("click", function () {
  if (idCheck.checked == true) {
    console.log("checked");
    show();
  } else {
    console.log("pas check");
    hide();
  }
});
// sans function
idCheck.addEventListener("click", function () {
  console.log("je clic");

  if (idCheck.checked == true) {
    input.setAttribute("type", "");
    display.textContent = "Show";
    console.log("checked");
  } else {
    input.setAttribute("type", "password");
    console.log("unchecked");
    display.textContent = "hide";
  }
});
