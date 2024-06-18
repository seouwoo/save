 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)


    //이미지 애니
    let items = document.querySelectorAll(".anime-list li");
    items.forEach(function (el) {
        gsap.set(".hover-img", {
            xPercent: -50,
            yPercent: -50
        })
        let image = el.querySelector(".hover-img")
        let innerImage = el.querySelector(".hover-img img");
        let pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
        let mouse = {
            x: pos.x
        }
        let speed = 0.1;
        let xSet = gsap.quickSetter(image, "x", "px") //

        window.addEventListener("mousemove", function (e) {
            //console.log(e.x)
            mouse.x = e.x;
        })

        gsap.ticker.add(function () { //requestAnimationFrame()
            console.log(gsap.ticker.deltaRatio())
            let dt=1.0 - Math.pow((1.0 - speed),3,gsap.ticker.deltaRatio())
            pos.x += (mouse.x - pos.x) * dt
            xSet(pos.x) * dt
        })

        let direction = "",
            oldx = 0,
            lastCursorX = null,
            cursorThreshold = 150;

        let mousemovemethod = function (e) {
            if(e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold){
                direction='left'
                lastCursorX=e.clientX;
                innerImage.style.transform='rotate(-15deg)'
            }else if(e.pageX > oldx && e.clientX >= lastCursorX + cursorThreshold){
                direction='right'
                lastCursorX=e.clientX;
                innerImage.style.transform='rotate(15deg)'
            }
            oldx=e.pageX;
        }

        let mouseMoveTimer;//마우스가 멈출때를 감지하는 변수
        
        document.addEventListener('mousemove',function(){
            // setTimeout(할일(함수),시간 )//시간뒤에 함수 실행
            // setTimeout을 멈추고 싶을때 => 변수에 할당
            // 변수= setTimeout(할일(함수),시간 )
            // clearTimeout(변수)==>멈추는 명령

            clearTimeout(mouseMoveTimer)//기존 타이머를 지움
            mouseMoveTimer=setTimeout(function(){
                innerImage.style.transform='translateX(0%) rotate(0deg)'
            },100)
        })


        document.addEventListener("mousemove", mousemovemethod)


    })









    //gsap.quickSetter 호출: gsap.quickSetter 메서드를 호출하여 특정 DOM 요소의 특정 CSS 속성을 신속하게 설정할 수 있는 함수를 만듭니다.
    //quickSetter(image,"x","px")  image변수의 x값을 (단위는 px) 신속하게 설정
    //xSet(100)을 호출하면 image 요소의 수평 위치가 100 픽셀로 설정됩니다


    // function ani(){
    // 	console.log("애니메이션")
    // 	requestAnimationFrame(ani)//setInterval의 진화된 버전
    // }
    // ani()

    //  gsap.ticker.add()
    // 애니메이션 프레임마다 특정 요소의 속성을 업데이트하거나, 사용자 인터랙션을 실시간으로 처리하는 등의 다양한 활용이 가능합니다.
    // 🍇🍇🍇  gsap.ticker.deltaRatio()에 대해
    //GSAP (GreenSock Animation Platform)는 자바스크립트를 사용하여 웹 애니메이션을 만들기 위한 도구입니다. GSAP의 ticker는 애니메이션의 프레임 업데이트를 관리하는 메커니즘입니다. gsap.ticker.deltaRatio()는 프레임 간의 시간 변화를 비율로 반환하는 함수입니다. 이를 통해 애니메이션이 프레임 속도에 관계없이 일정하게 작동하도록 할 수 있습니다.

    // 쉽게 말해, deltaRatio()는 이전 프레임과 현재 프레임 사이의 시간 차이를 기준으로 값을 반환합니다. 이 값은 보통 1에 가까운데, 이것은 정상적인 프레임 속도(예: 60fps)에서의 값입니다. 만약 프레임 속도가 떨어지거나 증가하면, 이 값은 1보다 크거나 작아집니다. 이를 활용하여 애니메이션 속도를 프레임 속도에 맞춰 자동으로 조절할 수 있습니다.

    // 예를 들어, 애니메이션을 실행하는 동안 컴퓨터가 느려져서 프레임 속도가 떨어지면, deltaRatio()는 1보다 큰 값을 반환합니다. 이를 이용해 애니메이션의 움직임을 조정하여 일관된 시각적 효과를 유지할 수 있습니다.


   //Mouse cursor
     gsap.set(".ball",{xPercent:-50, yPercent:-50})
     let ball=document.querySelector(".ball");
     let pos={x:window.innerWidth/2,
            y:window.innerHeight/2}
     let mouse={x:pos.x,y:pos.y};
     let speed=0.08;
     
     let xSet=gsap.quickSetter(ball,"x","px");
     let ySet=gsap.quickSetter(ball,"y","px");

     window.addEventListener("mousemove",function(e){
        console.log(e)
        mouse.x=e.x;
        mouse.y=e.y;

     })

    gsap.ticker.add(function(){
        let dt=1.0 - Math.pow((1.0 - speed),gsap.ticker.deltaRatio())
        pos.x +=(mouse.x - pos.x)* dt;
        pos.y +=(mouse.y - pos.y)* dt;
        xSet(pos.x)
        ySet(pos.y)
    })
    //글자 애니
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
    let interval = null;
    let list = document.querySelectorAll(".anime-list li")
    //console.log(list) [item,item,item....12]
    list.forEach(function (el) {
        //el.onmouseenter=function(){}
        //el.addEventListener("mouseenter",function(){})
        el.addEventListener("mouseenter", function (event) {
            let target_element = event.target.querySelector("h2")
            let iteration = 0;
            //setInterval(할일,시간)//시간마다할일
            //setInterval를 멈추고 싶다면  setInterval를 변수에 할당
            //let interval=setInterval(할일,시간)
            //멈출때 clearInterval(변수)//clearInterval(interval)

            //console.log(target_element.innerText)
            //target_element.innerText="메롱";
            //console.log(target_element.dataset.value[0])
            // .map(function(item,index){//map함수른 배열안에 요소를 하나씩 불러서 할일 //새로운 배열을 만든다//item은 요소를 하나씩 받음//index는 그 요소의 index번호
            // 	return
            // })

            //console.log(Math.random())//0이상 1미만 사이의 부동소수점의 숫자
            let interval = setInterval(function () {
                target_element.innerText = target_element.innerText
                    .split("") //배열이 만들어짐
                    .map(function (letter, index) { //위의 배열의 각각의item의 할일
                        if (index < iteration) {
                            return target_element.dataset.value[index]
                        }
                        return letters[Math.floor(Math.random() * 26)]
                    })
                    .join(""); //글자화
                //console.log(target_element.innerText.split(""))


                if (iteration >= target_element.dataset.value.length) {
                    clearInterval(interval)
                }

                iteration += 1 / 3; //iteration = iteration + 1/3
            }, 20)

        })
    })
});