'use strict';

const swiper = new Swiper(".swiper", {
  effect: "fade",
  speed: 2500, // スライドアニメーションのスピード（ミリ秒）
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: { // 自動再生させる
    // display: 3000,
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
}
