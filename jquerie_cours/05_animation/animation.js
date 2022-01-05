$(function () {
  //------------effet de fondu en jquery------
  //$("#b1").click(function () === $("#b1").on("click", function())

  $("#b1").click(function () {
    $("#h1Fondu").fadeOut(1000);
  });

  $("#b2").click(function () {
    $("#h1Fondu").fadeIn();
  });

  $("#b3").click(function () {
    $("#h1Fondu").fadeToggle();
  });

  $("#b4").click(function () {
    $("#h1Fondu").fadeTo(200, 0.3); //fondu jusqu'a un niveau d'opacité
  });

  //----------- effet de glissment -----------

  $("#b1Slide").click(function () {
    $("#h1Slide").slideUp(1000);
  });

  $("#b2Slide").click(function () {
    $("#h1Slide").slideDown(1000);
  });

  $("#b3Slide").click(function () {
    $("#h1Slide").slideToggle(1000);
  });

  //--------cacher et montrer--------
  //cacher

  $("#b1Hide").click(function () {
    $("#h1HideShow").hide(5000, "linear", function () {
      alert("Titre bien caché");
    });
  });

  //rendre visible
  $("#b2Show").click(function () {
    $("#h1HideShow").show(5000, "linear");
  });

  //-----------basculé /toggle-------------

  $("#b1Toggle").click(function () {
    $("#h1Toggle").toggle(5000, "linear");
  });
  $("#b2Toggle").click(function () {
    $("#h2Toggle").toggle(5000, function () {
      alert("Etat de visibilité a été changer");
    });
  });

  //--------animation--------------

  $("#b1Animate").click(function () {
    $("#h1Animate").animate({ width: "-=20%" }, 1000);
  });

  $("#b2Animate").click(function () {
    $("#h1Animate").animate({ height: "toggle" });
  });

  $("#b3Animate").click(function () {
    $("#h1Animate").animate({ fontSize: "80px" }, 1000);
  });

  $("#b4Animate").click(function () {
    $("#h1Animate").animate();
  });
});
