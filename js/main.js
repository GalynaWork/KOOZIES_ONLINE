$(document).ready(function(){
    $('#mob_menu').click(function(){
        $(this).toggleClass('open');
        $(".header_menu nav").toggleClass('open');
    });
    $('.carousel').carousel({

    });
    $('#second_col').click(function(){
        $(".second_color").toggleClass('open');

    });
    $('.close').click(function(){
        $(".second_color").removeClass('open');

    });
    $('#imprint').click(function(){

        $(".imprint_colors").toggleClass('open');

    });
    $('#first_colors').click(function(){

        $(".colors").toggleClass('open');

    });
});