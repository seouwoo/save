// "M998.5 703H6.10352e-05V106C6.10352e-05 106 81 0 464 0C847 0 998.5 106 998.5 106V703Z"
// "M998.5 597H6.10352e-05V3.05176e-05C6.10352e-05 3.05176e-05 81 62 464 62C847 62 998.5 3.05176e-05 998.5 3.05176e-05V597Z"

gsap.registerPlugin(ScrollTrigger);

let initialPath  = "M8.36287e-06 0.000148502L998.5 6.121e-05L1000.5 602.501C1000.5 602.501 860.5 472 477.5 472C94.5 472 6.09914e-05 602.001 6.09914e-05 602.001L8.36287e-06 0.000148502Z";
let targetPath = "M-2.08408e-06 0.000117984L998.5 3.06924e-05L1000.5 602.501C1000.5 602.501 860.5 722 477.5 722C94.5001 722 5.05445e-05 602.001 5.05445e-05 602.001L-2.08408e-06 0.000117984Z";


let svgWraps = document.querySelectorAll(".svg-container");

svgWraps.forEach((svgWrap)=>{
    let itemSvg = svgWrap.querySelector("svg path")
    itemSvg.setAttribute("d",initialPath)

    gsap.to(itemSvg,{
        attr:{d:targetPath},
        scrollTrigger: {
            trigger: svgWrap,
            start: "top 70%",
            end: "+=20%",
            ease: "linear",
            scrub: 1,
            markers: true,
        },
    })
})