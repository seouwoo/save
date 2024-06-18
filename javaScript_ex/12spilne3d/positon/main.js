gsap.registerPlugin(ScrollTrigger)


function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
lenis();

/////////////////////////////////
import {
    Application
} from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

app
    .load('https://prod.spline.design/oQ0oUGcS3aIparSg/scene.splinecode')
    .then(() => { //로드가 성공했다면 할 일
        let Hamburguer = app.findObjectByName('Hamburguer');
        console.log(Hamburguer)

        gsap.set(Hamburguer.scale, {
            x: 1.5,
            y: 1.5,
            z: 1.5
        })
        gsap.set(Hamburguer.position, {
            x: 0,
            y: 2,
            z: 0
        })

        let stopRotation = gsap.to(Hamburguer.rotation, {
            y: -Math.PI * 2 + Hamburguer.rotation.y,
            x: 0,
            z: 0,
            duration: 10,
            repeat: -1,
            ease: 'none'
        })



        let tl = gsap.timeline;
        tl({
                scrollTrigger:{
                    trigger: ".second",
                    start: "top 100%",
                    end: "top top",
                    scrub: 1,
                    markers:true,
                    onEnter: () => {
                        stopRotation.pause();//애니종료
                    },
                    onLeaveBack: () => {
                        let newProgress = -Math.PI * 2 + Hamburguer.rotation.y;
                        stopRotation.progress(newProgress).resume();
                    }
                }
            })

            .to(Hamburguer.rotation, {x: 0,y: Math.PI * 0.8, z: 0}, 0)
            .to(Hamburguer.position, {x: 130,y:0,z:0}, 0)
            .to(Hamburguer.scale, {x: 2,y: 2,z: 2}, 0)

            tl ({
                scrollTrigger:{
                    trigger: ".third",
                    start: "top 100%",
                    end: "top top",
                    scrub: 1,}

            })
            .to(Hamburguer.rotation, {x: Math.PI * 0.2,y: Math.PI * 2.8, z: 0}, 0)
            .to(Hamburguer.position, {x: 130,y:0,z:0}, 0)
            .to(Hamburguer.scale, {x: 2,y: 2,z: 2}, 0)
            tl ({
                scrollTrigger:{
                    trigger: ".four",
                    start: "top 100%",
                    end: "top top",
                    scrub: 1,}

            })
            .to(Hamburguer.rotation, {x: Math.PI * 0.2,y: -Math.PI * 0.2, z: 0}, 0)
            .to(Hamburguer.position, {x: 30,y:0,z:0}, 0)
            .to(Hamburguer.scale, {x: 2,y: 2,z: 2}, 0)
            tl ({
                scrollTrigger:{
                    trigger: ".five",
                    start: "top 100%",
                    end: "top top",
                    scrub: 1,}

            })
            .to(Hamburguer.rotation, {x: Math.PI * 0,y: -Math.PI * 2, z: 0}, 0)
            .to(Hamburguer.position, {x: 30,y:0,z:0}, 0)
            .to(Hamburguer.scale, {x: 2,y: 2,z: 2}, 0)
            tl ({
                scrollTrigger:{
                    trigger: ".six",
                    start: "top 100%",
                    end: "top top",
                    scrub: 1,}

            })
            .to(Hamburguer.rotation, {x: Math.PI * 0.2,y: -Math.PI * 0.2, z: 0}, 0)
            .to(Hamburguer.position, {x: 250,y:0,z:100}, 0)
            .to(Hamburguer.scale, {x: 2,y: 2,z: 2}, 0)











    })


/* 컨텐츠들*/
gsap.timeline()
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