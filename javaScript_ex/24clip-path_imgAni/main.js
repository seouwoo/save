gsap.registerPlugin(ScrollTrigger);

let workInfoItems=document.querySelectorAll(".work__photo-item");
workInfoItems.forEach((item,index)=>{
    item.style.zIndex=workInfoItems.length - index;
})


gsap.set('.work__photo-item',{
    clipPath:function(){
        //'inset(top right bottom left)'
        return 'inset(0px 0px 0px 0px)'
    }
    
})

gsap.to('.work__photo-item:not(:last-child)',{
    clipPath:function(){
        //'inset(top right bottom left)'
        return 'inset(0px 0px 100% 0px)'
    },
    stagger:.5,
    ease:"none"
})

ScrollTrigger.create({
    trigger:'.work',
    start:'top top',
    end:'bottom bottom',
    Animation:ani,
    scrub:1
})