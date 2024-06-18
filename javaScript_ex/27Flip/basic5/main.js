gsap.registerPlugin(Flip);

//const=상수(정해진값)
//const activeThumb;//오류뜸 (의미가없어서) let *변수로 써야함
//const activeThumb=의미부여;   //이렇게 해야 오류 안뜸 
const thumbs=document.querySelectorAll(".item");
const modal=document.querySelector('.modal');
const toggle=document.querySelector('.page3 button')
const modalImage=modal.querySelector('.modal-image');
const wrapper=document.querySelector('.grid-wrapper');

let activeThumb;

thumbs.forEach((thumb)=>{
    thumb.addEventListener("click",()=>{
        activeThumb= thumb;
        thumb.classList.add("active-thumb");
        thumb.dataset.flipId="img";
        gsap.set(thumb,{opacity:0})

        const state=Flip.getState([thumb,modalImage],{
            props:"borderRadius,aspectRatio,BoxShadow"
        })
        modalImage.querySelector("img").setAttribute("src",thumb.dataset.url)
        modal.classList.add("active")
        modalImage.style.display="block";

        Flip.from(state,{
            duration:0.25,
            ease:"sin.inOut"
        })
    })
    
})

modal.addEventListener("click",()=>{
    gsap.set(activeThumb,{opacity:1})
    
    const state=Flip.getState([activeThumb,modalImage],{
        props:"borderRadius,aspectRatio,BoxShadow"
    })
    modal.classList.remove("active");
    Flip.from(state,{
        duration:1,
        absolute:true,
        ease:"sine,inOut",
    })
})

