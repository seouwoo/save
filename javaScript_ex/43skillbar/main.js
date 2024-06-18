gsap.registerPlugin(ScrollTrigger);


// 한번만 실행하게 수정할것 
let executed = false;

function animateSkills (){
    document.querySelectorAll('.skill-per').forEach((perElement)=>{
        gsap.to(perElement,{
            duration:2,
            width:perElement.getAttribute('per') + "%",
            onUpdate:function(self){
                // Math.ceil(): 5보다 작더라도 올림
                // parseInt(36.333)==>정수
                // perElement.setAttribute("per" , Math.ceil(self.progress() * parseInt(perElement.style.width)) + "%")
            }
        })
    })
}




ScrollTrigger.create({
    trigger:".main",
    start:"top 30%",
    onEnter:()=>{
        if(!executed){
            animateSkills();
            executed=true
        }
    }
    
})
