//cursor

const coords={x:0,y:0};

const circles= document.querySelectorAll(".circle")
const svg= document.querySelector(".cursor img")
let timer;

svg.style.visibility = "hidden";