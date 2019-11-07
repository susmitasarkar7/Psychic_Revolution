$(document).ready(function() {
    $(".circle").click(function() {
        // All Elements Animation after clicking the current level
        $("canvas").css("transform", "scale(2.5)").fadeOut(500);
        $(".circle").css("display", "none");
        $(".level-1-game").css({
            "display": "block",
        });
        if($("div.intro-banner-vdo-play-btn.pinkBg").hasClass("intro-banner-vdo-play-btn pinkBg")){

            // Highlighting the next level after completing the current level
            // $("div.intro-banner-vdo-play-btn.pinkBg").removeClass("intro-banner-vdo-play-btn pinkBg");

            // $(this).next().closest('.circle-position').children('.circle').addClass("intro-banner-vdo-play-btn pinkBg").prepend("<span class=\"ripple pinkBg\"></span><span class=\"ripple pinkBg\"></span><span class=\"ripple pinkBg\"></span>");
            

        } else {
            // Initial stage after reloads
            // $("div.intro-banner-vdo-play-btn.pinkBg").removeClass("intro-banner-vdo-play-btn pinkBg");

            // $(this).next().closest('.circle-position').children('.circle').addClass("intro-banner-vdo-play-btn pinkBg").prepend("<span class=\"ripple pinkBg\"></span><span class=\"ripple pinkBg\"></span><span class=\"ripple pinkBg\"></span>");
        }
    });
});



