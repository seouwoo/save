// let observer=new IntersectionObserver(callback함수,options)
let observer = new IntersectionObserver(function (entrys) {
    console.log(entrys)
    entrys.forEach((entry) => {
        if (entrys.isIntersecing) {//감지되면 true
            console.log("타이틀이보인다")
        }
    })

})

let title = document.querySelector(".title");
//관찰대상 등록
observer.observe(title);