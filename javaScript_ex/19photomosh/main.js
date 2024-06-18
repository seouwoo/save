function mouseMove(){
    let cardMoves=document.querySelectorAll('.card_move')



    cardMoves.forEach(function(card){
        card.addEventListener('mousemove',function(e){
            let x = e.offsetX;
            let y = e.offsetY;
            //console.log(x)
            let cardClip=card.querySelector('.card_clip')
            //clip-path: circle(150px at 50% 50%);
            cardClip.style.clipPath=`circle(150px at ${x}px ${y}px)`;
        })
    })
}
mouseMove()