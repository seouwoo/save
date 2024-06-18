let pTag1=document.querySelector('.first-parallel');
let pTag2=document.querySelector('.second-parallel');

let imageArr1=[
    'http://makorang.com/img/main/main_12_btn_20.jpg', 
    'http://makorang.com/img/main/main_12_btn_19.jpg', 
    'http://makorang.com/img/main/main_12_btn_17.jpg', 
    'http://makorang.com/img/main/main_12_btn_16.jpg',
    'http://makorang.com/img/main/main_12_btn_15.jpg',
    'http://makorang.com/img/main/main_12_btn_14.jpg',
]

let imageArr2=[
    'http://makorang.com/img/main/main_12_btn_20.jpg', 
    'http://makorang.com/img/main/main_12_btn_19.jpg', 
    'http://makorang.com/img/main/main_12_btn_17.jpg', 
    'http://makorang.com/img/main/main_12_btn_16.jpg',
    'http://makorang.com/img/main/main_12_btn_15.jpg',
    'http://makorang.com/img/main/main_12_btn_14.jpg',
];
let count1=0;
let count2=0;
initImages(pTag1,imageArr1)
initImages(pTag2,imageArr2)

function initImages(element,imageArray){
    imageArray.push(...imageArray)
    imageArray.push(...imageArray)
    // console.log(ImgeArray)
    for (let i = 0; i < imageArray.length; i++) {
        let img=document.createElement('img');
        img.src=imageArray[i];
        img.alt=`Image${i + 1}`;
        element.appendChild(img)
        
    }
}


// let arr=[];
// arr.push(...textArr1)
// console.log(arr)



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

