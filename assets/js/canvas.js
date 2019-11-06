$(document).ready(function() {
    $(".circle").click(function() {
        if($("li.ball.bubble").hasClass("ball bubble")){
            // All Elements Animation after clicking the current level
            // $("canvas").css("transform", "scale(1.5)").fadeOut();
            // $("ul li.circle").css("transform", "scale(1.5)").fadeOut();

            // Highlighting the next level after completing the current level
            $("li.ball.bubble").removeClass("ball bubble").next().addClass("ball bubble");

            // $("li.ball.bubble").css({
            //     position: 'absolute',
            //     top: '12px',
            //     left: '120px'
            // });

        } else {
            // Initial stage after reloads
            $("li.ball.bubble").removeClass("ball bubble");
            $("li:first").addClass("ball bubble");
            // $(".circle:nth-chils(2)").css({
            //     position: 'absolute',
            //     top: '50%',
            //     left: '50%',
            //     transform: 'translate(101%, -40%)',
            // });

        }
    });
});


