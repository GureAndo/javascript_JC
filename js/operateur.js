//alert("erreur404");
"use strict";

//affectation apres addition
let a = 10;
let b = 5;
let addition = b + a;
console.log(addition);
a = a + b; // a = 15
console.log(a);
a += b; // 15 +5 = 20  donc a = 20
console.log(a);

//affectation apres soustraction

a -= b; // = 15
console.log(" a et egale à : " + a);

//affectation apres multiplication
let multiplication = a * b; // 15 * 5 = 75
console.log(multiplication);
a *= b;
console.log(a); // =75

//affectation apres division
let division = a / b; // 75/5 = 15
console.log(division); //=15
a /= b;
console.log(a); //=15

//affectation du reste = modulo %
let c = 3;
let d = 10;
let e = 9;
let reste = d % c; // 10 % 3 = 1
console.log(reste); // il reste 1
let reste2 = e % c; // il reste 0
console.log(reste2);

// affectation  apres puissance
let puissance = d ** c; // d=10 puissance 3
console.log("le resultat de 10 puissance 3 et de : " + puissance);

//incrementation
let total = 10;
total++; // 11 soit rajoute +1
console.log(total);

// decrementation
total--; // 10 soit on enleve -1
console.log(total);
