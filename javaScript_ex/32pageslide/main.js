let contentWraps = document.querySelectorAll('.contentWrap');



contentWraps[0].querySelectorAll('img').forEach((img) => img.classList.add('active'))


contentWraps.forEach((contentWrap, index) => {
    let imgArr = contentWrap.querySelectorAll('img');
    let title = document.querySelector('.textWrap h2');
    let pageNum=0;
    let totalNum=contentWraps.length;// 각 contentWraps 이미지 수

    //초기설정값

    // title.textContent//글자만 넣는것 (태그 불가)innerHTML는 태그도 넣을수 있음
    title.innerHTML='PAGE: '+ (pageNum + 1) + "/" + totalNum;

    //다음버튼
    document.querySelector('.buttonWrap .btn2').addEventListener("click",()=>{
        if(pageNum<totalNum - 1){
            pageNum++;
        }else{
            pageNum = 0;
        }
        updeteGallery(imgArr,title,pageNum,totalNum)
    })
    //이전버튼
    document.querySelector('.buttonWrap .btn1').addEventListener("click",()=>{
        if(pageNum<totalNum - 1){
            pageNum--;
        }else{
            pageNum = totalNum - 1;
        }
        updeteGallery(imgArr,title,pageNum,totalNum)
    })
})



function updeteGallery(imgArr,title,pageNum,totalNum){
    imgArr.forEach((img)=>img.classList.remove('active'))
    contentWraps[pageNum].querySelectorAll('img').forEach((img) => img.classList.add('active'))
    title.innerHTML='PAGE: '+ (pageNum + 1) + "/" + totalNum;

}