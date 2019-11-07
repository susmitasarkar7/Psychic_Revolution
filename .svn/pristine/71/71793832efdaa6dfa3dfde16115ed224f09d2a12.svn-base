$(document).ready(function() {
    $(".next").click(function() {
        if($("li.ball.bubble").hasClass("ball bubble")){
            $("li.ball.bubble").removeClass("ball bubble").next().addClass("ball bubble");
            // $(this).next().addClass("ball bubble");
        } else {
            $("li.ball.bubble").removeClass("ball bubble");
            $("li:first").addClass("ball bubble");
        }
    });
    var $currDiv = $( "#start" );
    $currDiv .css( "background-color", "red" );
    $( "button" ).click(function() {
        $currDiv  = $currDiv .next();
        $( "div" ).css( "background-color", "" );
        $currDiv .css( "background-color", "red" );
    });
});

