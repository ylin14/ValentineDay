$(document).ready(function() {
    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top:"-90px"
        },"slow")
    }).mouseleave(function(){
        $(".card").stop().animate({
            top: 0
        }, "slow")
    });
});

$(document).ready(function() {
    $(".container").touchstart(function(){
        $(".card").stop().animate({
            top:"-90px"
        },"slow")
    }).touchend(function(){
        $(".card").stop().animate({
            top: 0
        }, "slow")
    });
});