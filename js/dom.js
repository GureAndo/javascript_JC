"use strict";
/*
le dom => signifie document object Model
c'est une interface de programation qui est un representation du HTML
(de la page web). Grace au DOM on peut injecter deu txt, des img,
des block entier d'HTML
*/

// selection en fonction du nom de balise 'tag = balise'
let selectBody = document.getElementsByTagName("body");
console.log(selectBody); //dans la console c'est un HTMLCollection =>tableau
selectBody[0].style.background = "lightBlue";

let selectBtn = document.getElementsByTagName("button");
console.log(selectBtn);
selectBtn[0].style.fontWeight = "700"; //le premier bouton font weight = txt gras
selectBtn[1].style.fontWeight = "700"; //le 2eme bouton

let tailleSelectBtn = selectBtn.length;
console.log(tailleSelectBtn);
for (let i = 0; i < tailleSelectBtn; i++) {
  selectBtn[i].style.background = "orange";
}

// selection en fonction de leur class
let selectClassBox = document.getElementsByClassName("box");
console.log(selectClassBox);
selectClassBox[0].style.borderRadius = "15px";

//selection par l'ID
//pour l'example :
//let TagH1 = document.getElementsByTagName("h1");
//console.log(TagH1);
let selectH1Id = document.getElementById("selectH1");
console.log(selectH1Id);
selectH1Id.style.visibility = "visible";

//querieSelector (quand on veut selectionner un seul element)
let gameNoticeTitre = document.querySelector("#gameNoticeTitre");
console.log(gameNoticeTitre.textContent);
//gameNoticeTitre.textContent = "Regle";
gameNoticeTitre.style.textTransform = "uppercase";

//querieSelectorAll => (quand on veut selectionner plusieurs elements)
let firstCaracPara = document.querySelectorAll(".firstCaracPara");
console.log(firstCaracPara);

//j'utilise comme compteur
for (let j = 0; j < firstCaracPara.length; j++) {
  firstCaracPara[j].style.color = "#3333";
  firstCaracPara[j].style.fontSize = "2rem";
}
