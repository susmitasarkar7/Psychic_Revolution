$(document).ready(function() {
    $(".circle").click(function() {
        // All Elements Animation after clicking the current level
        $("canvas").css("transform", "scale(2.5)").fadeOut(500);
        $(".circle").fadeOut();
        $(".level-1-game").css({
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
        });
        if($("div.intro-banner-vdo-play-btn").hasClass(".intro-banner-vdo-play-btn")){
            console.log("foo");

            // Highlighting the next level after completing the current level
            // $("li.ball.bubble").removeClass("ball bubble").next().addClass("ball bubble");

        } else {
            // Initial stage after reloads
            // $("li.ball.bubble").removeClass("ball bubble");
            // $("li:first").addClass("ball bubble");
        }
    });
});


