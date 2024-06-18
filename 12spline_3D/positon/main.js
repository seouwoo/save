gsap.registerPlugin(ScrollTrigger)
function lenis(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
}
lenis();

/////////////////////////////

import { Application } from "https://unpkg.com/@splinetool/runtime";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
.load('https://prod.spline.design/AaZzSm1a6KvHsewX/scene.splinecode')
.then(()=>{         
    //로드가 성공했다면 할일

    let car=app.findObjectByName('car');
    console.log(car)


    gsap.set(car.scale,{x:0.8,y:0.8,z:0.8})
    gsap.set(car.position,{x:0,y:0,z:0})


    let stopRotation = gsap.to(car.rotation,{
        y:Math.PI *2 + car.rotation.y,
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
            let newProgress=Math.PI *2 + car.rotation.y;
            stopRotation.progress(newProgress).resume();
        }
    }
 })
 .to(car.rotation,{x:0,y:-Math.PI*0.8,z:0},0)
 .to(car.position,{x:0,y:0,z:0},0)
 .to(car.scale,{x:1.2,y:1.2,z:1.2},0)

 tl({
    scrollTrigger:{
        trigger:".third",
        start:"top 100%",
        end:"top top",
        scrub:1,}
 })
 .to(car.rotation,{x:Math.PI*0.2,y:-Math.PI*2.8,z:0},0)
 .to(car.position,{x:130,y:0,z:20},0)
 .to(car.scale,{x:0.8,y:0.8,z:0.8},0)

 
 tl({
    scrollTrigger:{
        trigger:".four",
        start:"top 100%",
        end:"top top",
        scrub:1,}
 })
 .to(car.rotation,{x:Math.PI*0.2,y:-Math.PI*1.8,z:0},0)
 .to(car.position,{x:-130,y:0,z:20},0)
 .to(car.scale,{x:0.8,y:0.8,z:0.8},0)

 tl({
    scrollTrigger:{
        trigger:".five",
        start:"top 100%",
        end:"top top",
        scrub:1,}
 })
 .to(car.rotation,{x:0,y:-Math.PI*4,z:0},0)
 .to(car.position,{x:-130,y:0,z:20},0)
 .to(car.scale,{x:1.2,y:1.2,z:1.2},0)


 tl({
    scrollTrigger:{
        trigger:".six",
        start:"top 100%",
        end:"top top",
        scrub:1,}
 })
 .to(car.rotation,{x:0,y:-Math.PI*2.5,z:0},0)
 .to(car.position,{x:100,y:-90,z:0},0)
 .to(car.scale,{x:1,y:1,z:1},0)

  

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
