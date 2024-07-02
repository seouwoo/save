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


//proloading시 scroll 움직이는 못하게 막기
function showLoadingScreen() {
  document.body.classList.add('loading');
  window.scrollTo(0, 0);
}

function hideLoadingScreen() {
  document.body.classList.remove('loading');
}
showLoadingScreen();


//preload
let container = document.querySelector("#progress");

let imgLoaded = 0;
let imgTotal = 5; //로딩값
let current = 0;
let progressTimer;
let topValue;

progressTimer = setInterval(updateProgress, 1000 / 60)


function updateProgress() {
  imgLoaded++;
  //console.log(imgLoaded)
  let target = (imgLoaded / imgTotal) * 100;

  current += (target - current) * 0.01;
  //current = current + (target - current)*0.01;
  // progressBar.style.width=current + "%";
  // progressText.innerHTML=Math.floor(current) + "%";//Math.floor 버림
  //console.log(current)
  let sp;
  if (current > 99.9) {
    clearInterval(progressTimer)
    container.classList.add("progress-complete")
    // progressBar.style.width="100%";
    gsap.to(container, {
      duration: 0.5,
      top: "-100%",
      ease: "none",
      onUpdate: function scrollPrevent() {
        showLoadingScreen();
        sp = requestAnimationFrame(scrollPrevent) //2번줄
        setTimeout(() => {
          cancelAnimationFrame(sp);
          hideLoadingScreen(); //6번줄
        }, 10);
      },

    })
  }

}


let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);


//////


//Mouse cursor
function logKey(e) {
  screenLog.innerText = `(${e.clientX},${e.clientY})`;
}

let ball = document.querySelector(".ball");

gsap.set(ball, {
  xPercent: -50,
  yPercent: -50
})

let pos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}
let mouse = {
  x: pos.x,
  y: pos.y
};
let cursorspeed = 0.08;

let xSet = gsap.quickSetter(ball, "x", "px");
let ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", function (e) {
  // console.log(e)
  mouse.x = e.x
  mouse.y = e.y

})

gsap.ticker.add(function () {
  let dt = 1.0 - Math.pow((1.0 - cursorspeed), gsap.ticker.deltaRatio())
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x)
  ySet(pos.y)
})


///////////////////////////////////

//[1]container1

//돌아가는거
gsap.to(".badge", {
  rotation: 360,
  duration: 8,
  ease: "none",
  repeat: -1,
  scrub: 1,
});


let stickys = document.querySelectorAll(".container .sticky");

