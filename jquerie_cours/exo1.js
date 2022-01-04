$(".zone1").on("click", function () {
  $("h1").css("background", "green");
  $("h1").css("text-align", "center");
  $("h1").css("font-size", "80px");
});

$(".zone2").on("click", function () {
  $("body").css("background", "blue");
});

$(".zone3").on("click", function (event) {
  event.preventDefault();
  $("body").css("background", "green");
});

$(".zone8").on("click", function () {
  $(".zone8").css("background", "yellow");
});
