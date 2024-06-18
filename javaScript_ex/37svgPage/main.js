// "M998.5 703H6.10352e-05V106C6.10352e-05 106 81 0 464 0C847 0 998.5 106 998.5 106V703Z"
// "M998.5 597H6.10352e-05V3.05176e-05C6.10352e-05 3.05176e-05 81 62 464 62C847 62 998.5 3.05176e-05 998.5 3.05176e-05V597Z"

gsap.registerPlugin(ScrollTrigger);

let initialPath = "M998.5 703H6.10352e-05V106C6.10352e-05 106 81 0 464 0C847 0 998.5 106 998.5 106V703Z";
let targetPath = "M998.5 597H6.10352e-05V3.05176e-05C6.10352e-05 3.05176e-05 81 62 464 62C847 62 998.5 3.05176e-05 998.5 3.05176e-05V597Z";


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