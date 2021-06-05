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
const $header=document.querySelector('header');
const $headerhover= document.querySelector('.depth1');
const $headerEl = document.getElementsByTagName('li');
const dynamicMove= () =>{
  if(window.scrollY>=200){
    $header.className='header fixed'
    $headerhover.addEventListener("mouseover",function(){
      $header.className='header fixed open'
    })
  }
  else{
    $header.className='header'
    $headerhover.addEventListener("mouseover",function(){
      $header.className='header open'
    })
  }

}
window.addEventListener("scroll",dynamicMove);


 



//더보기

const $btnmore=document.querySelector(".more")
const $contArea=document.querySelector(".contArea")
const $cinner=document.querySelector(".c-inner")
const $circle=document.querySelectorAll(".circle")
let $morenum=0;

$btnmore.addEventListener("click", function (){
  $morenum++;
  
  if($morenum===1){
    $contArea.style.height=2215.35+"px";
    $cinner.style.height=2115.35+"px";
    for(let i=6;i<12;i++){
      $circle[i].style.display="block";
    }
    }
  else if($morenum===2){
    $contArea.style.height=3162.32+"px";
    $cinner.style.height=3071.32+"px";
    for(let i=12;i<18;i++){
      $circle[i].style.display="block";
    }
  }
  else if($morenum===3){
    $contArea.style.height=3437.4+"px";
    $cinner.style.height=3382.3+"px";
    $btnmore.style.display="none";
    for(let i=18;i<22;i++){
      $circle[i].style.display="block";
    }
  }
  else{
    console.log("그만눌르세요;;");
  }
});

//scrolltoTop
//class 이름이 scrollToTop인 요소 선택자
const $scrollToTop = document.querySelector(".btnTop");
//class 이름이 aside인 요소 선택자
const $asideEl=document.querySelector('.aside');
// scrollToTop 요소에 클릭 이벤트가 발생하면,
// 페이지 상단으로 smooth하게 이동
$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
 
});


const $footer=document.querySelector('.footer');



//윈도우에 스크롤 이벤트가 발생하면,
window.addEventListener("scroll" , function () {
  console.log("스크롤Y"+window.scrollY);
  console.log("윈도우높이"+window.innerHeight);
  console.log("footer"+$footer.offsetTop);
  if(window.scrollY+window.innerHeight>$footer.offsetTop){
    $scrollToTop.className='btnTop fixedB'
    $asideEl.className='aside fixedB'
  }
  else{
    $scrollToTop.className='btnTop'
    $asideEl.className='aside'

  }
});

//타이머 정지 플레이

