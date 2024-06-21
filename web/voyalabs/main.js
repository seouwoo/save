//cursor
const coords={x:0,y:0};
const circles=document.querySelectorAll(".circle");
const svg=document.querySelector(".cursor img")
let timer;

svg.style.visibility="hidden";

circles.forEach((circle, index)=>{
    //console.log(circle)
    circle.x=0;
    circle.y=0;
})

window.addEventListener("mousemove",function(e){
    coords.x=e.clientX;
    coords.y=e.clientY;

   clearTimeout(timer)

   svg.style.visibility="hidden";
   circles.forEach((circle)=>{
    circle.style.display='block';
})

    

    // timer=setTimeout(function(){},시간)//시간만큼 지나면 할일이 한번 실행됨
    timer=setTimeout(function(){
        circles.forEach((circle)=>{
            circle.style.display='none';
            svg.style.visibility="visible";
            svg.style.display="block"
        })
    },500)
})


function animateCircles(){
    let x=coords.x;
    let y=coords.y;

    circles.forEach((circle,index)=>{
        circle.style.left=x +"px";
        circle.style.top=y +"px";

        circle.x=x;
        circle.y=y;

        let nextCircle=circles[index + 1] || circles [0]
        x += (nextCircle.x - x) *0.1;
        y += (nextCircle.y - y) *0.1;
        console.log(x)
    })

   
    requestAnimationFrame(animateCircles)
}
animateCircles()