//alert("arigato");
"use strict";
// on déclare une fonction avec le function
function avanceVersLeNord() {
  //ici on met le code
  console.log("je pars vert le nord");
  console.log("je fait 10km");
}
//on fait appel a la fonction
avanceVersLeNord();
avanceVersLeNord();
avanceVersLeNord();
console.log(avanceVersLeNord());

//fonction nom (argument)
//on peut mettre plusieur arguments dans nos fonctions
function avanceVersOuest(distanceDeMarche, gourde) {
  console.log("je pars vert le ouest");
  console.log("je fait " + distanceDeMarche + " km");
  console.log("je bois du" + gourde + " dans ma gourde");
}

avanceVersOuest(19, " thé et du lait");
avanceVersOuest(79, " thé et du lait");
let contenu = " coca";
avanceVersOuest(79, contenu);

// une fonction qui se joue toute seul
// une fonction anonyme
(function () {
  console.log("je me joue toute seule");
})();

// function anonyme fléché
(() => {
  console.log("je me joue aussi toute seule");
})();

//les variables et les portées
function add2() {
  let g = 4;
  let a = 2;
  return g + 2;
}

console.log("ma function retourne : " + add2());
// a n'existe pas à l'exterieure de la function
console.log(a);
