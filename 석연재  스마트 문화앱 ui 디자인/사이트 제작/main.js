gsap.registerPlugin(ScrollTrigger)

function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        //console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
lenis();

/////////////////////////////////

$(document).ready(function(){
    $('.silde').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
        fade:true,
        arrows:false
    });
  });


$('.header .gnb>ul>li ').hover(
    function(){
        //마우스를 올렸을때 할일
        console.log($(this))
        $(this).find('.submenu').stop().slideDown();
    },
)

$('.header .gnb>ul>li').mouseleave(
    function(){
        //마우스를 올렸을때 할일
        $(this).find('.submenu').stop().slideUp();
    },
)
//////////////////////////////////
import {
    Application
} from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

app
.load('https://prod.spline.design/yh9g17IaUbUBdMNR/scene.splinecode')
.then(()=>{         
    //로드가 성공했다면 할일

    let burguer=app.findObjectByName('burguer');
    console.log(burguer)


    gsap.set(burguer.scale,{x:0,y:0,z:0})
    gsap.set(burguer.position,{x:0,y:0,z:0})


    let stopRotation = gsap.to(burguer.rotation,{
        y:Math.PI *2 + burguer.rotation.y,
        x:0,
        z:0,
        duration:10,
        repeat:-1,
        ease:"none"
    })
 let tl=gsap.timeline;



 tl({
    scrollTrigger:{
        trigger:".second",
        start:"top 100%",
        end:"top top",
        scrub:1,
        onEnter:()=>{
            stopRotation.pause();//stopRotation애니메이션 멈춤
        },
        onLeaveBack:()=>{
            let newProgress=Math.PI *2 + burguer.rotation.y;
            stopRotation.progress(newProgress).resume();
        }
    }
 })
 .to(burguer.rotation,{x:0,y:-Math.PI*0.8,z:0},0)
 .to(burguer.position,{x:0,y:-500,z:0},0)
 .to(burguer.scale,{x:300,y:300,z:300},0)

 tl({
    scrollTrigger:{
        trigger:".third",
        start:"top 100%",
        end:"top top",
        scrub:1,}
 })
 .to(burguer.rotation,{x:Math.PI*0.2,y:-Math.PI*2.8,z:0},0)
 .to(burguer.position,{x:300,y:-200,z:20},0)
 .to(burguer.scale,{x:200,y:200,z:200},0)

 
 tl({
    scrollTrigger:{
        trigger:".four",
        start:"top 100%",
        end:"top top",
        scrub:1,}
 })
 .to(burguer.rotation,{x:Math.PI*0.2,y:-Math.PI*1.8,z:0},0)
 .to(burguer.position,{x:-500,y:-200,z:20},0)
 .to(burguer.scale,{x:200,y:200,z:200},0)

 tl({
    scrollTrigger:{
        trigger:".five",
        start:"top 100%",
        end:"top top",
        scrub:1,}
 })
 .to(burguer.rotation,{x:0,y:-Math.PI*4,z:0},0)
 .to(burguer.position,{x:-450,y:-200,z:20},0)
 .to(burguer.scale,{x:200,y:200,z:200},0)


 tl({
    scrollTrigger:{
        trigger:".six",
        start:"top 100%",
        end:"top top",
        scrub:1,}
 })
 .to(burguer.rotation,{x:0,y:-Math.PI*2.5,z:0},0)
 .to(burguer.position,{x:500,y:-200,z:0},0)
 .to(burguer.scale,{x:200,y:200,z:200},0)

  

})



// 컨텐츠들
gsap.timeline()
.to(".section--one--container1",{
    opacity:0,
    scrollTrigger:{
        trigger:".section--one--container1",
        start:"top top",
        end:"bottom top",
        scrub:1
    }
})
.to(".section--one--container2",{
    opacity:0,
    scrollTrigger:{
        trigger:".second",
        start:"top bottom",
        end:"top center",
        scrub:1
    }
})
.to(".section--two--container1", {
    scrollTrigger: {
      trigger: ".section--two--container1",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "activeRightSpecific",
      scrub: true,
    },
  })
  .to(".section--two--container2", {
    scrollTrigger: {
      trigger: ".section--two--container2",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
  })

  .to(".section--three--container", {
    scrollTrigger: {
      trigger: ".section--three--container",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
  })

  .to(".section--four--container", {
    scrollTrigger: {
      trigger: ".section--four--container",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
  })

  .to(".section--five--container ", {
    scrollTrigger: {
      trigger: ".section--five--container ",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
  })
  .to(".section--six--container ", {
    scrollTrigger: {
      trigger: ".section--six--container ",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
  });
