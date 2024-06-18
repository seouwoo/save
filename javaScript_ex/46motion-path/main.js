gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

let path1 = document.querySelector('.theLine');
let path1Length = path1.getTotalLength();
//console.log(path1Length)

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;

let pulses = gsap.timeline({
    defaults: {//디폴트값
        duration: 0.05,
        autoAlpha: 1,
        scale: 2,
        transformOrigin: "center",
        ease: "elastic.out(1,0.3)",
    }
    
})
.to(".ball01,.text01", {}, 0.15)
.to(".ball02,.text02", {}, 0.24)
.to(".ball03,.text03", {}, 0.36)
.to(".text04", {duration:1}, 1)




let main = gsap.timeline({
    defaults: {
        duration: 1
    },
    scrollTrigger: {
        trigger: '#svg',
        start: "top center",
        end: "+=1500",
        scrub: 1.9
    },
    onUpdate: animationUpdate,
})
.to(".ball04", {
    duration: 0.01,
    autoAlpha: 1
})
.to(path1, {
    strokeDashoffset: 0
},"ball")
.to(".ball04", {
    motionPath: {
        path: ".theLine",//path연결
        align: ".theLine",
        alignOrigin: [0.5, 0.5],
    }
},"ball")
.add(pulses,0)//타임라인 연결법0이라는것은 시작지점

function animationUpdate(){
    console.log(this.progress())
}