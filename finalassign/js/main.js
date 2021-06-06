//더보기

const $btnmore=document.querySelector(".more")
const $contArea=document.querySelector(".contArea")
const $cinner=document.querySelector(".c-inner")
const $circleEl=document.querySelectorAll(".circle")
let $morenum=0;

$btnmore.addEventListener("click", function (){
  $morenum++;
  
  if($morenum===1){
    $contArea.style.height=2215.35+"px";
    $cinner.style.height=2115.35+"px";
    for(let i=6;i<12;i++){
      $circleEl[i].style.display="block";
    }
    }
  else if($morenum===2){
    $contArea.style.height=3162.32+"px";
    $cinner.style.height=3071.32+"px";
    for(let i=12;i<18;i++){
      $circleEl[i].style.display="block";
    }
  }
  else if($morenum===3){
    $contArea.style.height=3437.4+"px";
    $cinner.style.height=3382.3+"px";
    $btnmore.style.display="none";
    for(let i=18;i<21;i++){
      $circleEl[i].style.display="block";
    }
  }
  else{
    console.log("그만눌르세요;;");
  }
});
//다크모드
let toggleclicknum=0;
const $toggleEl=document.querySelector('.round')
const $headerEl=document.querySelector('.menu');
const $headerEl2=document.querySelectorAll(".depth1>li .dth1")
const $mainEl=document.querySelector('main');
const $contAreaEl=document.querySelector('.contArea')
const $cinnerEl=document.querySelector('.c-inner')
const $titEl=document.querySelectorAll('.tit')
const $titMainEl=document.querySelector('.titMain');
const $btnTopEl=document.querySelector('.btnTop');
const $srchEl=document.querySelector('.srch');
const $goDeliveryEl=document.querySelector(".goDelivery");
console.log($goDeliveryEl);
console.log($srchEl);
$toggleEl.addEventListener("click",function(){
  toggleclicknum++
  if(toggleclicknum%2===0){
    console.log("다크모드해제");
    $headerEl.style.background="#ffffff"
    
    $headerEl2.forEach((el)=>{
      el.style.color="#292929";
    })
    $mainEl.style.background="#ffffff";
    $contAreaEl.style.background="#ffffff";
    $cinnerEl.style.background="#ffffff";
    $circleEl.forEach((el)=>{
      el.style.background="#ffffff";
    })
    $titEl.forEach((el)=>{
      el.style.color="black";
    })
    $btnTopEl.style.background="url(../images/btn_top.png)0 14px no-repeat"
    $srchEl.style.background="url(../images/ico_search.png) 0 0 no-repeat"
    $goDeliveryEl.className="goDelivery";
    $titMainEl.style.color="#292929"
  }
  else{
    console.log("다크모드실행");
    $headerEl.style.background="#292929"
    $headerEl2.forEach((el)=>{
      el.style.color="#e2e2e2";
    })
    $mainEl.style.background="#292929";
    $contAreaEl.style.background="#292929";
    $cinnerEl.style.background="#292929";
    $circleEl.forEach((el)=>{
      el.style.background="#292929";
    })
    $titEl.forEach((el)=>{
      el.style.color="#e2e2e2";
    })
    $btnTopEl.style.background="url(../images/btn_top2.png)0 14px no-repeat"
    $srchEl.style.background="url(../images/ico_search2.png) 0 0 no-repeat"
    $goDeliveryEl.className="goDelivery2";
    $titMainEl.style.color="#e2e2e2";
  }

})



//타이머 정지 플레이
const $playbutton=document.querySelector('.play');
const $pausebutton=document.querySelector('.pause');
const $bar=document.querySelector('.bar'); 
const $animating=document.querySelector(".animating");
console.log($bar)
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".ctrl.next",
    prevEl: ".ctrl.prev",
  },
 
});
swiper.on('slideChange', function () {
  $bar.classList.remove("animating"),
  void $bar.offsetWidth,
  $bar.classList.add('animating');
});

$pausebutton.addEventListener("click",function(){
  $pausebutton.style.display="none";
  $playbutton.style.display="block";
  swiper.autoplay.stop();
  $bar.classList.remove("animating");
  
  
})
$playbutton.addEventListener("click",function(){
  $playbutton.style.display="none";
  $pausebutton.style.display="block";
  swiper.autoplay.start()
  $bar.classList.add("animating");
 
  
})

//헤더클래스바꾸기
const $header=document.querySelector('header');
const $headerhover= document.querySelector('.depth1');

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
//처음헤더설정
$headerhover.addEventListener("mouseover",function(){
  $header.className='header open'
})
window.addEventListener("scroll",dynamicMove);


 





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
  if(window.scrollY+window.innerHeight>$footer.offsetTop){
    $scrollToTop.className='btnTop fixedB'
    $asideEl.className='aside fixedB'
    
  }
  else{
    $scrollToTop.className='btnTop'
    $asideEl.className='aside'

  }
});





