"use strict";
//alert("test"); comantaire1
/**
 * commentaire 2
 * dzad
 */
// kamelCase on commence en minuscule et a chaque nouveaux mots on met un majuscule
//une variable c'est un espace dans lequel on stock des choses c'et une boiteque l'on nomme
var unTexte = "voici un texte"; //ce qui est à  droite donne sa valeur a ce qui est à gauche/
console.log(unTexte);
unTexte = "nouveau texte";
console.log(unTexte);

const TVA = 20 / 100;
console.log(TVA);
const tva2 = 5.5 / 100;
console.log(tva2);
// c'est une constante on ne peut la changer example :
//TVA = 25 / 100;
// TVA =25/100; =>message d'erreur dans la console et stop la lecture du code.

let unChiffre = 24; // on peut changer la valeur de let
unChiffre = 12;
console.log(unChiffre);

let maChaineDeCaracteres = "ho ! le beau variant !"; // on peut untiliser les s'imple ou double quote.
//let echapement = 'je suis l\'autre chaine de caractère"; ici on echappe le caractère grace a "l'anti slash"

//--------la concatenation----------
let number1 = 10;
number1 = 15;
let phraseNumber1 = "le chiffre est : " + number1 + " degrès";
console.log(phraseNumber1);

let phrase3 = ` le chiffre est : ${number1}`; //backtick alt gr + 7 2fois permet d'eviter la concatenation ne pas mettre de balise HTML
console.log(phrase3);
// ------------ les type de variables-------------
let string = "je suis une chaine de caractère";
let number = 24;
let number24 = "24";
console.log(number + parseInt(number24));
let boolean = true; // un boolean est true ou false
let array = ["je", "suis", "Ândo", 24, true, false, [" voiture", 15]]; // un tableau commence a l'index 0 =>premiere valeur du tab
console.log(array);
console.log(array[1]); //donc ici on a appler "suis"
let object = { prenom: "Glen", age: 30, ville: "paris", km: 70 }; // l'objet fonctionne avec des key et des value key:value
console.log(object);
let tabtest = ["un", "deux", [1, 2]];
console.log(tabtest);
console.log(tabtest[0]); //retourne un
console.log(tabtest[2][0]); //retourne 1
console.log(tabtest[0] + tabtest[2][0]); //retourne un1
