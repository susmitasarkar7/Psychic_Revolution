$(document).ready(function() {
    $(".circle-position").click(function() {
        // All Elements Animation after clicking the current level
        // $("canvas").css("transform", "scale(2.5)").fadeOut(500);
        // $(".circle").fadeOut();
        // $(".level-1-game").css({
        //     "display": "flex",
        //     "align-items": "center",
        //     "justify-content": "center",
        // });
        if($("div.intro-banner-vdo-play-btn.pinkBg").hasClass("intro-banner-vdo-play-btn pinkBg")){
            console.log("foo");

            // Highlighting the next level after completing the current level
            $("div.intro-banner-vdo-play-btn.pinkBg").removeClass("intro-banner-vdo-play-btn pinkBg");
            
            $(this).next().closest('.circle-position').children('.circle').addClass("intro-banner-vdo-play-btn pinkBg").prepend("<span class=\"ripple pinkBg\"></span><span class=\"ripple pinkBg\"></span><span class=\"ripple pinkBg\"></span>");
            console.log("bar");
            

        } else {
            // Initial stage after reloads
            // $("li.ball.bubble").removeClass("ball bubble");
            // $("li:first").addClass("ball bubble");
        }
    });
});


