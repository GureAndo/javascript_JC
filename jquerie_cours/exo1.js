$(".zone1").on("click", function () {
  // $("h1").css("color", "green");
  // $("h1").css("text-align", "center");
  // $("h1").css("font-size", "80px");
  $("h1").css({ textAlign: "center", fontSize: "80px", color: "green" });
});

$(".zone2").on("click", function () {
  $("body").css("background", "lightblue");
});

$(".zone3").on("click", function (event) {
  event.preventDefault();
  $("body").css("background", "green");
});

$(".zone5").on("click", function (e) {
  e.preventDefault();
  let color = $(".zone4").val();
  console.log(color);
  $("body").css("background", color);
});

// $(".zone4").on("change", function () {
//   let color = $(".zone4").val();
//   $("body").css("background", "color");
// });

$(".zone7").on("click", function (event) {
  event.preventDefault();
  let zone6 = $(".zone6").find("option:selected").text();
  console.log(zone6);
  $("body").css("background", zone6);
});

$(".zone8").on("click", function () {
  $(".zone8").css("background", "yellow");
});

$(".zone9").on("click", function () {
  $(".zone9").css("background", "yellow");
  $(this).css("background", "green");
});
