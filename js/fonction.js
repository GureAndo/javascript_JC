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
console.log(avanceVersLeNord);

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
