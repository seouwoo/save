function spline(el) {
    this.el = el;
    this.cursor = {
        x: 0,
        y: 0,
    };
    this.elPos(); //위치값 초기화
};



console.log(spline)
//요소들의 초기 위치값 잡기
spline.prototype.elPos = function () {
    this.x = this.el.getBoundingClientRect().left;
    this.y = this.el.getBoundingClientRect().top;
}





spline.prototype.setCursorPos = function (x, y) {
    this.cursor.x = x;
    this.cursor.y = y;
    // console.log(this)
    return this;
}

spline.prototype.align = function () {
    let k1 = this.cursor.y - this.y;
    let k2 = this.cursor.x - this.x;
    //각도 구하기
    //rad는 라디안값이다.
    let rad = Math.atan( //아크탄젠트--> 탄젠트의 역수--> 각도를 구한다    
        // Math.abs()--> 절대값
        Math.abs(k2) / Math.abs(k1)
    )
    //라디안 값을 각도로 바꾸기(degree)
    let deg = rad * (180 / Math.PI)
    //end 각도 구하기

    //커서 (50,30) 사각형(100,70)
    //k2=50 - 100 => |-50|==>50
    //k1=30 - 70  => |-40|==>40
    //k2/k1  50/40 ==> 역수 (40/50)=0.8 (라이언)
    // 각도0.8(180 / Math.PI)=>45.8

    if (k1 > 0 && k2 > 0)
        deg = 360 - deg;
    else if (k1 <= 0 && k2 > 0)
        deg = 180 + deg;
    else if (k1 <= 0 && k2 <= 0)
        deg = 180 - deg;//134deg

    this.el.style.transform=`rotate(${deg}deg)`
}

function alignAll(x, y) {
    for (let i in sp) {
        sp[i].setCursorPos(x, y).align();

    }

}


window.addEventListener("mousemove", function (ev) {
    alignAll(ev.clientX, ev.clientY)

})





let s=0;
window.addEventListener('resize',function(){
    clearTimeout(s)
    //s=this.setTimeout(function(){},시간)//시간이 지나면 할일
    s=this.setTimeout(function(){
        for(let i in sp){
            sp[i].elPos();
        }
    },200)
})











let sp = [];

for (let i = 0; i < 180; i++) {
    let div = document.createElement("div");
    div.className = 'i' + i;
    document.querySelector('.w').appendChild(div)
    sp.push(new spline(div))
}

// console.log(sp)