let currnentCookie = document.cookie; //쿠키를 가져오는 방법
let cookieCheck = currnentCookie.indexOf('green') //

let noticeElement = document.querySelector('.notice');
let checkboxElement = document.querySelector('#cb');

let closeBtn=document.querySelector('.close')

if (cookieCheck > -1) {
    noticeElement.style.display = 'none'
}else{
    noticeElement.style.display = 'block'
}


checkboxElement.addEventListener('change', function () {
    console.log('수정')
    let date = new Date();
    date.setDate(date.getDate() + 7)


    if (checkboxElement.checked) { //input에 check가 되었다면
        //쿠키생성하기

        let setCookie = "";
        setCookie += "green=true; ";
        setCookie += "expies=" + date.toUTCString();
        console.log(setCookie)

        //쿠키저장하기

        document.cookie = setCookie
    }
})



closeBtn.addEventListener('click',function(){
    noticeElement.style.display= 'none'
})