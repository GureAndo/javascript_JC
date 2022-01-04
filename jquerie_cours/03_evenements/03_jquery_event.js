// console.log("test");
$(function () {
  // ici mon code jquery

  //---------event mouseover------------

  $(".zone1").on("mouseover", function () {
    // $(this).css("background", "IndianRed");
    $(".zone1").css("background", "IndianRed"); //=== $(this).css("background", "IndianRed");
    $("#info").text("je suis dans la zone 1");
  });

  //-------------envent mousemove-----------

  $(".zone2").on("mousemove", function (event) {
    $(".zone2").text("pageX: " + event.pageX + ", pageY" + event.pageY);
    $("#info").text("je suis dans la zone 2");
  });

  //-------------envent mouseout-----------

  $(".zone3").on("mouseout", function () {
    $(".zone3").css("background", "IndianRed");
    $("#info").text("je suis dans la zone 3");
  });

  //-------------envent enter et leave-----------

  $(".zone4").on("mouseenter", function () {
    $(".zone4").css("background", "IndianRed");
    $("#info").text("je suis dans la zone 4");
  });

  $(".zone4").on("mouseleave", function () {
    $(".zone4").css("background", "khaki");
    $("#info").text("je suis dans la zone 4");
  });

  //-------------event mouseup et mousdown-----------

  $(".zone5").on("mouseup", function () {
    //au relachement bu bouton de la sourie
    $(".zone5").css("background", "IndianRed");
    $("#info").text("je suis dans la zone 5");
  });

  $(".zone6").on("mousedown", function () {
    //lorsque le bouton est enfoncé
    $(".zone6").css("background", "khaki");
    $("#info").text("je suis dans la zone 6");
  });

  //-------------event clic-----------

  $(".zone7").on("click", function () {
    $(".zone7").css("background", "IndianRed");
    $("#info").text("je suis dans la zone 7");
  });

  //-------------event DBLclic-----------

  $(".zone8").on("dblclick", function () {
    $(".zone8").css("background", "IndianRed");
    $("#info").text("je suis dans la zone 8");
  });

  //-------------event click droit-----------

  $(".zone9").contextmenu(function () {
    $(".zone9").css("background", "IndianRed");
    $("#info").text("je suis dans la zone 9");
  });

  //-------------event blur-----------
  // lorsque que nous allon clické aileurs apres avoir clické sur l'element
  $(".zone10").on("blur", function () {
    $(".zone10").css("background", "IndianRed");
    $("#info").text("je suis dans la zone 10");
  });

  // ----------------event change---------
  //lorsque que nous allons changer l'option d'un element select
  $(".zone11").on("change", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dans la zone 11");
  });

  //------------event keydown
  //lorsque que l'on enfonce une touche
  $(".zone12").on("keydown", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dans la zone 12");
  });

  //---------------envent keyup
  // lorsque que l'on relache une touche
  $(".zone12").on("keyup", function () {
    $(this).css("background", "HotPink");
    $("#info").text("je suis dans la zone 12");
  });

  // -----------------------event au Scroll-------------------

  $(window).on("scroll", function () {
    $("#info").css("background", "LightGreen");
    $("#info").text("je suis une merde");
  });
});
