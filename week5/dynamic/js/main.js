//헤더선택자
const headerEl=document.getElementById("header")
//로고 이미지 선택자
const logoEl=document.getElementById("logo")

// 스크롤이벤트는 윈도우에서 발생함 윈도우는 화면보이는창
window.addEventListener("scroll",function(){
    if(window.scrollY>=300){
        headerEl.style.height='160px'
        logoEl.style.height='120px'
        logoEl.style.width='120px'
    }    
    else{
        headerEl.style.height='400px'
        logoEl.style.height='300px'
        logoEl.style.width='300px'
    }
})