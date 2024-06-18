gsap.registerPlugin(ScrollTrigger);


let MAX=100;
let circleProgressInstances=[];
document.querySelectorAll('.progress').forEach((ProgressEle,index)=>{
    let initialvalue=document.querySelectorAll('.value-input')[index].value;
    let classText=document.querySelectorAll('.skill h3')[index].innerHTML;

    let cp=new CircleProgress(ProgressEle, {
        max: MAX,
        value: 0,
        animationDuration:1500,
        textFormat: (val)=>val+' ↑'//어떤값을 추가하려고하면
    });

    circleProgressInstances.push(cp);
    ScrollTrigger.create({
        trigger:'.skill',
        start:'top 70%',
        scrub:1,
        onEnter:()=>{
            cp.value=initialvalue;
            // cp.el.style.setProperty('----progress-value',initialvalue/MAX)??
        },
        onLeaveBack:()=>{
            cp.value=0;
            // cp.el.style.setProperty('----progress-value',0/MAX)
        },

    })
})