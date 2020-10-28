$(document).ready(function(){
    var str = "";

    $(".type").on('keypress', function(e){
        var text = e.key;
        str = str + text;
        $(".text").text(str);
    })
    $(".print").on('click', function(){
        $(".paragraph").text(str);
    })
    $(".fader").on('click', function(){
        $(".paragraph").fadeToggle("slow", "linear");
    })
    $(".animator").on('click', function(){
        $(".paragraph").animate({
            width: "70%",
           opacity: 0.4,
           marginLeft: "0.6in",
           fontSize: "6rem",
        }, "slow").addClass("animation");
    })
    $(".reset").on('click', function(){
        $(".paragraph").animate({
            width: "",
            opacity: 1,
           marginLeft: "",
           fontSize: "4.5rem",
           borderWidth: "",
        }, "slow").removeClass("animation");
    })
})