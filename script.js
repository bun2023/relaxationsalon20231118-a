'use strict';

const swiper = new Swiper(".swiper", {
  effect: "fade",
  speed: 5000, // スライドアニメーションのスピード（ミリ秒）
  loop: true,
  autoplay: { // 自動再生させる
    // display: 3000,
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
