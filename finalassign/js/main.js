//더보기구현
const $btnmoreEl=document.querySelector(".more") //+버튼 선택자
const $contAreaEl=document.querySelector(".contArea") //컨텐츠전체영역 선택자
const $cinnerEl=document.querySelector(".c-inner") //컨텐츠 내부영역 선택자
const $circleEl=document.querySelectorAll(".circle")//컨텐츠 내용이 담긴 전체 gird 선택자
let $morenum=0; //+버튼 누르는 횟수 

$btnmoreEl.addEventListener("click", function (){ //+버튼 클릭하면 익명의 함수실행
  $morenum++;   //+버튼 누르는 횟수 증가
  if($morenum===1){
    $contAreaEl.style.height=2215.35+"px"; //컨텐츠 전체영역 높이 증가
    $cinnerEl.style.height=2115.35+"px";   //컨텐츠 내부영역 높이 증가
    for(let i=6;i<12;i++){
      $circleEl[i].style.display="block";   //컨텐츠 내용인 gird 6개 보이게 한다.
    }
    }
  else if($morenum===2){
    $contAreaEl.style.height=3162.32+"px";
    $cinnerEl.style.height=3071.32+"px";
    for(let i=12;i<18;i++){
      $circleEl[i].style.display="block";  //컨텐츠 내용인 gird 6개 보이게 한다.
    }
  }
  else if($morenum===3){
    $contAreaEl.style.height=3437.4+"px";
    $cinnerEl.style.height=3382.3+"px";
    $btnmoreEl.style.display="none";  //+버튼 숨김
    for(let i=18;i<21;i++){
      $circleEl[i].style.display="block"; //컨텐츠 내용인 gird 6개 보이게 한다.
    }
  }
});
//다크모드구현 
let toggleclicknum=0; //다크모드 토글버튼 누르는 횟수
const $toggleEl=document.querySelector('.round')  //다크모드 버튼 선택자
const $headerEl=document.querySelector('.menu'); //헤더메뉴영역 선택자
const $headerEl2=document.querySelectorAll(".depth1>li .dth1") //헤더 숨겨진 메뉴 영역 선택자
const $mainEl=document.querySelector('main'); //메인영역(슬라이더영역) 선택자
//컨텐츠영역은 더보기구현에서 선택자 가져옴
const $titMainEl=document.querySelector('.titMain'); //McDonald' Live영역 선택자
const $titEl=document.querySelectorAll('.tit') //gird안에 있는 글씨 선택자
const $btnTopEl=document.querySelector('.btnTop'); //scroll to Top 선택자(플로팅배너)
const $srchEl=document.querySelector('.srch'); //헤더에 있는 search 선택자
const $goDeliveryEl=document.querySelector(".goDelivery"); //플로팅배너 선택자
 
