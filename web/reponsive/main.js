$('.tit .btn').click(function(e){
    e.preventDefault();
   
    $('.nav').slideToggle();
    $('.tit .btn').toggleClass("open")
   
    if($('.tit .btn').hasClass('open')){
        //A.attr(B)  ==> A요소안에 있는 속성B를 가져와라 
        //A.attr(B,C)  ==> A요소안에 있는 속성B를 C로 바꾸어라 
        //$('.tit .btn').find('i') ==> .btn 자손중에서 i태그를 찾아라 (css에서 띄워쓰는 의미와 유사)
        $('.tit .btn').find('i').attr("class","fas fa-chevron-up")

    }else{
        $('.tit .btn').find('i').attr("class","fas fa-chevron-down")
    }
})


//이미지 슬라이드 col4
$('.slider').slick({
    dots:true,
    autoplay:true
  });
  $('.slider').slick('setPosition');


// lightGallery
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
});

