let item = document.querySelectorAll(".img");
let p = document.querySelectorAll("p");
let h1 = document.querySelectorAll("h1");
let button = document.querySelectorAll("button");
console.log(item);
console.log(p);
console.log(h1);
console.log(button);
let nbslide = item.length;
console.log(nbslide);
let suivant = document.querySelector(".right");
let precedent = document.querySelector(".left");
let count = 0;

function slideSuivante() {
  item[count].classList.remove("active");
  p[count].classList.remove("active");
  h1[count].classList.remove("active");
  button[count].classList.remove("active");
  if (count < nbslide - 1) {
    count++;
  } else {
    count = 0;
  }
  item[count].classList.add("active");
  p[count].classList.add("active");
  h1[count].classList.add("active");
  button[count].classList.add("active");
  console.log(item);
  console.log(p);
  console.log(h1);
}
suivant.addEventListener("click", slideSuivante);

function slidePrecedente() {
  item[count].classList.remove("active");
  p[count].classList.remove("active");
  h1[count].classList.remove("active");
  button[count].classList.remove("active");
  if (count > 0) {
    count--;
  } else {
    count = nbslide - 1;
  }
  item[count].classList.add("active");
  p[count].classList.add("active");
  h1[count].classList.add("active");
  button[count].classList.add("active");
  console.log(item);
}
precedent.addEventListener("click", slidePrecedente);
