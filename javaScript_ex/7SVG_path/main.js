let path=`M 10 200 Q 600 200 1190 200`;
let finalpath=`M 10 200 Q 600 200 1190 200`;
let svg=document.querySelector('.svgwrap svg');

svg.addEventListener('mousemove',function(e){
    console.log(e.y)
    path=`M 10 200 Q ${e.x - 200} ${e.y} 1190 200`;

    gsap.to('.svgwrap svg path',{
        attr:{d:path},
        duration:0.3,
        ease: "power3.out",
    })
})
svg.addEventListener('mouseleave',function(){
    gsap.to('.svgwrap svg path',{
        attr:{d:finalpath},
        duration:1.5,
        ease: "elastic.out(1,0.2)",
    })
})
