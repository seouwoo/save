let rotaionX=0;
let rotaionY=0;
let cube=document.querySelector('.box_area');
let contante=document.querySelector('.box_back h2');

//querySelector 클래스 부르는거(단독으로 부를때 용이)
//querySelectorAll는 싹 다 부르는거

    //transform: rotateX(0deg) rotateY(0deg)

function rotateXAxis(n){
    rotaionX=rotaionX + (90 * n)
    console.log(rotaionX)
    rotaionY=0;
    contante.style.transform=`rotateX(180deg) rotateY(180deg)`
    cube.style.transform=`rotateX(${rotaionX}deg) rotateY(0deg)`

}


function rotateYAxis(n){
    rotaionY=rotaionY + (90 * n)
    console.log(rotaionY)
    rotaionX=0;
    contante.style.transform=`rotateX(0deg) rotateY(0deg)`
    cube.style.transform=`rotateX(0deg) rotateY(${rotaionY}deg)`
}


function front(){
    rotaionX=0;
    rotaionY=0;
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`
}

