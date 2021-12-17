//alert("saint Asonia");
"use strict";
let xCondition = 2; //nb
let yCondition = 3; //nb
let WCondition = "2"; //string
let ZCondition = 3; //nb

// tester si xCondition est plus petit que yCondition

if (xCondition < yCondition) {
  console.log(xCondition + " et plus petit que " + yCondition);
} else {
  console.log(xCondition + " n'est pas plus petit que " + yCondition);
}

if (xCondition > yCondition) {
  console.log(xCondition + " et plus grand que " + yCondition);
} else {
  console.log(xCondition + " n'est pas plus grand que " + yCondition);
}
// test si xCondition exsite
if (ZCondition) {
  console.log("ma variable " + ZCondition + " existe");
}
//quand ma variable a comme valeur null la condition est false
let acondition = null;
if (acondition) {
  console.log("ma variable" + acondition + "existe");
}

// teste si xCondition different de 3
if (xCondition != 3) {
  console.log(xCondition + " est differant de 3.");
}

// test d'egalité
if (xCondition == WCondition) {
  console.log("ils egaux mais pas en type une string et un nb"); // le type de var exemple nb, string ect......
}

//test d'egalité strict
if (yCondition === ZCondition) {
  console.log(
    yCondition + " et " + ZCondition + " sont strictement egaux en type"
  );
}

//test si l'une des deux condition est vrais ou fause
if (xCondition == 2 || yCondition == 2) {
  console.log("l'un des deux est vrais");
}
// si les deux sont vrais
if (xCondition === 2 && WCondition == 2) {
  console.log("les deux sont vrais");
}

// on peut faire un if sur une seul lignes'il n'y a qu'une instruction
if (xCondition === 2 && WCondition == 2) console.log("les deux sont vrais");

// une autre facon d'ecrire un if -< les ternaires
//si vrais ? alors instruction : sinon(else)
// ? -> est ce que ma conditionet vrais alors j'execute le code après le ?
// : -> else puis le code que j'execute si la condition n'est pas vrais
xCondition != yCondition
  ? console.log("ils sont differant")
  : console.log("ils sont identique");

//---------------------- le switch----------------------
let fruit = "pomme";
fruit = "poire";
fruit = "cerise";
switch (fruit) {
  case "pomme":
    console.log("c'est une pomme !");
    break;
  case "poire":
    console.log("c'est une poire !");
    break;
  default:
    console.log("ce n'est ni une pomme ni une poire !!");
}
