// 햄버거바 아이콘 선택자
// html문서를document 바디안에있는요소를 불러올때 일단 도큐먼트에서 아이디가 비티엔 오픈인애를 불러와 그애를 오픈메뉴 El이라고 부를게
const openMenuEl =document.getElementById("btn--open")
//닫는 아이콘 선택자
const closeMenuEl=document.getElementById("btn--close")
//사이드메뉴 선택자
const navMenuEl=document.getElementById("nav__menu")

//클릭이라는 이벤트가 오픈메뉴엘리먼트에 발생을 했을때 익명의함수를 동작하게해줘
openMenuEl.addEventListener("click",function(){
    openMenuEl.style.display="none"
    closeMenuEl.style.display="block"
    navMenuEl.style.transform='translate(0)'
})
closeMenuEl.addEventListener("click",function(){
    openMenuEl.style.display="block"
    closeMenuEl.style.display="none"
    navMenuEl.style.transform='translate(-100%)'
})
