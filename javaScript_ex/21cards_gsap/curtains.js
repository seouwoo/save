gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  //console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

///////////////////////////////////

let cardWrapper=document.querySelectorAll('.cards_item');
let cardsEl=document.querySelectorAll('.cards_el');
console.log(cardsEl)

cardWrapper.forEach(function(e,i){//e(아이템)i(아이템의 인덱스)
    let card=cardsEl[i]
    let img=e.querySelector('cards_img img')
    let scale=1;
    let rotate=0;

    if (i !== cardsEl.length - 1){
        scale=0.9 +0.025 * 1;
        rotate= -10;
    }

    gsap.to(card,{
        scale:scale,
        rotateX:rotate,
        transformOrigin:'center top',
        ease:'none',
        scrollTrigger:{
            trigger:e,
            start:'top '+ (100 + 40 * i),
            end:'bottom +=650px',
            pin:e,
            endTrigger:'.end-anim',
            scrub:1,
            pinSpacing:false,
        }
    })
})
