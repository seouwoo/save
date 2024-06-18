gsap.registerPlugin(ScrollTrigger)
function lenis(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      //console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
}
lenis();
//////////////////////////////

import { Application } from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
.load('https://prod.spline.design/y-GW8nTzi-AveR6c/scene.splinecode')
.then(()=>{

  let Child1 = app.findObjectByName('Child1');
  let Child2 = app.findObjectByName('Child2');
  let Child3 = app.findObjectByName('Child3');
  let Child4 = app.findObjectByName('Child4');
  let Bunny = app.findObjectByName('Bunny');

    let objects=[Child1,Child2,Child3,Child4,Bunny]

 function showObject(object,scale){
  objects.forEach((object)=>{gsap.to(object.scale,{x:0,y:0,z:0})})
  gsap.to(object.scale,0.3,{x:scale, y:scale, z:scale, delay:0.5,ease:"expo.inOut"},0)
 }

 function reduceObjectNo(duration){
  objects.forEach((object)=>{
    gsap.to(object.scale,duration,{x:0,y:0,z:0},0)
    gsap.to(Child4.scale,0.3,{x:1,y:1,z:1},0)
   
  })
 }


    objects.forEach((object)=>{
        gsap.set(object.scale,{x:0,y:0,z:0})
        gsap.to(object.rotation,10,{y:Math.PI*2,repeat:-1,ease:"none"})
      })
      gsap.set(Bunny.scale,{x:1, y:1,z:1})
      gsap.set(Bunny.position,{x:300, y:-100,z:0})


      gsap.timeline({
        scrollTrigger:{
          trigger:".first",
          start:"top top",
          end:"90% top",
          scrub:2
        }
      })
      .to(Bunny.position,{x:0, y:-100,z:0},0)
      .to(Bunny.rotation,{x:Math.PI*2},0)

      gsap.timeline({
        scrollTrigger:{
          trigger:".first",
          start:"100% top",
          toggleActions:"restart none reverse none"
        }
      }).to(Bunny.scale,{x:0,y:0,z:0},0)
      /////
      gsap.timeline({
        scrollTrigger:{
          trigger:".second",
          start:"top top",
          end:"100% top",
          scrub:2
        }
      })
      .to(Child1.scale,{x:1, y:1,z:1},0)
      .to(Child1.rotation,{x:Math.PI*2,ease:"expo.inOut"},0)
       /////
       gsap.timeline({
        scrollTrigger:{
          trigger:".third",
          start:"top top",
          end:"100% top",
          scrub:2
        }
      })
      .to(Child1.scale,{x:0, y:0,z:0},0)
      .to(Child2.scale,{x:1, y:1,z:1},0)
      .to(Child2.rotation,{x:Math.PI*2,ease:"expo.inOut"},0)
      /////
      gsap.timeline({
        scrollTrigger:{
          trigger:".four",
          start:"top top",
          end:"100% top",
          scrub:2
        }
      })
      .to(Child2.scale,{x:0, y:0,z:0},0)
      .to(Child3.scale,{x:1, y:1,z:1},0)
      .to(Child3.rotation,{x:Math.PI*2,ease:"expo.inOut"},0)
      /////
      gsap.timeline({
        scrollTrigger:{
          trigger:".five",
          start:"top top",
          end:"95% top",
          scrub:2,
          onEnterBack:()=>{reduceObjectNo(0)},
          onLeaveBack:()=>{
            reduceObjectNo(0)
          }
        }
      })
      .to(Child3.scale,{x:0, y:0,z:0},0)
      .to(Child4.scale,{x:1, y:1,z:1},0)
      .to(Child4.rotation,{x:Math.PI*2,ease:"expo.inOut"},0)


      document.querySelector("#toBunny").addEventListener("click",()=>{showObject(Bunny,1)})
      document.querySelector("#toChild1").addEventListener("click",()=>{showObject(Child1,1)})
      document.querySelector("#toChild2").addEventListener("click",()=>{showObject(Child2,1)})
      document.querySelector("#toChild3").addEventListener("click",()=>{showObject(Child3,1)})
      document.querySelector("#toChild4").addEventListener("click",()=>{showObject(Child4,1)})





})
