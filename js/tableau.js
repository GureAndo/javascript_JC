"use strict";
// je crée un tableau de couleur
let tabColor = ["rouge", "vert", "bleu", null];
console.log(tabColor[0]);
//connaitre la taille d'un tableau
console.log(tabColor.length);
//pour entrer une nouvelle valeur dans un tableau
tabColor.push("violet");
console.log(tabColor);
// supprimer le dernier element d'un tableau
tabColor.pop();
console.log(tabColor);
//supprimer le 1er element d'un tab
tabColor.shift();
console.log(tabColor);
//ajouter au debut d'un tab
tabColor.unshift("orange");
console.log(tabColor);
//pour trouver l'index d'un element d'un tab
tabColor.indexOf("bleu");
console.log(tabColor.indexOf("bleu"));
//choisir quel element supprimer grace a son index
tabColor.splice(3);
console.log(tabColor);
