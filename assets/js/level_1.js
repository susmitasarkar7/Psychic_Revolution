$(document).ready(function() {
    $(".circle").click(function() {
        if($("div.ball.bubble").hasClass("ball bubble")){
            // All Elements Animation after clicking the current level
            $("canvas").css("transform", "scale(1.5)").fadeOut(500);
            $(".circle").fadeOut();
            $("canvas").css("transform", "scale(1.2)").fadeIn();
            $(".level-1-game").css({
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
            });

            // Highlighting the next level after completing the current level
            // $("li.ball.bubble").removeClass("ball bubble").next().addClass("ball bubble");

        } else {
            // Initial stage after reloads
            $("li.ball.bubble").removeClass("ball bubble");
            $("li:first").addClass("ball bubble");
        }
    });
});


