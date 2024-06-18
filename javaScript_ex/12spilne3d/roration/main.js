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
.load('https://prod.spline.design/iCihF376JW1ibtNx/scene.splinecode')
.then(() =>{

    let rotate=app.findObjectByName('rotate');
    
    gsap.to(rotate.scale,{x:2,y:2,z:2})
    gsap.to(rotate.position,{x:0,y:0})
    gsap.timeline({
        scrollTrigger:{
            trigger: ".third",
            start: "top top",
            end: "+=400%",
            scrub: 2,
            pin:true,
        }})
        .to(rotate.rotation,{y: -Math.PI * 6,x:0},0)
        .to(rotate.position,{x:0,y:2000},0)
        .to(rotate.scale,{x:2,y:2,z:2},0)
})
