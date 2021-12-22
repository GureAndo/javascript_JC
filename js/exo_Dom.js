"use strict";
/**
 *
 * header avec un h1 centrer
 *
 * main avec 2 section
 * un titre pour chaque section
 * dans chaque section 3 para
 * au moin un img dans la section
 *
 * footer mention legale confidentialité 2 lien a centrzer
 *
 * changer la couleur du text .
 * metre des maj.
 * utiliser les querieSelector
 *
 * changer l'image en la ciblant
 *
 * disparaitre un text avec une classe en l'injectant avec le js 'cree un classe en css pas en html'
 *
 */
let inputId = document.querySelector("input");
let h1 = document.querySelector("h1");
console.log(h1);

h1.style.color = "orangered";

let txt = document.querySelectorAll(".txt p");
console.log(txt);
for (let i = 0; i < txt.length; i++) {
  txt[i].style.color = "orangered";
  txt[i].style.fontSize = "20px";
}

let span = document.querySelectorAll("span");
console.log(span);
for (let i = 0; i < span.length; i++) {
  span[i].style.textTransform = "uppercase";
  span[i].style.fontSize = "40px";
}

let img = document.querySelectorAll(".img img");
for (let i = 0; i < img.length; i++) {
  img[i].style.borderRadius = "15px";
}

console.log(img);
//img[0].src = "../img/index.jpg";
img[0].setAttribute("src", "../img/index.jpg");

// img[0].addEventListener("click", function () {
//   //img[0].src = "../img/decor-tournage-nature-0017217_MD-900x600.jpg";
//   if (img[0].src == "../img/decor-tournage-nature-0017217_MD-900x600.jpg") {
//     img[0].src = "../img/index.jpg";
//   } else if (img[0].src == "../img/index.jpg") {
//     img[0].src = "../img/decor-tournage-nature-0017217_MD-900x600.jpg";
//   } else {
//     console.log("dqsdqs");
//   }
// });
// let hidden = document.querySelector(".displayNone");

// let hiddenClass = document.querySelector("h1");
// console.log(h1);
// h1.style.visibility = "hidden";

// console.log(txt);
// txt[1].style.visibility = "hidden";

txt[1].classList.add("displayNone");
txt[1].classList.remove("displayNone");
let selectImg2 = document.querySelector(".img2");
let selectImg1 = document.querySelector(".img1");
console.log(selectImg2);
selectImg2.style.borderRadius = "15px";

var test = document.querySelector("#test1");
console.log(test);

test.addEventListener("click", function (test) {
  test.target.classList.toggle("img1");
});

inputId.addEventListener("input", function () {
  console.log(this.value);
  let result = inputId.value;
  console.log(result + 2);
});
