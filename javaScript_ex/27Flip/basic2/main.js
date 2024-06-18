gsap.registerPlugin(Flip)
let container=document.querySelector(".container")
let box =document.querySelector(".box")

document.addEventListener("click",()=>{
    //F
    let state=Flip.getState(".box");

    //L
    container.appendChild(box)

    Flip.from(state,{duration:1, ease:"power1.out"})

})