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
let imgTotal = 1; //로딩값
let current = 0;
let progressTimer;
let topValue;

progressTimer = setInterval(updateProgress, 1000 / 60)


function updateProgress() {
  imgLoaded++;
  let target = (imgLoaded / imgTotal) * 100;

  current += (target - current) * 0.01;
  let sp;
  if (current > 99.9) {
    clearInterval(progressTimer)
    container.classList.add("progress-complete")
    gsap.to(container, {
      duration: 0.5,
      top: "-100%",
      ease: "none",
      onUpdate: function scrollPrevent() {
        showLoadingScreen();
        sp = requestAnimationFrame(scrollPrevent) 
        setTimeout(() => {
          cancelAnimationFrame(sp);
          hideLoadingScreen();
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

///////////////////////////
const svgText = document.querySelector("#textOnPath1");


gsap.fromTo(
  [svgText], {
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
      pin: true
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
    trigger: '#animationWindow',
    start: '+=10%',
    end: '+=100%',
    duration: 5,
    scrub: 2,
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
    scale: 0.3,
    rotation: 90,
    top: 0,
    bottom:0,
  }, {
    scrollTrigger: {
      trigger: conScale,
      start: 'top 100%',
      end: '+=100%',
      scrub: 1,
      markers: true,
      top:0,
      bottom:0,
    },
    x: 0,
    y: 0,
    scale: 1,
    top:0,
    height: "110vh",
    bottom:0,
    rotation: 0,
    ease: 'power3.out',
    // duration: 1,
  })

})


///////각각 이미지 애니
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
          delay: 2,
        }
      })
      .to(img, {
        y: 0,
        duration: 2,
        delay: imgDey,
        ease: 'power4.out'
      })
  })


  gsap.to(imgs, {
    xPercent: -97 * (imgs.length - 2),
    scrollTrigger: {
      trigger: ".website-content4",
      start: "0% 0%",
      end: "+=3000",
      scrub: 1,
      pin: true,
      // markers: true,
    }
  })
})





////////////////skill

let pageskill = document.querySelectorAll('.skillbar-container');

pageskill.forEach(function (skillber) {
  let skill = skillber.querySelectorAll('.skills');
  let targetWidth = skillber.getAttribute('data-percent');

  if (skill) {
    gsap.set(skill, {
      width: "0%",
    });
    gsap.to(skill, {
      scrollTrigger: {
        trigger: ".website-content5",
        start: "top 80%", // 요소가 뷰포트의 80% 지점에 도달할 때 트리거됨
        end: "bottom 20%", // 요소가 뷰포트의 20% 지점에 있을 때 종료됨
        onEnter: function () {
          // 2초 뒤에 애니메이션 시작
          setTimeout(function () {
            gsap.to(skill, {
              width: targetWidth,
              duration: 5,
              ease: "power2.out"
            });
          });
        },
        // onLeave: function () {
        //   gsap.set(skill, {
        //     width: "0%"
        //   });
        // },
        // onLeaveBack: () => {
        //   gsap.set(skill, {
        //     width: "0%"
        //   });
        // },
        // markers: true,
      },
    });
  }
});


//뒷배경
{
  // body element
  const body = document.body;

  // helper functions
  const MathUtils = {
    // linear interpolation
    lerp: (a, b, n) => (1 - n) * a + n * b,
    // distance between two points
    distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
  }

  // get the mouse position
  const getMousePos = (ev) => {
    let posx = 0;
    let posy = 0;
    if (!ev) ev = window.event;
    if (ev.pageX || ev.pageY) {
      posx = ev.pageX;
      posy = ev.pageY;
    } else if (ev.clientX || ev.clientY) {
      posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
      posy = ev.clientY + body.scrollTop + docEl.scrollTop;
    }
    return {
      x: posx,
      y: posy
    };
  }

  // mousePos: current mouse position
  // lastMousePos: last last recorded mouse position (at the time the last image was shown)
  let mousePos = lastMousePos = {
    x: 0,
    y: 0
  };

  // update the mouse position
  window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));

  // gets the distance from the current mouse position to the last recorded mouse position
  const getMouseDistance = () => MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

  class Image {
    constructor(el) {
      this.DOM = {
        el: el
      };
      // image deafult styles
      this.defaultStyle = {
        x: 0,
        y: 0,
        opacity: 1
      };
      // get sizes/position
      this.getRect();
      // init/bind events
      this.initEvents();
    }
    initEvents() {
      // on resize get updated sizes/position
      window.addEventListener('resize', () => this.resize());
    }
    resize() {
      // reset styles
      TweenMax.set(this.DOM.el, this.defaultStyle);
      // get sizes/position
      this.getRect();
    }
    getRect() {
      this.rect = this.DOM.el.getBoundingClientRect();
    }
  }

  class ImageTrail {
    constructor() {
      // images container
      this.DOM = {
        content: document.querySelector('.skill_content')
      };
      // array of Image objs, one per image element
      this.images = [];
      [...this.DOM.content.querySelectorAll('div.content__img')].forEach(img => this.images.push(new Image(img)));
      // total number of images
      this.imagesTotal = this.images.length;
      // upcoming image index
      this.imgPosition = 0;
      // zIndex value to apply to the upcoming image
      this.zIndexVal = 1;
      // mouse distance required to show the next image
      this.threshold = 100;
      this.showNextImage();
      // render the images
      requestAnimationFrame(() => this.render());
    }
    render() {
      // get distance between the current mouse position and the position of the previous image
      let distance = getMouseDistance();

      // if the mouse moved more than [this.threshold] then show the next image
      if (distance > this.threshold) {
        this.showNextImage();
      }

      // loop..
      requestAnimationFrame(() => this.render());
    }
    showNextImage() {
      // show image at position [this.imgPosition]
      const img = this.images[this.imgPosition];
      // kill any tween on the image
      TweenMax.killTweensOf(img.DOM.el);

      new TimelineMax()
        // show the image
        .set(img.DOM.el, {
          opacity: 1,
          x: mousePos.y > lastMousePos.y ? 100 : -100,
          zIndex: this.zIndexVal
        }, 0)
        // animate position
        .to(img.DOM.el, 1.2, {
          ease: Expo.easeOut,
          x: 0
        }, 0);

      ++this.zIndexVal;
      this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;

      lastMousePos = mousePos;
    }
  }

  /***********************************/
  /********** Preload stuff **********/

  // Preload images
  const preloadImages = () => {
    return new Promise((resolve, reject) => {
      imagesLoaded(document.querySelectorAll('.content__img'), {
        background: true
      }, resolve);
    });
  };

  // And then..
  preloadImages().then(() => {
    // Remove the loader
    document.body.classList.remove('loading');
    new ImageTrail();
  });
}
/////////////////////////

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
const abut_animate = () => {
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
  requestAnimationFrame(abut_animate);
};
abut_animate();




