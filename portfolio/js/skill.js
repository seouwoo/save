gsap.registerPlugin(ScrollTrigger);

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
              duration: 10,
              ease: "power2.out"
            });
          });
        },
        onLeave: function () {
          gsap.set(skill, {
            width: "0%"
          });
        },
        onLeaveBack: () => {
          gsap.set(skill, {
            width: "0%"
          });
        },
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



