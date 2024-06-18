// gsap.registerPlugin(ScrollTrigger);


// let world=document.querySelector('.world')
// let stage=document.querySelector('.stage')
// let house=document.querySelector('.house')

// gsap.to(house,{
//     scrollTrigger:{
//         trigger:world,
//         start:"top top",
//         end:"+=400%",
//         pin:true,
//         scrub:1,
//         onUpdate:(self)=>{
//             //console.log(self.progress)
//             let mapF=gsap.utils.mapRange(0,1,-490,480,)
//             let value=mapF(self.progress)

//             house.style.transform=`translateZ(${value}vw);`
//             console.log(value)


//         }
//     }
// })

gsap.registerPlugin(ScrollTrigger);

let world = document.querySelector(".world")
let stageEle = document.querySelector(".stage")
let houseEle = document.querySelector(".house")
let mousePos = {
    x: 0,
    y: 0
}

gsap.to(houseEle, {
    scrollTrigger: {
        trigger: world,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
            // console.log(self.progress)
            let mapF = gsap.utils.mapRange(0, 1, -490, 480, );
            let value = mapF(self.progress)
            console.log(value)

            houseEle.style.transform = `translateZ(${value}vw)`;
        }
    }

})

window.addEventListener('mousemove', function (e) {
    mousePos.x = (e.clientX / window.innerWidth)*5
    mousePos.y = (e.clientY / window.innerHeight)*5
    stageEle.style.transform = `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`
})