//////////// main


//////Video
document.addEventListener('DOMContentLoaded', (event) => {
  const videos = document.querySelectorAll('.myVideo');

  videos.forEach(video => {
    video.addEventListener('mouseover', () => {
      video.play();
    });

    video.addEventListener('mouseout', () => {
      video.pause();
    });
  });
});

////sub
let listitem = document.querySelectorAll('.listitem')
listitem.forEach(function (listitem) {
  gsap.fromTo(listitem, {
    y: -100,
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: listitem,
      start: '50% 100%',
      end: '50% 100%',
      scrub: 1,
      duration: 2,
      // markers: true,
    },
    y: 0,
    opacity: 1,
    ease: 'power3.out',
  })

})
document.addEventListener('DOMContentLoaded', (event) => {
  const listItems = document.querySelectorAll('.listitem');

  listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      gsap.to(item, {
        scale: 0.9,
        duration: 0.2,
        ease: "linear",
      });
    });

    item.addEventListener('mouseout', () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.2,
        ease: "linear",
      });
    });
  });
});


//////// main_hero
gsap.to(".main_hero .hero", {
  scrollTrigger: {
    trigger: ".main_hero",
    scrub: true,
    pin: true,
    start: "center center",
    end: "+=100%",
    toggleClass: "active",
    ease: "power2",
    // markers:true,
    duration: 2,
  ease: "power1.inOut"
  }
});


gsap
  .timeline({
    scrollTrigger: {
      trigger: ".main_hero",
      scrub: 1,
      duration: 2,
  ease: "power1.inOut"
    }
  })
  .to(".heros", {
    scale: 1,
    rotate: 270
  })
  .to(
    ".heros img",
    {
      rotate: -270
    },
    0
  );

/////footer
let marqueeInners = document.querySelectorAll('.marquee--inner');

let counts = [];

marqueeInners.forEach((element, index) => {
    initTexts(element);
    counts.push(0);
});

function initTexts(element) {
    let text = element.innerHTML.trim(); // 텍스트를 하나의 문자열로 합침
    element.innerHTML = text + ' ' + text; // 텍스트를 두 번 반복하여 무한 스크롤 효과를 준비
}

function animate() {
    marqueeInners.forEach((element, index) => {
        counts[index]++;
        counts[index] = marqueeText(counts[index], element, index % 2 === 0 ? -1 : 1);
    });
    requestAnimationFrame(animate);
}

function marqueeText(count, element, direction) {
    let width = element.scrollWidth / 2; // 텍스트 너비의 절반
    if (direction === -1) {
        if (count > width) {
            count = 0;
        }
    } else {
        if (count > 0) {
            count = -width;
        }
    }
    element.style.transform = `translate(${count * direction}px, 0)`;
    return count;
}

animate();



class TypeIt {
  constructor(text, typing, speed) {
    this.text = text;
    this.typing = typing;
    this.speed = speed;
    this.current = 0;
    this.cont = document.querySelector(this.typing);
  }

  run() {
    gsap.to(this, {
      current: this.text.length,
      duration: this.text.length * this.speed / 1000,
      ease: "none",
      onUpdate: () => this.cont.innerHTML = this.text.slice(0, Math.floor(this.current)),
      scrollTrigger: {
        trigger: this.cont,
        start: "top 80%",
        end: "+=100%",
        // scrub: true,
        // markers: true
      },
      repeat: -1, // 무한 반복
      repeatDelay: 3 // 3초 지연 후 반복
    });
  }
}

const demoText = new TypeIt('궁금하신 사항은 언제든지 편하게 연락 부탁드립니다!', '.text .typing', 100);
demoText.run();