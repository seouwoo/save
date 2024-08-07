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
///////////////////////////
gsap.registerPlugin(ScrollTrigger)

import { Application } from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
.load('https://prod.spline.design/ER8bzaMAHI33GwIf/scene.splinecode')
.then(() =>{
    let dice=app.findObjectByName('dice')
    let Bomb=app.findObjectByName('Bomb')
    let Hand16=app.findObjectByName('Hand16')
    let Hamburger=app.findObjectByName('Hamburger')
    let Gundam=app.findObjectByName('Gundam')

    let objects=[dice,Bomb,Hand16,Hamburger,Gundam]

    function showObject(object,scale){
        console.log("dd")
        objects.forEach((object)=>{gsap.to(object.scale,{x:0,y:0,z:0})})
        gsap.to(object.scale,0.3,{x:scale,y:scale,z:scale, delay:0.5,ease:'expo.inOut'})
    }

    function reduceObjectNo(duration){
        objects.forEach((object)=>{
            gsap.to(object.scale,duration,{x:0,y:0,z:0},0)
            gsap.to(dice.scale,0.3,{x:10,y:10,z:10,delay:0.5,ease:'expo.inOut'},0)
            
        })
    }
    objects.forEach((object)=>{
        gsap.set(object.scale,{x:0,y:0,z:0})
        gsap.to(object.rotation,10,{y:Math.PI*2,repeat:-1,ease:'none'})
        
    })
    gsap.set(Gundam.scale,{x:1000,y:1000,z:1000})
    gsap.set(Gundam.position,{x:2000,y:200,z:0})

    gsap.timeline({
        scrollTrigger:{
            trigger:'.first',
            start:'top top',
            end:'90% top',
            scrub:2,
        }
    })
    .to(Gundam.position,{x:0,y:-100,z:0},0)
    .to(Gundam.rotation,{x:Math.PI*2,},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.first',
            start:'100% top',
            toggleActions:'restart none reverse none'
        }
    }).to(Gundam.scale,{x:0,y:0,z:0},0)
    ///////
    gsap.timeline({
        scrollTrigger:{
            trigger:'.second',
            start:'top top',
            end:'100% top',
            scrub:2,
        }
    })
    .to(Hamburger.scale,{x:100,y:100,z:100},0)
    .to(Hamburger.rotation,{x:Math.PI*2,ease: "expo.inOut"},0)
    
    ////////////
    gsap.timeline({
        scrollTrigger:{
            trigger:'.third',
            start:'top top',
            end:'100% top',
            scrub:2,
        }
    })
    .to(Hamburger.scale,{x:0,y:0,z:0},0)
    .to(Hand16.scale,{x:10,y:10,z:10},0)
    .to(Hand16.rotation,{x:Math.PI*2,ease: "expo.inOut"},0)
    /////
    gsap.timeline({
        scrollTrigger:{
            trigger:'.four',
            start:'top top',
            end:'100% top',
            scrub:2,
        }
    })
    .to(Hand16.scale,{x:0,y:0,z:0},0)
    .to(Bomb.scale,{x:10,y:10,z:10},0)
    .to(Bomb.rotation,{x:Math.PI*2,ease: "expo.inOut"},0)
    /////
    gsap.timeline({
        scrollTrigger:{
            trigger:'.five',
            start:'top top',
            end:'95% top',
            scrub:2,
            onEnterBack:()=>{console.log(reduceObjectNo(0))},
            onLeaveBack:()=>{console.log(reduceObjectNo(0))}
        }
    })
    .to(Bomb.scale,{x:0,y:0,z:0},0)
    .to(dice.scale,{x:10,y:10,z:10},0)
    .to(dice.rotation,{x:Math.PI*2,ease: "expo.inOut"},0)


    document.querySelector('#toGundam').addEventListener('click',()=>{showObject(Gundam,1000)})
    document.querySelector('#toHamburger').addEventListener('click',()=>{showObject(Hamburger,100)})
    document.querySelector('#toHand16').addEventListener('click',()=>{showObject(Hand16,10)})
    document.querySelector('#toBomb').addEventListener('click',()=>{showObject(Bomb,10)})
    document.querySelector('#todice').addEventListener('click',()=>{showObject(dice,10)})
})

