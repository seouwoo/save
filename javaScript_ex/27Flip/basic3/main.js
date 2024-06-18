gsap.registerPlugin(Flip)

let group=document.querySelector(".group")
let button=document.querySelector(".button")
button.addEventListener("click",()=>{
    let state=Flip.getState(".group, .box");//F 초기상태 캡처
    group.classList.toggle("reorder")//L 마지막상태 캡처

    Flip.from(state,{
        absolute:true,
        duration:0.5,
        stagger:0.2,
        ease:"power1.inOut"
    })
})