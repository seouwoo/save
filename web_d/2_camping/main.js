//gnb
$('.gnb').hover(function(){
    //마우스가 진입했을때 할 일
    //$('.subnav').show()
    //$('.subnav').fadeIn()
    $('.subnav').stop().slideDown();

},function(){
    //마우스가 벗어나면 할 일
    //$('.subnav').hide()
    //$('.subnav').fadeOut()
    $('.subnav').stop().slideUp();
})

//banner slide

let num=0;

//setInterval(할일,시간)
//setInterval(function(){},3000)3초마다 할일

/* if(조건문){조건문이 참일때 할일}

if(조건문){
    조건문이 참일때 할일
}else{
    조건문이 거짓일때 할일
}
 */

/* if(조건문A){
    조건문이 참일때 할일
}else if(조건문B){
    조건문A 거짓이고 조건문B가 참일때 할일
}else{
    모든 조건문에 만족 하지 않을때 할일
} */

setInterval(function(){
    if(num<2){
        num++;////1씩 증가
    }else{
        num=0
    }
    let sildePosition=num*(-300)+"px";
    //console.log(sildePosition)
    //$('.main ul').animate({실행문},(시간))
    $('.main ul').animate({
        top:sildePosition
    },(1000))
},3000)


//탭메뉴
//$('.btn li').click(function(){실행문})//.btn li 중 어떤 li라도 클릭하면 어떤 실행문이 실행됨.

$('.btn li').click(function(){
    $('.btn li').removeClass('active')//두개의 li의 class명 active로 모두 지움
    $(this).addClass('active')//클릭한 li에게 class명 active로 추가

    var index= $(this).index();//태어날때부터 부여된 번호 --> index번호
    console.log(index)
    
    $('.bwrap>div').hide()//두개의 div를 모두 지움
    $('.bwrap>div').eq(index).show()

})

//팝업창

$('.popupOpen').click(function(){
    $('.popup').show();
});

$('.close').click(function(){
    $('.popup').hide();
});