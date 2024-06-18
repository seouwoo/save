gsap.registerPlugin(Flip);
// const items = gsap.utils.toArray(".item"),
const items = document.querySelectorAll(".item"),
      details = document.querySelector('.detail'),
      detailContent = document.querySelector('.content'),
      detailImage = document.querySelector('.detail img'),
      detailTitle = document.querySelector('.detail .title'),
      detailSecondary = document.querySelector('.detail .secondary'),
      detailDescription = document.querySelector('.detail .description');
    console.log(items)
let activeItem; //어떤 항목이 열려있는지 추적함

gsap.set(detailContent,{yPercent:-100})

function showDetails(item){

    let onLoad=()=>{
       // Flip.fit(무엇을, 어디에, 어떻게)
       //details의 자식인 detailImage를 item에 맞추기
       //fitChild: 자식요소인 detailImage를 item에 맞춘다는 의미
        Flip.fit(details, item, {scale:true,fitChild:detailImage})

        //초기값을(캡쳐)-- F
        let state=File.getState(details)
        
        gasp.set(details,{clearProps:true})//애니메이션이 끝난 후에 대상 객체의 모든 애니와 관련된 속성을 초기화
        //2)
        // gsap.set(details, {clearProps: true}) 코드는 GSAP(GreenSock Animation Platform) 라이브러리에서 사용되는 코드입니다. 이 코드는 gsap 객체의 set 메서드를 호출하며, 애니메이션의 초기 상태를 설정합니다.
        // 여기서 사용된 매개변수는 다음과 같습니다:
        // details: 애니메이션 대상 객체입니다. 이 객체에 대한 애니메이션 속성이 설정됩니다.
        // {clearProps: true}: 옵션 객체로, 여러 가지 설정을 포함할 수 있습니다. 여기서는 clearProps 속성을 사용하여 애니메이션이 끝난 후 대상 객체의 모든 속성을 초기 상태로 되돌릴 것인지를 결정합니다. clearProps를 true로 설정하면 애니메이션이 끝난 후 대상 객체의 모든 속성이 초기값으로 돌아갑니다.
    }

}
items.forEach((item)=>item.addEventListener("click",()=>showDetails(item)))

gsap.to(".app",{autoAlpha:1,duration:0.2})
gsap.from(".item",{autoAlpha:0,yPercent:30,stagger:0.05})


