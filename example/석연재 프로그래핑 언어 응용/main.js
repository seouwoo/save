$(document).ready(function(){
    $('.submanu').mouseover(function(){
        $(this).find('li').stop().slideDown();
    })
    $('.submanu').mouseout(function(){
        $(this).find('li').stop().slideUp();
    })


    $('.main-slick').slick({
        //autoplay:true
    });
  });