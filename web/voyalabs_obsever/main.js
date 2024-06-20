// let observer=new IntersectionObserver(callback함수,options)
let observer = new IntersectionObserver(function (entrys) {
    console.log(entrys)//배열//화면에서 보이거나 사라지거나
    entrys.forEach((entry) => {
        if (entry.isIntersecting) {//감지되면 true//화면에 보일때
            console.log("타이틀이보인다")
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })

})

let title = document.querySelector(".title");
//관찰대상 등록
observer.observe(title);