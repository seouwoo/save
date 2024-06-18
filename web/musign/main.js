//메인메뉴의 움직이는 바
$('.gnb a').mouseenter(function(){
   let bar=$(this).position().left; 
   //position() : 요소의 위치정보(top,left)를 반환한다.
   console.log(bar)
   let widnum=$(this).width();
   //$(".bar").animate({옵션},시간)
   $(".bar").animate({
    'left':bar + "px",
    'width':widnum + "px",
   },200)
})

//애니메이션
$('.animate').scrolla({
    // default
    mobile: false, // disable animation on mobiles
    once: false, // only once animation play on scroll
    animateCssVersion: 4 // used animate.css version (3 or 4)
  });

// menuOpen
let open=$('.menuOpen .open');
let menuWrap= $('.menuWrap');
let close= $('.menuWrap .close');
open.click(function(){
    menuWrap.addClass('on')
})
close.click(function(){
    menuWrap.removeClass('on')
})


//path의 총 길이 구하기
let path=document.querySelector('.path1')
let pathHeight=path.getTotalLength()
//console.log(pathHeight)


//service영역시 배경칼라 바꾸기

//스크롤움직이면 어떤일이 일어난다

$(window).scroll(function(){
    //$(this)-->$(window)
    let scrollTop = $(this).scrollTop();
    //offset().top : 전체문서의 top에서 service영역의 top까지의 거리
    let offset= $('.service').offset().top;
    if(scrollTop>offset){
        $('body').addClass("on")
    }else{
        $('body').removeClass("on")
    }
})