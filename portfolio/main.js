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
      start: "0% top ",
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
      start: "-=50%",
      end: "-=30%",
      ease: "linear",
      scrub: 1,
      y: 50,
      //   markers: true,
    },
    y: -50,
  });
});


const svgText = document.querySelector("#textOnPath1");
const svgText2 = document.querySelector("#textOnPath2");
console.log(svgText);


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
    duration: 0.2,
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

/////////////////content3

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



///////content2 ber

gsap.to(ball, {
  scrollTrigger: {
    trigger: '.website-content3',
    start: 'top 20%',
    end: '80% top',
    onUpdate: () => {
      ball.style.display = `none`
    },
    markers: true,
    scrub: 1,
    onLeaveBack: () => {
      console.log("onLeaveBack")
      ball.style.display = `block`
    },
    onLeave: () => {
      console.log("onLeave")
      ball.style.display = `block`
    },
  },

});



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

  gsap.set(containers, {
    autoAlpha: 1
  })
  gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: ".website-content3",
        start: 'top center',
        end: '30% top',
        scrub: 1,
      },
      delay: 2,
    })
    .from(".hi__location--lat", {
      x: 100,
      autoAlpha: 0,
      ease: "power4",
      duration: 1
    })
    .from(
      ".hi__location--long", {
        x: -100,
        autoAlpha: 0,
        ease: "power4",
        duration: 1
      },
      0
    )
    .from(
      cuboid, {
        y: winH,
        duration: 3,
        stagger: 0.14,
        ease: "elastic(0.4,0.3)"
      },
      0
    );

  gsap.to(
    cuboid, {
      rotateX: -360,
      duration: 8,
      repeat: -1,
      ease: "none"
    });

  gsap.fromTo(
    cuboid, {
      rotateY: 8,
      rotate: -10
    }, {
      rotateY: -8,
      rotate: 10,
      duration: 2.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    }
  );
}
init();

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


///////클릭하면 hobbyClose
const images = document.querySelectorAll(".item");
const imageSize = images.length;
const degree = 360 / imageSize;


const hobby = document.querySelector('.popup_hobby')

const inits = () => {
  const timeline = gsap.timeline();
  images.forEach((image, index) => {
    const sign = Math.floor((index / 2) % 2) ? 1 : -1;
    const value = Math.floor((index + 4) / 4) * 4
    const rotation = index > imageSize - 3 ? 0 : sign * value

    gsap.set(image, {
      rotation: rotation,
      scale: 0.5,

    })
    timeline.to(image, {
      markers: true,
      autoAlpha: 1
    }, 0)
    timeline.from(
      image, {
        x: () => (index % 2 ? window.innerWidth + image.clientWidth * 4 : -window.innerWidth - image.clientWidth * 4),
        y: () => window.innerHeight - image.clientHeight,
        rotation: index % 2 ? 200 : -200,
        scale: 4,
        duration: 1,
        opacity: 1,
        delay: 0.15 * (index / 2),
      }, 0
    );
    let rotationAngle = index * degree;
    timeline.to(image, {
      scale: 1,
      duration: 0,
    }, 0.17 * (imageSize / 2 - 1) + 1)

    timeline.to(image, {
      transformOrigin: "center 200vh",
      rotation: index > imageSize / 2 ? -degree * (imageSize - index) : rotationAngle,
      duration: 1,
      autoAlpha: 1,
      ease: "power1.out",
    }, 0.15 * (imageSize / 2 - 1) + 1)
  })
}

Draggable.create(".items", {
  type: "rotation",
  onDragStart: function () {
    start = this.rotation;
  },
  onDragEnd: function () {
    const rotation = this.rotation;
    const offset = Math.abs(rotation - start);
    if (rotation > start) {
      if (rotation - start < degree / 2) {
        gsap.to(".items", {
          rotation: `-=${offset}`,
        });
      } else {
        gsap.to(".items", {
          rotation: `+=${2 * degree - offset}`,
        });
      }
    } else {
      if (Math.abs(rotation - start) < degree / 2) {
        gsap.to(".items", {
          rotation: `+=${offset}`,
        });
      } else {
        gsap.to(".items", {
          rotation: `-=${2 * degree - offset}`,
        });
      }
    }
  },

});

//클릭하면 popupOpen_personality
/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => {
  const {
    clientX,
    clientY
  } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {
    duration: 1000,
    fill: "forwards"
  });
}

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".popup_personality h1").onmouseover = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

//클릭하면 popupOpen_hobby
let Openhobby = document.querySelector(".popupOpen_hobby");

Openhobby.addEventListener("click", function (e) {
  inits();

  e.preventDefault();
  document.querySelector('.popup_hobby').classList.add("fade")
})

let hobbyClose = document.querySelector('.popup_hobby .close')
hobbyClose.addEventListener("click", function (e) {

  e.preventDefault();
  document.querySelector('.popup_hobby').classList.remove("fade")
})

//클릭하면 popupOpen_skill
console.log("JavaScript file loaded");

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');

  let openSkill = document.querySelector(".popupOpen_skill");
  let popupSkill = document.querySelector('.popup_skill');
  let skillClose = document.querySelector('.popup_skill .close');

  openSkill.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Opening skill popup");
    popupSkill.classList.add("fade");
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    animateSkillBars(); // 스킬바 애니메이션 시작
  });

  skillClose.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Closing skill popup");
    popupSkill.classList.remove("fade");
    document.body.style.overflow = ''; // 배경 스크롤 다시 활성화
  });

  // 스킬바 애니메이션 함수
  function animateSkillBars() {
    console.log('Animating skill bars');
    var skillBarContainers = document.querySelectorAll('.popup_skill .skillbar-container');
    skillBarContainers.forEach(function (container) {
      var skill = container.querySelector('.skills');
      if (skill) {
        var targetWidth = container.getAttribute('data-percent');
        // console.log('Animating skill bar to:', targetWidth);


        // 초기 width 값 설정
        gsap.set(skill, {
          width: "0%"
        });

        // GSAP를 사용한 애니메이션
        gsap.to(skill, {
          width: targetWidth,
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            // console.log('Current width:', skill.style.width);
          }
        });
      } else {
        console.log('No skill element found in container');
      }
    });
  }

  // .popupOpen_skill 요소를 클릭하면 animateSkillBars() 함수가 실행됩니다.
  openSkill.addEventListener("click", animateSkillBars);
});
//클릭하면 popupOpen_personality
let Openpersonality = document.querySelector(".popupOpen_personality");

Openpersonality.addEventListener("click", function (e) {

  e.preventDefault();
  document.querySelector('.popup_personality').classList.add("fade")
})

let personalityClose = document.querySelector('.popup_personality .close')
personalityClose.addEventListener("click", function (e) {

  e.preventDefault();
  document.querySelector('.popup_personality').classList.remove("fade")
})