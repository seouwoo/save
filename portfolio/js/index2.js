
gsap.registerPlugin(ScrollTrigger);


Splitting();


const fx21Titles = [...document.querySelectorAll('.content__title_base[data-splitting][data-effect21]')];
const fx22Titles = [...document.querySelectorAll('.content__title_base[data-splitting][data-effect22]')];

const fx24Titles = [...document.querySelectorAll('.content__title_base[data-splitting][data-effect24]')];


// GSAP Scroll Triggers
const scroll = () => {
    
    fx21Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const word of words) {
            
            const chars = word.querySelectorAll('.char');
        
            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

            gsap.fromTo(chars, {
                'will-change': 'opacity, transform', 
                opacity: 0,
                y: (position,_,arr) => -40*Math.abs(position-arr.length/2),
                z: () => gsap.utils.random(-1500,-600),
                rotationX: () => gsap.utils.random(-500,-200)
            }, 
            {
                ease: 'power1.inOut',
                opacity: 1,
                y: 0,
                z: 0,
                rotationX: 0,
                stagger: {
                    each: 0.06,
                    from: 'center'
                },
                scrollTrigger: {
                    trigger: word,
                    start: ' center center',
                    end: '+=100',
                    scrub: true,
                    // markers: true,
                }
            });

        }

    });

    fx22Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const word of words) {
            const chars = word.querySelectorAll('.char');
            const charsTotal = chars.length;

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
            
            gsap.fromTo(chars, {
                'will-change': 'transform', 
                x: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return (charsTotal%2 ? Math.abs(Math.ceil(charsTotal/2)-1-factor) : Math.abs(Math.ceil(charsTotal/2)-factor) )*200*(position < charsTotal/2 ? -1 : 1);
                },
                y: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return factor*60;
                },
                rotationY: -270,
                opacity:0,
                rotationZ: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return position < charsTotal/2 ? Math.abs(factor-charsTotal/2)*8 : -1*Math.abs(factor-charsTotal/2)*8;
                }
            }, 
            {
                ease: 'power2.inOut',
                x: 0,
                y: 0,
                rotationZ: 0,
                rotationY: 0,
                scale: 1,
                opacity:1,
                scrollTrigger: {
                    trigger: word,
                    start: ' center center',
                    end: '+=100',
                    scrub: true,
                    // markers: true,
                }
            });

        }

    });

    fx24Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        const charsTotal = chars.length;
        
        gsap.fromTo(chars, {
            'will-change': 'transform', 
            y: position => {
                const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                return (charsTotal/2-factor+6)*130;
            }
        }, 
        {
            ease: 'elastic.out(.4)',
            y: 0,
            stagger: {
                amount: 0.1,
                from: 'center'
            },
            scrollTrigger: {
                trigger: title,
                start: ' center center',
                end: '+=300',
                scrub: true,
                // markers: true,
            }
        });

    });

    
};

window.addEventListener("load",() => {
    scroll();
});