$toggleEl.addEventListener("click",function(){ //다크모드 토글버튼이 클릭되면 익명의 함수실행
  toggleclicknum++ //토글버튼클릭횟수 증가
  if(toggleclicknum%2===0){  //짝수번 눌러졌다면 다크모드해제
    //선택자들 알맞게 색상,이미지 변경 
    $headerEl.style.background="#ffffff"
    
    $headerEl2.forEach((el)=>{
      el.style.color="#292929";
    })
    $mainEl.style.background="#ffffff";
    $contAreaEl.style.background="#ffffff";
    $cinnerEl.style.background="#ffffff";
    $circleEl.forEach((el)=>{  //grid가 여러개라서 하나씩 탐색해서 바꿔줘야한다.
      el.style.background="#ffffff";
    })
    $titEl.forEach((el)=>{  //gird가 여러개라서 grid안에 글씨도 하나씩 탐색해서 바꿔줘야 한다.
      el.style.color="black";
    })
    $btnTopEl.style.background="url(../images/btn_top.png)0 14px no-repeat" //이미지변경
    $srchEl.style.background="url(../images/ico_search.png) 0 0 no-repeat"
    $goDeliveryEl.className="goDelivery";
    $titMainEl.style.color="#292929"
  }
  else{ //홀수번 눌러졌다면 다크모드 실행
    //선택자들 알맞게 색상,이미지 변경 
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

//scrolltoTop 구현 
const $footer=document.querySelector('.footer');//class 이름이 footer인 요소 선택자
const $asideEl=document.querySelector('.aside');//class 이름이 aside인 요소 선택자(플로팅메뉴 GoDelivery 전체 영역)
// btnTopEl 요소에 클릭 이벤트가 발생하면,
// 페이지 상단으로 smooth하게 이동
$btnTopEl.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
 
});
//윈도우에 스크롤 이벤트가 발생하면,
window.addEventListener("scroll" , function () {
  if(window.scrollY+window.innerHeight>$footer.offsetTop){ //만약 footer영역 맨위에 위치보다 scrollY+window.innerHeight 크기가 더크다면
    $btnTopEl.className='btnTop fixedB' // 고정된 스타일이 담긴 css가 적용된 클래스로 클래스명을 바꿔준다.
    $asideEl.className='aside fixedB' //고정된 스타일이 담긴 css가 적용된 클래스로 클래스명을 바꿔준다.
    
  }
  else{
    $btnTopEl.className='btnTop'  // 고정되지 않은 스타일이 담긴 css가 적용된 클래스로 클래스명을 바꿔준다.
    $asideEl.className='aside' //고정되지 않은 스타일이 담긴 css가 적용된 클래스로 클래스명을 바꿔준다.

  }
});

//슬라이더와 슬라이더타이머 구현
const $playbutton=document.querySelector('.play'); //play버튼 선택자
const $pausebutton=document.querySelector('.pause'); //pause버튼 선택자
const $bar=document.querySelector('.bar');  //bar선택자
const $animating=document.querySelector(".animating"); //animating 선택자
//swipter 라이브러리 사용
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop:true, //마지막슬라이더 일때 맨처음슬라이더로 무한반복
  centeredSlides: true,
  autoplay: {
    delay: 5000, //5초주기로 자동으로 넘어간다.
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".ctrl.next",
    prevEl: ".ctrl.prev",
  },
 
});
//바 움직이기 
swiper.on('slideChange', function () {//슬라이드가 변경될때마다 익명의 함수실행
  $bar.classList.remove("animating"), //bar선택자 클래스리스트중 animating클래스를 삭제한다.
  void $bar.offsetWidth,   
  $bar.classList.add('animating'); //bar선택자 클래스 리스트중 animating클래스를 추가한다.
});
//pause button 선택자에 click을 한다면
$pausebutton.addEventListener("click",function(){ 
  $pausebutton.style.display="none"; //pausebutton 선택자를 숨긴다.
  $playbutton.style.display="block"; //playbutton 선택자를 보이게 한다
  swiper.autoplay.stop(); //슬라이더 정지
  $bar.classList.remove("animating"); //bar선택자 클래스리스트중 animating클래스를 삭제한다.
  
  
})
//playbutton선택자에 click을 한다면
$playbutton.addEventListener("click",function(){
  $playbutton.style.display="none"; //playbutton 선택자를 숨긴다.
  $pausebutton.style.display="block"; //pausebutton 선택자를 보이게한다.
  swiper.autoplay.start() //슬라이더 실행
  $bar.classList.add("animating"); //bar선택자 클래스리스트중 animating클래스를 추가한다.
 
  
})

//Dynamic header 구현하기
//클래스명:header 기본
//클래스명:header open : headerhover시 바뀌는 헤더
//클래스명:header fixed: scrollY가 200이 넘어가면 바뀌는 헤더
//클래스명:header fixed open :scrollY가 200이 넘어가는 바뀌는 헤더에 호버했을때 바뀌는 헤더 

const $header=document.querySelector('header'); //header 선택자
const $headerhover= document.querySelector('.depth1'); //headerhover를 받을 영역 선택자
//heaerhover 설정
$headerhover.addEventListener("mouseover",function(){ //headerhover선택자에 mouseover하면 
  $header.classList.add("open") //header자식클래스에 open추가
})
$headerhover.addEventListener("mouseleave",function(){ //headerhover선택자에 mouseleave하면 
  $header.classList.remove("open") //header자식클래스에 open제거 
})
const dynamicMove= () =>{
  if(window.scrollY>=200){     //scrollY값이 200이 넘었다면
    $header.classList.add('fixed')    //header자식클래스에 fixed추가
    $headerhover.addEventListener("mouseover",function(){ //headerhover선택자에 mouseover를 한다면
      $header.classList.add('open') //header fixed 자식클래스에 open추가
    })
    $headerhover.addEventListener("mouseleave",function(){ //headerhover선택자에 mouseleave하면 
      $header.classList.remove('open') //header fixed 자식클래스 open제거
   })
  }
  else{                       //scrollY값이 200이 넘지 않았다면
    $header.className='header' //header선택자 클래스 이름을 header로 바꾼다.
    $headerhover.addEventListener("mouseover",function(){  //headerhover선택자에 mouseover를 한다면
      $header.classList.add('open') //header자식클래스에 open추가
    })
    $headerhover.addEventListener("mouseleave",function(){ //headerhover선택자에 mouseleave하면 
      $header.classList.remove('open') //header자식클래스에 open제거
    })
  }

}
window.addEventListener("scroll",dynamicMove); //window에 스크롤이 발생할 경우 dynamicMove함수를 실행시킨다.

 //검색열기 검색닫기
const $topSearchEl=document.querySelector('.topSearch') //돋보기 선택자 
const $closeEl=document.querySelector('.close') //닫기 선택자
// 검색열기
 $srchEl.addEventListener("click",function(){ //돋보기선택자 클릭시 익명의 함수실행
   $topSearchEl.classList.add("open") //돋보기 자식클래스에 open추가
 })
//  검색닫기
 $closeEl.addEventListener("click",function(){ //닫기 선택자 클릭시 익명의 함수실행 
  $topSearchEl.classList.remove("open") //돋보기 자식클래스에 open제거
 })










