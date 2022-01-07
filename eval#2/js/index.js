"use strict";
let item = document.querySelectorAll(".voiture1");
let item1 = document.querySelectorAll(".voiture2");
let item2 = document.querySelectorAll(".voiture3");
let item3 = document.querySelectorAll(".voiture4");
console.log(item);
console.log(item1);
console.log(item2);
console.log(item3);
let nbslide = item.length;
let nbslide1 = item1.length;
let nbslide2 = item2.length;
let nbslide3 = item3.length;
console.log(nbslide);
console.log(nbslide1);
console.log(nbslide2);
console.log(nbslide3);
let suivant = document.querySelector(".right1");
let precedent = document.querySelector(".left1");
let suivant1 = document.querySelector(".right2");
let precedent1 = document.querySelector(".left2");
let suivant2 = document.querySelector(".right3");
let precedent2 = document.querySelector(".left3");
let suivant3 = document.querySelector(".right4");
let precedent3 = document.querySelector(".left4");
let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;

//fonction section 1
function slideSuivante() {
  item[count].classList.remove("active");
  if (count < nbslide - 1) {
    count++;
  } else {
    count = 0;
  }
  item[count].classList.add("active");
  console.log(item);
}
suivant.addEventListener("click", slideSuivante);

function slidePrecedente() {
  item[count].classList.remove("active");
  if (count > 0) {
    count--;
  } else {
    count = nbslide - 1;
  }
  item[count].classList.add("active");
  console.log(item);
}
precedent.addEventListener("click", slidePrecedente);

//fonction section 2
function slideSuivante1() {
  item1[count1].classList.remove("active");
  if (count1 < nbslide1 - 1) {
    count1++;
  } else {
    count1 = 0;
  }
  item1[count1].classList.add("active");
  console.log(item1);
}
suivant1.addEventListener("click", slideSuivante1);

function slidePrecedente1() {
  item1[count1].classList.remove("active");
  if (count1 > 0) {
    count1--;
  } else {
    count1 = nbslide1 - 1;
  }
  item1[count1].classList.add("active");
  console.log(item1);
}
precedent1.addEventListener("click", slidePrecedente1);

//fonction section 3
function slideSuivante2() {
  item2[count2].classList.remove("active");
  if (count2 < nbslide2 - 1) {
    count2++;
  } else {
    count2 = 0;
  }
  item2[count2].classList.add("active");
  console.log(item2);
}
suivant2.addEventListener("click", slideSuivante2);

function slidePrecedente2() {
  item2[count2].classList.remove("active");
  if (count2 > 0) {
    count2--;
  } else {
    count2 = nbslide2 - 1;
  }
  item2[count2].classList.add("active");
  console.log(item2);
}
precedent2.addEventListener("click", slidePrecedente2);

//fonction section 4
function slideSuivante3() {
  item3[count3].classList.remove("active");
  if (count3 < nbslide3 - 1) {
    count3++;
  } else {
    count3 = 0;
  }
  item3[count3].classList.add("active");
  console.log(item3);
}
suivant3.addEventListener("click", slideSuivante3);

function slidePrecedente3() {
  item3[count3].classList.remove("active");
  if (count3 > 0) {
    count3--;
  } else {
    count3 = nbslide3 - 1;
  }
  item3[count3].classList.add("active");
  console.log(item3);
}
precedent3.addEventListener("click", slidePrecedente3);
