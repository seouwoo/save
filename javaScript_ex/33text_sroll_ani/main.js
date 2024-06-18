let pTag1=document.querySelector('.first-parallel');
let pTag2=document.querySelector('.second-parallel');

let textArr1='Welecom Hello Welecom Hello Welecom Hello Welecom Hello'.split(' ');
console.log(textArr1)

let textArr2='My Portfolio My Portfolio My Portfolio My Portfolio'.split(' ');
console.log(textArr2)

let count1=0;
let count2=0;
initTexts(pTag1,textArr1)
initTexts(pTag2,textArr2)

function initTexts(element,textArray){
    textArray.push(...textArr1)
    // console.log(textArray)
    for (let i = 0; i < textArray.length; i++) {
        //자바스크립트에서 띄어쓰기 &nbsp;
        //자바스크립트에서 공백 \u00A0
        element.innerHTML += `${textArray[i]}`
        
    }
}

let arr=[];
arr.push(...textArr1)
console.log(arr)



function animate(){

    count1++;
    count2++;


    count1=marqueeText(count1,pTag1, -1)
    count2=marqueeText(count2,pTag2, 1)
    // window.requestAnimationFrame(animate)//생략가능
    requestAnimationFrame(animate)
}





function marqueeText(count,elemnt,direction){
    //scrollHeight --> 보이지 않는 공간까지 공간의 높이값
    //scrollWidth -->  보이지 않는 공간까지 공간의 넓이값
    if(count>elemnt.scrollWidth/2){
        count=0;
        elemnt.style.transform=` translate(0,0)`
    }
    elemnt.style.transform=` translate(${count * direction}px,0)`;
    return count;
}



animate()

