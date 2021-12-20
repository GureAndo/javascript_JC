"use strict";

//---------------------------boucle while------------------------
// je cree un compteur
let count = 5;
//le debut du décompte
let i = 0;
while (i < 6) {
  document.write("le compte de la boucle while est de :" + i + " /5 <br>");
  i++;
}

let k = 0;

while (k <= count) {
  document.write("<br>le compte de la boucle while est de :" + k + " /5 <br>");
  k++;
}

// do while ->elle fait au moin une fois une tour de boucle
let j = 0;

do {
  j = j + 1;
  document.write("<br> le compte de la boucle est de " + j + " /5");
} while (j <= 0);

//-----------------------------les boucle For---------------------------
let tabPersonages = ["mage", "voleur", "rodeur", "guerrier"];
// nous donne la taille du tableau
let tailleTabPerso = tabPersonages.length;

for (let l = 0; l < tailleTabPerso; l++) {
  document.write("<br>Le " + tabPersonages[l] + " attaque <br>");
  if (l === 3) {
    document.write("<br> attque ulime");
  }
}

//------------------------------for in-------------------
// pour utiliser les parametre des objets
let obj = { a: 1, b: 2, c: 3 };

for (let propriete in obj) {
  document.write(`<br> la key : ${propriete} -> valeur : ${obj[propriete]}`);
  //document.write("<br> la key : " + propriete + "-> valeur : " obj[propriete]);
}
