//setInterval(함수,시간-3초)//3초마다 함수가 실행
setInterval(()=>{},1000)//1초마다 할 일


setInterval(()=>{//날짜 뽑아오기
    let today=new Date();
    let dayList=['sunday','monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    let hh=addZero(today.getHours())
    let mm=addZero(today.getMinutes())
    let ss=addZero(today.getSeconds())

    let MM=addZero(today.getMonth()+1)//0~11 
    let DD=today.getDate()
    let YY=today.getFullYear()
    let dd=dayList[today.getDay()].toUpperCase();//0~6
    //toUpperCase();대문자로 변환

    
    document.querySelector('#hours').innerHTML=hh;
    document.querySelector('#min').innerHTML=mm;
    document.querySelector('#sec').innerHTML=ss;
    document.querySelector('#month').innerHTML=MM;
    document.querySelector('#date').innerHTML=DD;
    document.querySelector('#year').innerHTML=YY;
    document.querySelector('#day').innerHTML=dd;
    
    function addZero(num){
        return(num<10?'0'+num:num)//0:0나오는거
    }
},1000)
