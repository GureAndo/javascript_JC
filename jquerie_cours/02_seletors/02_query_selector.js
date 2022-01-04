// console.log("ici");
// $(document).ready(function(){})
// une facon d'ecrire la fonction d'attente de chargement de la page
$(function () {
  //-------------------- selection balise --------------

  // ici mon code jquery
  //$ permet d'attraper in élément
  let maBaliseSpan = $("span"); // je selectionne l'élément span
  console.log(maBaliseSpan);
  $(maBaliseSpan).css("color", "purple"); // changement de la propriété css
  maBaliseSpan.css("background", "lightBlue");

  //----------------------selection par l'id ---------------
  let monID = $("#masection"); //je selectionne l'élément #masection
  console.log(monID);
  $(monID).css("color", "red"); //changement de la proprièté css

  //--------------------- selection class---------------------
  let maClass = $(".voiture"); //je selectionne l'élément .voiture
  console.log(maClass);
  $(maClass).css("color", "blue");
  $(maClass).first().css("color", "green"); // je selectionne le 1er element .voiture
  $(maClass).last().css("color", "lightblue"); // je selectionne le dernier element .voiture
  $(maClass).eq(2).css("color", "purple"); // je selectionne le 3eme index 2 dans la console

  //---------------------- selection multiple --------------------
  let mesElement = $("h1, article, aside");
  console.log(mesElement);
  $(mesElement).css("color", "orange");

  //-----------seclection des parents ou des ancetre---------------
  $("li").parent().css("border", " 2px solid red"); // on selectione le parent direct du li
  $("li").parents("div").css("border", "2px dashed red"); // on selectionne les ancetre div du li

  //--------------selectionner les enfants ou decendant---------------------
  $(".conteneur").children().css("font-weight", "700"); // on selectionne tout les enfantdu conteneur
  $(".conteneur").children("#enfants").css("color", "red");
  $(".conteneur").find(".find").css("border", "2px dashed purple");

  //---------------selection des element frere--------------------
  $("li:first-child").siblings().css("text-align", "right");

  // -------- RESUME DES PRINCIPAUX SELECTEURS
  /*
      	selection de balise : $('span')
      	selection d'un #id : $('#id')
      	selection d'une classe .class : $('.classe')
      	selection d'un élément par lui-même : $(this)
      	selection d'un élément par sa balise et son type : $('input:text')
      	selection d'un élément par son type (tous les types radio) : $(':radio')
      	selection d'un élément par son attribut : $('img[alt]')
      	selection d'un élément par son attribut (tous les attributs) : $('[alt]')
      	selection d'un élément par le nom de l’attribut ET sa valeur : $("img[title='paris']")
      	sélectionner plusieurs sélecteurs en même temps : $("h1, p, #id")
      */
});
