gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  //console.log(e)
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

///////////////////////////////////

//preload
let container = document.querySelector("#progress");

let imgLoaded = 0;
let imgTotal = 300;
let current = 0;
let progressTimer;
let topValue;

//매시간 마다 할 일
// setInterval(할일,시간)
// setInterval(function(){},1000)//1초마다 할 일

//setInterval을 멈추고 싶을때
//1)변수에 setInterval 할당 let 변수 = setInterval
//2) clearInterval(변수)
//progressTimer=setInterval(updateProgress,1000/60)
function updateProgress() {
  imgLoaded++;
  //console.log(imgLoaded)
  let target = parseInt((imgLoaded / imgTotal) * 100);
  current += parseInt((target - current) * 0.1);
  //console.log(target +","+ current)//로딩값
  if (current > 99) {
    cancelAnimationFrame(progressTimer);
    //clearInterval(progressTimer)
    // container.classList.add('progress-complete')//컴플리트를 만든다.
    // container.style.transform='translate3d(100px, 0px, 0px)';
    gsap.to(container, {
      duration: 0.5,
      // xPercent : -100, 없어져야함
      // opacity:0,
      top: "-100%",
      ease: "expo.out(1.7)",
    });
  }
  progressTimer = requestAnimationFrame(updateProgress);
}
updateProgress();

///////////////////////////////////
//돌아가는거
gsap.to(".badge", {
  rotation: 360,
  duration: 8,
  ease: "none",
  repeat: -1,
  scrub: 1,
});
//[1]첫번째 영역!
let stickys = document.querySelectorAll(".container .sticky");

stickys.forEach(function (sticky) {
  gsap.to(sticky, {
    scrollTrigger: {
      trigger: sticky,
      pin: true,
      start: "top top",
      end: "+=100%",
      scrub: 1,
      opacity: 1,
    },
    // filter:" grayscale(1)",
    ease: "power3.out",
    duration: 2,
    opacity: 0,
    
  });
});
let video = document.querySelector(".sticky video"),
  videoWidth,
  videoHeight;

function setVideo() {
  videoWidth = video.offsetWidth;
  videoHeight = video.offsetHeight;
}
setVideo();
window.addEventListener("resize", setVideo);

let inset = { x: 3, y: 0, r: 10 };
let snap = gsap.utils.snap(10);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".video-parent",
      start: "center center ",
      end: "bottom top",
      pin: true,
      scrub: true,
    },
  })
  .fromTo(
    inset,
    {
      x: -5,
      y: -5,
      r: 20,
    },
    {
      duration: 1,
      x: 20,
      y: 20,
      r: 30,
      onUpdate: () => {
        video.style.clipPath = `inset(${(inset.x * videoWidth) / 200}px ${(inset.y * videoWidth) / 200}px round ${snap(inset.r)}px)`;
      },
    }
  );
//글자 자르기

//const text = new SplitType('#target', { types: 'words, chars' })
let splitTypes1 = document.querySelectorAll(".logo-large");
splitTypes1.forEach(function (char, i) {
  let parent = char.parentNode;
  const text = new SplitType(char, {
    types: "chars",
  });
  // console.log(text)

  gsap.from(text.chars, {
    opacity: 0,
    yPercent: -100,
    duration: 0.4,
    stagger: 0.04,
    scrollTrigger: {
      trigger: parent,
      start: "top center",
      end: "100% 100%",
      ease: "power3.out",
      scrub: 1,
      // markers: true,
    },
  });
});





let  initialPath=
  "M998.5 703H6.10352e-05V106C6.10352e-05 106 81 0 464 0C847 0 998.5 106 998.5 106V703Z";
let   targetPath=
  "M998.5 597H6.10352e-05V3.05176e-05C6.10352e-05 3.05176e-05 81 62 464 62C847 62 998.5 3.05176e-05 998.5 3.05176e-05V597Z";

let svgWraps = document.querySelectorAll(".svg-container");

svgWraps.forEach((svgWrap) => {
  let itemSvg = svgWrap.querySelector("svg path");
  itemSvg.setAttribute("d", initialPath);

  gsap.to(itemSvg, {
    attr: { d: targetPath },
    scrollTrigger: {
      trigger: svgWrap,
      start: "top 70%",
      end: "+=20%",
      ease: "linear",
      scrub: 1,
      // markers: true,
    },
    y:100,
  });
});



//텍스트의 사라지는 방향 애니

gsap.to("[data-direct]", {
  //속성중에 data-direct이 있는 것들을 모두 불러줌(호출)
  x: (i, el) => -el.getAttribute("data-direct") * 400,
  //el 은 data-direct 속성을 가지고 있는 요소들을 하나씩 받아옴 i는 인덱스 번호
  ease: 'none',
  scrollTrigger: {
    trigger: '.text_wrap',
    start: 'top top',
    end: 'top top',
    duration: 2,
    // duration: 1,
    scrub: 2,
    // markers: true,
  },
});

////
console.clear();

