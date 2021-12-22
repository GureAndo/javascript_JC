"use strict";
let questionContainer = document.querySelector(".click_event");
console.log(questionContainer);
let btn1 = document.querySelector("#btn-1");
console.log(btn1);
let btn2 = document.querySelector("#btn-2");
console.log(btn2);
let reponse = document.querySelector(".reponse");
console.log(reponse);
let reponse2 = document.querySelector(".reponse2");
console.log(reponse2);
let mouseMove = document.querySelector("#mouseMove");
console.log(mouseMove);

//j'ecoute l'action du user sur la boite de ma question
questionContainer.addEventListener("click", function () {
  //mon code ici
  console.log("je clic sur ma boite question");
});
// questionContainer.addEventListener("clic", ()=> {
//   mon code ici
// });

//je cree une fonction
function maFonction() {
  console.log("ma fonction en clic");
}
//je declange ma function quand le user click surla boit de la question
questionContainer.addEventListener("click", maFonction);

btn1.addEventListener("click", function () {
  reponse.style.visibility = "hidden";
  reponse.style.display = "none";
  reponse2.style.display = "block";
  reponse2.style.visibility = "visible";
  questionContainer.style.backgroundColor = "red";
});

btn2.addEventListener("click", function () {
  reponse2.style.visibility = "hidden";
  reponse2.style.display = "none";
  reponse.style.display = "block";
  reponse.style.visibility = "visible";
  questionContainer.style.backgroundColor = "green";
});
// event = e
window.addEventListener("mousemove", function (event /*e*/) {
  // l'event recupere
  //console.log(event);
  mouseMove.style.left = event.pageX + "px";
  mouseMove.style.top = event.pageY + "px";
});

//mouseUP mouseDown
window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%,-25%)";
});
window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%,-50%)";
});
