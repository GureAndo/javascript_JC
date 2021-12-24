let n = 5; //nombre final du compteur
let cpt = 1; //debut du compteur
// let duree = 3; //durée en seconde
// let delta = Math.ceil((duree * 1000) / n); //calcul intervalle de temps entre chaque rafraichissement
const title = document.getElementById("title");

function changeTitle() {
  cpt = ++cpt;

  if (cpt <= n) {
    console.log(cpt);
    // if count > 5 count = 0
    // for (count; count < 5; count++) {
    // 	console.log(count);
    // }
    switch (cpt) {
      // salut
      case 1:
        title.innerHTML = "Salut!";
        break;
      // je suis designer web
      case 2:
        title.innerHTML = "je suis designer web";
        break;
      // je sais concevoir
      case 3:
        title.innerHTML = "je sais concevoir";
        break;
      // et développer
      case 4:
        title.innerHTML = "et développer";
        break;
      // des sites web !
      case 5:
        title.innerHTML = "des sites web !";
        cpt = 0;
        break;
    }
  }
  // setInterval(changeTitle, delta);
}

setInterval(changeTitle, 3000);
// ************************************************************************

// keyframes dans le css qui gèrent la fluidité de l'animation.
// Il suffit de faire une série de condition pour chaque cas et de remplacer le texte dans le HTML,
// on peut le faire avec switch mais aussi avec une variable
// compteur qu'on incrémente et des if/else if/else. Plutôt que innerHTML,
// vous pouvez utiliser innerText pour modifier le texte.