select = (e) => document.querySelector(e);
selectAll = (e) => document.querySelectorAll(e);

const containers = select(".containers");
const cuboid = selectAll(".hi__cuboid");
const hiWords = selectAll(".hi__word");
const base = select(".hi__base-plate");
let winW = 0;
let winH = 0;
let pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

function init() {
    setWinDimensions();

    gsap.set(containers, { autoAlpha: 1 });
    gsap.timeline({
        scrollTrigger: {init,
          trigger: ".website-content3",
          stert: 'top 60%',
          end: 'top top',
          scrub: 2,
          markers: true,
        },
      })
    gsap.timeline({ delay: 0.5 })
        .from(".hi__location--lat", {
            x: 100,
            autoAlpha: 0,
            ease: "power4",
            duration: 1
        })
        .from(
            ".hi__location--long",
            {
                x: -100,
                autoAlpha: 0,
                ease: "power4",
                duration: 1
            },
            0
        )
        .from(
            cuboid,
            {
                y: winH,
                duration: 3,
                stagger: 0.14,
                ease: "elastic(0.4,0.3)"
            },
            0
        );

    gsap.to(cuboid, {
        rotateX: -360,
        duration: 8,
        repeat: -1,
        ease: "none"
    });

    gsap.fromTo(
        cuboid,
        {
            rotateY: 8,
            rotate: -10
        },
        {
            rotateY: -8,
            rotate: 10,
            duration: 2.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        }
    );
}

function setWinDimensions() {
    winW = window.innerWidth;
    winH = window.innerHeight;
}

function calcOffset(xPos, yPos) {
    let dX = (2 * (xPos - winW / 2)) / winW;
    let dY = (-2 * (yPos - winH / 2)) / winH;
    return [dX, dY];
}

function followPointer(pX, pY) {
    let nPos = calcOffset(pX, pY); // get cursor position from center
    let nX = nPos[0];
    let nY = nPos[1];
    let positiveX = Math.sqrt(nX * nX);
    let positiveY = Math.sqrt(nY * nY);
    let deltaS = 450 * positiveX;
    let deltaW = 600 * positiveY;
    gsap.to(hiWords, {
        fontStretch: `${550 - deltaS}%`,
        fontWeight: 800 - deltaW,
        duration: 2
    });
}

window.addEventListener("mousemove", function (event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    followPointer(pointer.x, pointer.y);
});

window.addEventListener("touchmove", function (event) {
    pointer.x = event.touches[0].clientX;
    pointer.y = event.touches[0].clientY;
    followPointer(pointer.x, pointer.y);
});

window.addEventListener("touchstart", function (event) {
    pointer.x = event.touches[0].clientX;
    pointer.y = event.touches[0].clientY;
    followPointer(pointer.x, pointer.y);
});




window.onresize = setWinDimensions;
//////

//슬라이드바

/*--------------------
Vars
--------------------*/
let speed = 0;
let acc = 0;
let hover = false;
let width;
let times;
let cloned = [];

const item = document.querySelector(".menu--item");
const word = item.querySelector(".menu--word");

/*--------------------
Calculate
--------------------*/
const calculate = () => {
  console.log("cloned", cloned);
  cloned.forEach((i) => {
    i.parentNode.removeChild(i);
  });
  cloned = [];

  width = Math.ceil(word.clientWidth);
  times = Math.ceil(window.innerWidth / width);

  item.style.width = `${(times + 1) * width}px`;

  for (let i = 0; i < times + 1; i++) {
    const clone = word.cloneNode(true);
    word.parentNode.appendChild(clone);
    cloned.push(clone);
  }
};

/*--------------------
Listeners
--------------------*/
const handleMouse = (bool) => (hover = bool);
item.addEventListener("mouseenter", () => {
  handleMouse(true);
});
item.addEventListener("touchstart", () => {
  handleMouse(true);
});
item.addEventListener("mouseleave", () => {
  handleMouse(false);
});
item.addEventListener("touchend", () => {
  handleMouse(false);
});
window.addEventListener("resize", calculate);
window.addEventListener("load", calculate);

/*--------------------
Animate
--------------------*/
const animate = () => {
  // Acceleration
  acc += 0.1;
  if (hover) {
    acc -= 0.35;
  }

  // Min/Max accelearion
  acc = Math.min(13, Math.max(0, acc));

  // Add acceleration to speed
  speed += acc;

  // Text Loop
  if (speed >= width) {
    speed = 0;
  }

  // CSS Text
  item.style.transform = `translateX(${-speed}px) skewX(${-2 * acc}deg)`;

  // RaF
  requestAnimationFrame(animate);
};
animate();


let conScales = document.querySelectorAll(".con-scale");
conScales.forEach(function (conScale) {
  gsap.fromTo(
    conScale,
    {
      y: 100,
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: conScale,
        stert: "top 80%",
        end: "top 20%",
        scrub: 2,
      },
      y: 0,
      duration: 1,
      rotation: 0,
      ease: "power3.out",
    }
  );
});








