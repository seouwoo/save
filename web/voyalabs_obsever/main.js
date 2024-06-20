// let observer=new IntersectionObserver(callback함수,options)
let observer=new IntersectionObserver(function(entry){
    if(entry.isIntersection){
        console.log("타이틀이보인다")
    }    
},options)

let title=document.querySelector(".title")
title.observer.observe;