$(document).ready(function () {
  var str = "";

  $(".type").on("keydown", function (e) {
    var text = e.key;
    var code = e.keyCode;
    var shiftKeyPressed = e.shiftKey;
    var space = " ";

    if (
      (code > 48 && code < 62) ||
      (code > 64 && code < 91) ||
      (code > 185 && code < 193) ||
      (code > 218 && code < 223) ||
      (code > 95 && code < 112)
    )
      str = str + text;
    else if (code == 8) str = str.slice(0, -1);
    else if (code == 32) str = str + space;
    else if (code == 13) $(".paragraph").text(str);

    $(".text").text(str);
  });
  $(".print").on("click", function () {
    $(".paragraph").text(str);
  });
  $(".fader").on("click", function () {
    $(".paragraph").fadeToggle("slow", "linear");
  });
  $(".animator").on("click", function () {
    $(".paragraph")
      .animate(
        {
          width: "70%",
          opacity: 0.4,
          marginLeft: "0.6in",
          fontSize: "6rem"
        },
        "slow"
      )
      .addClass("animation");
  });
  $(".reset").on("click", function () {
    $(".paragraph")
      .animate(
        {
          width: "",
          opacity: 1,
          marginLeft: "",
          fontSize: "1.4rem",
          borderWidth: ""
        },
        "slow"
      )
      .removeClass("animation");
  });
});
