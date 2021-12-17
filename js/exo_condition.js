let jaune = "jaune";
let bleu = "bleu";
let rouge = "rouge";

let couleur = prompt(
  "ecriver une couleur proimaire Rouge, Bleu ,ou Jaune"
).toLowerCase();

switch (couleur) {
  case "jaune":
    console.log("c'est jaune !");
    document.write(couleur + " est bien une couleur primaire");
    break;
  case "rouge":
    console.log("c'est rouge !");
    document.write(couleur + " est bien une couleur primaire");
    break;
  case "bleu":
    console.log("c'est bleu !");
    document.write(couleur + " est bien une couleur primaire");
    break;

  default:
    console.log("connard c'est ni jaune ni rouge ni bleu !!");
    document.write(couleur + " connard c'est ni jaune ni bleu ni rouge");
}

if (couleur == "jaune" || couleur == "bleu" || couleur == "rouge") {
  console.log("c'est bon");
  document.write(couleur + "c'est bon");
} else {
  console.log("connard try again");
  document.write(couleur + " connard try again");
}
