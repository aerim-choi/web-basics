// 슬라이드 이미지들 선택자
const $slides = document.querySelectorAll(".slide");

// 현재 보이는 슬라이드 index값
let current = 0;
//bar선택자
const $bar=document.querySelector(".bar");
//playbutton선택자
const $pbutton=document.querySelector(".play")


// 자동 슬라이드 기능
window.addEventListener("load", function () {
  setInterval(autoSlide, 3000);
});

const reset = () => {
  $slides.forEach((slide) => {
    slide.style.display = "none";
  });
};

const autoSlide = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
};

// 수동 슬라이드 기능: 화살표
// 왼쪽 화살표
const $arrowLeft = document.querySelector(".ctrl.prev");
// 오른쪽 화살표
const $arrowRight = document.querySelector(".ctrl.next");

const slideToRight = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
};

$arrowRight.addEventListener("click", slideToRight);

const slideToLeft = () => {
  reset();
  if (current === 0) {
    current = $slides.length;
  }
  current--;
  $slides[current].style.display = "block";
};

$arrowLeft.addEventListener("click", slideToLeft);




//헤더클래스바꾸기

const $headerhover= document.querySelector('.depth1');
const $headerEl = document.getElementsByTagName('li');
const dynamicMove= () =>{
  if(window.scrollY>=200){
    document.getElementById('h').className='header fixed'
    $headerhover.addEventListener("mouseover",function(){
      document.getElementById('h').className='header fixed open'
    })
  }
  else{
    document.getElementById('h').className='header'
    $headerhover.addEventListener("mouseover",function(){
      document.getElementById('h').className='header open'
    })
  }

}
window.addEventListener("scroll",dynamicMove);


 
//scrolltoTop
// class 이름이 scrollToTop인 요소 선택자
const $scrollToTop = document.querySelector(".btnTop");
//class 이름이 aside인 요소 선택자
const $asideEl=document.querySelector('.aside');
// scrollToTop 요소에 클릭 이벤트가 발생하면,
// 페이지 상단으로 smooth하게 이동
$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
  });
});

// 윈도우에 스크롤 이벤트가 발생하면,
// 스크롤 위치에 따라 scrollToTop 요소의 투명도 변경
window.addEventListener("scroll", function () {
  // 현재 스크롤 위치를 콘솔창에 출력해보세요
   console.log(window.scrollY);

  //만약 스크롤 위치가 700 이상이라면,
  if(window.scrollY >= 1200){
    $scrollToTop.className='btnTop fixedB'
    $asideEl.className='aside fixedB'
   }
  else{
    $scrollToTop.className='btnTop'
    $asideEl.className='aside'
  }
    
});