stickys.forEach(function (sticky) {
  gsap.to(sticky, {
    ease: "power3.out",
    duration: 5,

    scrollTrigger: {
      trigger: sticky,
      pin: true,
      duration: 2,
      start: "50% 50%",
      end: "+=50%",
      scrub: 2,
      opacity: 1,
      // markers: true,
    },
    opacity: 0,
    scrub: 1,
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

let inset = {
  x: 3,
  y: 0,
  r: 10
};
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
    inset, {
      scrub: 1,
      x: -5,
      y: -5,
      r: 20,
    }, {
      scrub: 1,
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

let splitTypes1 = document.querySelectorAll(".wave1 .logo-large");
splitTypes1.forEach(function (char, i) {
  const text = new SplitType(char, {
    types: "chars",
  });

  gsap.from(text.chars, {
    opacity: 0,
    yPercent: -100,
    duration: 0.4,
    stagger: 0.04,
    scrub: 1,
    scrollTrigger: {
      trigger: ".wave1",
      start: "0%",
      end: "30%",
      ease: "power3.out",
      scrub: 1,
      // markers: true,
    },
  });
});


////waves


let initialPath =
  "M1.27707e-05 0.000728292L1000 0.000732422L1000 203.001C1000 203.001 881.309 117 498.5 117C115.691 117 3.05176e-05 203.001 3.05176e-05 203.001L1.27707e-05 0.000728292Z";
let targetPath =
  "M8.39969e-06 0.000926656L1000 0.000930786L1000 203.001C1000 203.001 881.309 253 498.5 253C115.691 253 2.61465e-05 203.001 2.61465e-05 203.001L8.39969e-06 0.000926656Z";

let svgWraps1 = document.querySelectorAll(".svg-container1");
let svgWraps2 = document.querySelectorAll(".svg-container2");

svgWraps1.forEach((svgWrap) => {
  let itemSvg = svgWrap.querySelector("svg path");
  itemSvg.setAttribute("d", initialPath);

  gsap.to(itemSvg, {
    attr: {
      d: targetPath
    },
    scrollTrigger: {
      trigger: itemSvg,
      start: "10% top ",
      end: "=10%",
      ease: "linear",
      scrub: 1,
      //   markers: true,
    },
  });
});
svgWraps2.forEach((svgWrap) => {
  let itemSvg = svgWrap.querySelector("svg path");
  itemSvg.setAttribute("d", initialPath);

  gsap.to(itemSvg, {
    attr: {
      d: targetPath
    },
    scrollTrigger: {
      trigger: itemSvg,
      start: "-=30%",
      end: "-=30%",
      ease: "linear",
      scrub: 2,
      y: 50,
      //   markers: true,
    },
    y: -50,
  });
});


const svgText = document.querySelector("#textOnPath1");
const svgText2 = document.querySelector("#textOnPath2");
// console.log(svgText);


gsap.fromTo(
    [svgText, svgText2], {//두개를 잡을땐 동시에잡기
        attr: {
            startOffset: "0%"
        },
    }, {
        attr: {
            startOffset: "100%"
        },
        scrollTrigger: {
            trigger: ".wave1",
            start: "top top",
            scrub: 1,
            end: "100% 0%",
            pin:true
        },
    }
);
//data-bgcolor

let backColor = document.querySelectorAll("[data-bgcolor]")

backColor.forEach(function (item, index) {
  let prevBg = index == 0 ? "" : backColor[index - 1].dataset.bgcolor
  ScrollTrigger.create({
    trigger: item,
    start: "top 0%",
    end: "top 0%",
    scrub: 1,
    duration: 0.1,
    // markers: true,
    onEnter: function () {
      gsap.to(".sec", {
        backgroundColor: item.dataset.bgcolor
      })
    },
    onLeaveBack: function () {
      gsap.to(".sec", {
        backgroundColor: prevBg
      })
    }
  })
})

/////////////////content2

LottieScrollTrigger({
  target: ".website-content2",
  path: "./camera.json",
  speed: "medium",
  start: "top top",
  end: "50%",
  scrub: 1,
  // markers: true,
});


function LottieScrollTrigger(vars) {
  let playhead = {
      frame: 0
    },
    target = gsap.utils.toArray(vars.target)[0],
    speeds = {
      slow: "+=2000",
      medium: "+=1000",
      fast: "+=500"
    },
    st = {
      trigger: target,
      pin: true,
      start: "top top",
      end: speeds[vars.speed] || "+=1000",
      scrub: 1,
    },
    ctx = gsap.context && gsap.context(),
    animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || "svg",
      loop: false,
      autoplay: false,
      path: vars.path,
      rendererSettings: vars.rendererSettings || {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
  for (let p in vars) {
    // let users override the ScrollTrigger defaults
    st[p] = vars[p];
  }
  animation.addEventListener("DOMLoaded", function () {
    let createTween = function () {
      animation.frameTween = gsap.to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st,
      });
      return () => animation.destroy && animation.destroy();
    };
    ctx && ctx.add ? ctx.add(createTween) : createTween();
    // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  });
  return animation;
}




//텍스트의 사라지는 방향 애니

gsap.to("[data-direct]", {
  //속성중에 data-direct이 있는 것들을 모두 불러줌(호출)
  x: (i, el) => -el.getAttribute("data-direct") * 400,
  //el 은 data-direct 속성을 가지고 있는 요소들을 하나씩 받아옴 i는 인덱스 번호
  ease: 'none',
  scrollTrigger: {
    trigger: '.text_wrap',
    start: 'top top',
    end: 'center top',
    duration: 2,
    scrub: 2,
    //   markers: true,
  },
});



///////content3
//////////////////////////도착하면 커서 사라지기
// gsap.to(ball, {
//   scrollTrigger: {
//     trigger: '.website-content3',
//     start: 'top 20%',
//     end: '80% top',
//     onUpdate: () => {
//       ball.style.display = `none`
//     },
//     markers: true,
//     scrub: 1,
//     onLeaveBack: () => {
//       console.log("onLeaveBack")
//       ball.style.display = `block`
//     },
//     onLeave: () => {
//       console.log("onLeave")
//       ball.style.display = `block`
//     },
//   },

// });



//날짜
setInterval(() => {
  let today = new Date();
  let dayList = ['sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  let hh = addZero(today.getHours())
  let mm = addZero(today.getMinutes())
  let ss = addZero(today.getSeconds())

  let MM = addZero(today.getMonth() + 1) //0~11 
  let DD = today.getDate()
  let YY = today.getFullYear()
  let dd = dayList[today.getDay()].toUpperCase(); //0~6


  document.querySelector('#hours').innerHTML = hh;
  document.querySelector('#min').innerHTML = mm;
  document.querySelector('#sec').innerHTML = ss;
  document.querySelector('#month').innerHTML = MM;
  document.querySelector('#date').innerHTML = DD;
  document.querySelector('#year').innerHTML = YY;
  document.querySelector('#day').innerHTML = dd;

  function addZero(num) {
    return (num < 10 ? '0' + num : num)
  }
}, 1000)

/////////////////////////////content
let conScales = document.querySelectorAll('.con-scale')
conScales.forEach(function (conScale) {
  gsap.fromTo(conScale, {
    x: 100,
    y: -100,
    scale: 0.7,
    rotation: 180,

  }, {
    scrollTrigger: {
      trigger: conScale,
      start: 'top 100%',
      end: '100% 100%',
      scrub: 2,
      markers: true,
    },
    x: 0,
    y: 0,
    scale: 1,
    duration: 1,
    rotation: 0,
    ease: 'power3.out',
  })

})
//두번째 영역의 각각 이미지 애니
let secImgs = document.querySelectorAll('.section-images')


secImgs.forEach(function (secImg) {
  let imgs = secImg.querySelectorAll('.section-images img')
  let secImgParent = secImg.parentNode;

  imgs.forEach(function (img, index) {
    let imgDey = index * 0.8;
    gsap.set(img, {
      y: -400
    })
    gsap.timeline({
        scrollTrigger: {
          trigger: secImgParent,
          stert: 'top 60%',
          end: 'top top',
          scrub: 2,
        }
      })
      .to(img, {
        y: 0,
        duration: 2,
        delay: imgDey,
        ease: 'power4.out'
      })
    })
    
    
    gsap.to(imgs,{
      xPercent: -97 * (imgs.length - 1),
      scrollTrigger:{
        trigger:".website-content4",
        start:"0% 0%",
        end:"+=5000",
        scrub:1,
        pin:true,
        markers: true,
      }
    })
}
)

//////////////////
pagephoto = document.querySelector(".website-content5")
pagephoto.addEventListener('onLeave', function () {

    animateSkillBars();

  // 스킬바 애니메이션 함수
  function animateSkillBars() {
    console.log('스킬바 애니메이션 중');
    var skillBarContainers = document.querySelectorAll('.main_skill .skillbar-container');
    skillBarContainers.forEach(function (container) {
      var skill = container.querySelector('.skills');
      if (skill) {
        var targetWidth = container.getAttribute('data-percent');
        console.log(targetWidth)
        // 초기 width 값 설정
        gsap.set(skill, {
          width: "0%"
        });
        // GSAP를 사용한 애니메이션
        gsap.to(skill, {
          width: targetWidth,
          duration: 2,
          ease: "power2.out"
        });
      } else {
        console.log('컨테이너에서 스킬 요소를 찾을 수 없습니다');
      }
    });
  }
});

/////////////////////////////


// main
let boxs = gsap.utils.toArray(".boxs");

let tl_1 = gsap.to(boxs, {
  xPercent: -100 * (boxs.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".mains",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".mains").offsetWidth,
  },
});

// gsap.to(".b", {
//   x: 1000,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".gg",
//     markers: true,
//     pin: true,
//     containerAnimation: tl_1,
//     scrub: 1,
//   },
// });

/* 추가된 JavaScript */
// Vars
let speed = 0;
let acc = 0;
let hover = false;
let width;
let times;
let cloned = [];

const item = document.querySelector(".menu--item");
const word = item.querySelector(".menu--word");

// Calculate
const calculate = () => {
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

// Listeners
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

// Animate
const animate = () => {
  // Acceleration
  acc += 0.1;
  if (hover) {
    acc -= 0.35;
  }

  // Min/Max Acceleration
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