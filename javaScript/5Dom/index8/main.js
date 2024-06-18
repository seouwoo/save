//작은 이미지들 가져오기

let imgs=document.querySelectorAll('.small_img')
//console.log(imgs)

// for(let i=0; i<imgs.length; i++){
//     imgs[i].addEventListener('click',function(){
//         console.log(this.getAttribute('data-image'))
//         document.querySelector('#big_img').src=this.getAttribute('data-image')
//     })

// }

imgs.forEach(function(elem){
    elem.addEventListener('click',function(){
        //data-image
        console.log(this.getAttribute('data-image'))
        //console.log(this.dataset.image)
        //document.querySelector('#big_img').src=this.dataset.image
        document.querySelector('#big_img').setAttribute('src',this.dataset.image)
    })
})

// imgs.forEach(function(a,b,c){
//     // a:배열의 요소들은 순서대로 하나씩 가져옴
//     // b:순서대로 들어온 a의 index번호
//     // c:배열 자체
// })
