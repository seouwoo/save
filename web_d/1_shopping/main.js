//find()  ==> css에서 (.aa .bb) 띄어쓰기와 비슷함.

$('.gnb>ul>li').hover(
    function(){
        //마우스를 올렸을때 할일
        //console.log($(this))
        $(this).find('.subemenu').stop().slideDown();
    },function(){
        //마우스가 떠나면 할 일
        $(this).find('.subemenu').stop().slideUp();
    }

)


//탭메뉴
//.parent() 부모요소
//.removeclass ("class명") => class 이름 지우기
//$('.btn li').click(어떤일) --> 클래스명 btn의 자손중 li 태그를 클릭하면 어떤 일이 일어난다.

//어떤일은 함수 --> function(){} 
//function(){ 
//  실행문(어떤일)
// }


//$(this)--> 사용자가 클릭한 li
//.index() --> 태어날때 부터 가지고 있는 번호를 추출(index 번호)

$('.btn li').click(function(){
    $('.btn li').removeClass('active');
    $(this).addClass('active')

    //console.log($(this).index())

    //let index = 3; // =은 같다는 의미가 아닌 우측값을 좌측값에 넣어라는 명령어
    // let --> 변수를 선언하는 방법 (index 라는 변수가 생겼다!)

    //console.log(index + 4)//7
    //index = index + 10
    //console.log(index)

    let index = $(this).index()
    console.log(index)

    // .hide() --> disoley:none
    // .show --> disoley:block
    // .eq (indax번호)
    $('.bwrap>div').hide();
    $('.bwrap>div').eq(index).show();

})




//setInterval(어떤일,3000) //3초마다 어떤일이 실행
//setInterval(function(){어떤일},3000) //3초마다 어떤일이 실행

//if(조건문){조건문이 참일때 실행되는 실행문}

//if (조건문){
//    조건문이 참일때 실행되는 실행문
//}else{
//    조건문이 거짓일때 실행되는 실행문
// }
//

let num = 0;

setInterval(function(){
    if(num<2){
    num++; //1씩 증가
    }else{
        num=0;
    }
    let sildePosition=num * (-1200) + "px";
    console.log(sildePosition)

    //$('.main ul').animate({실행문},시간)
    $('.main ul').animate({
        left:sildePosition
    },1000)
},3000)


// 팝업창

$('.popupOpen').click(function(e){
    e.preventDefault();
    //$('.popup').show();
    $('.popup').fadeIn();
});

$('.popup .close').click(function(e){
    e.preventDefault();
    //$('.popup').hide();
    $('.popup').fadeOut(200);
})