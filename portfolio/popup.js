// 팝업창
$('.popupOpen_hobby').click(function(e){
    e.preventDefault();
   $('.popup_hobby').fadeIn();
});
$('.popup_hobby .close').click(function(e){
    e.preventDefault();
    $('.popup_hobby').fadeOut(200);
});

$('.popupOpen_skill').click(function(e){
    e.preventDefault();
   $('.popup_skill').fadeIn();
});
$('.popup_skill .close').click(function(e){
    e.preventDefault();
    $('.popup_skill').fadeOut(200);
});

$('.popupOpen_personality').click(function(e){
    e.preventDefault();
    $('.popup_personality').fadeIn();
});
$('.popup_personality .close').click(function(e){
    e.preventDefault();
    $('.popup_personality').fadeOut(200);
});