const hamburgerEl = document.getElementById("hamburger_icon");
const navEl = document.getElementById("side_menu");

hamburgerEl.addEventListener("click", function () {
  navEl.style.transform =
    navEl.style.transform === "translateY(-100%)"
      ? "translateY(0%)"
      : "translateY(-100%)";
});
// navEl.style.transform이 트랜스레이트Y(-100%)상태라면 네비게이션 스타일 트렌스폼을 0으로 바꿔주고 아니면 -100%로 바꿔줘