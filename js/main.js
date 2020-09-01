$(function(){
    $(".para").click(function() {
        $('html, body').animate({
            scrollTop: $("#box-masterclass").offset().top
        }, 2000);
    });

    $(".como").click(function() {
        $('html, body').animate({
            scrollTop: $("#porque").offset().top
        }, 2000);
    });

    $(".facilitador").click(function() {
        $('html, body').animate({
            scrollTop: $("#box-facilitador").offset().top
        }, 2000);
    });
    
    $(".inscreva").click(function() {
        $('html, body').animate({
            scrollTop: $("#box-rosa").offset().top
        }, 2000);
    });
})