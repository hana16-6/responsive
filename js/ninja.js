$(document).ready(function (){
    $('header nav li a').click(function (e) {
        e.preventDefault();
        $('header nav a').removeClass('current');
        $(this).addClass('current');
     //$(this).addClass('current').parent().siblings().find('a').removeClass('current');
    });


    $("#burger-nav i").on("click",function() {
     $("header nav ul ").toggleClass("open");
     $(this).toggleClass('fa-times');
    });


});