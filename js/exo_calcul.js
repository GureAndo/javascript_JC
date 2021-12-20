"use strict";

/** ------------------------ CALCULATRICE-------------------------------------
 *
 *
 * faire les fonction pour l'addition soustraction division et multiplication
 * stocké l'information dans une variable
 *
 *
 *
 * */
// 1- faire une fonction pour l'addition x + y
// 2- si on rajoute un chiffre on continue le calcul
// 3- faire une variable de stockage
// 4- optimiser la fonction addition juste x
// 5-faire les autre fonctions attention a la division par 0
// 6- on test la calculatrice dans le console.log

//la variable pour garder le resultat
//let x = prompt("saisiser le 1er chiffre");
//let calc = prompt("saisiser l'un des symbole  + , -, / ou *");
//let y = prompt("saisiser le 2eme chiffre");
//x = parseInt(x);
//y = parseInt(y);

/*function calcularice(x, y) {
  //let a = 2; //prompt("ecriver le 1er chiffre du calcul");
  //let b = 1; //prompt("ecriver le 2eme chiffre du calcul");
  return x + y;
}
console.log(calcularice(x, y));

function calcularice1(x, y) {
  //let a = 2; //prompt("ecriver le 1er chiffre du calcul");
  //let b = 1; //prompt("ecriver le 2eme chiffre du calcul");
  return x - y;
}
console.log(calcularice1(x, y));

function calcularice2(x, y) {
  //let a = 2; //prompt("ecriver le 1er chiffre du calcul");
  //let b = 1; //prompt("ecriver le 2eme chiffre du calcul");
  return x * y;
}
console.log(calcularice2(x, y));

function calcularice3(x, y) {
  //let a = 2; //prompt("ecriver le 1er chiffre du calcul");
  //let b = 1; //prompt("ecriver le 2eme chiffre du calcul");
  if (y == 0) {
    y = parseInt(prompt("on ne peut pas diviser pas zero retape un chiffre"));
  }
  return x / y;
}
console.log(calcularice3(x, y));

if (calc == "+") {
  console.log(calcularice(x, y));
} else if (calc == "-") {
  console.log(calcularice1(x, y));
} else if (calc == "*") {
  console.log(calcularice2(x, y));
} else if (calc == "/") {
  console.log(calcularice3(x, y));
} else {
  console.log("ecriver les chiffre et les symbole correctement");
}*/
/*----------------------------------------------------------------------*/

function addition(a, b) {
  //let a = 15;
  //let b = 3;
  let add = a + b;
  console.log(add);
}
// addition(argument a = 20 , argument b = 5)
addition(20, 5);

function soustraction(a, b) {
  //let a = 15;
  //let b = 3;
  let add = a - b;
  console.log(add);
}
soustraction(20, 5);

function multiplication(a, b) {
  //let a = 15;
  //let b = 3;
  let add = a * b;
  console.log(add);
}
multiplication(20, 5);

function division(a, b) {
  //let a = 15;
  //let b = 3;
  if (b == 0) {
    console.log(a);
  } else {
    let add = a / b;
    console.log(add);
  }
}
division(15, 0);
//variable pour stocker notre resultat
let result = 0;

function additionCalc(x) {
  result += x;
  // ma fonction va retourner le nouveau resultat
  return result;
}

additionCalc(2);
console.log(result);
additionCalc(8);
console.log(result);

function divisionCalc(x) {
  if (x === 0) {
    return result;
  } else {
    result /= x;
    return result;
  }
}

function multiplicationCalc(x) {
  result *= x;
  return result;
}

function rest() {
  result = 0;
  return result;
}

//rest();

divisionCalc(0);
console.log(result);

multiplicationCalc(2);
console.log(result);
// compliquer tout sa mais je crois avoir un peut compris
