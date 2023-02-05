import "../common/reset.css";
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "@/assets/global.less";
import "./index.less";
import swiper from "swiper";

const imgSwiper = new swiper(".case-img-box", {
    navigation: {
        prevEl: ".prev-btn",
        nextEl: ".next-btn",
      },
      loop: true,
      noSwiping: true,
});
const textSwiper = new swiper(".case-text-box", {
  navigation: {
    prevEl: ".prev-btn",
    nextEl: ".next-btn",
  },
  loop: true,
  noSwiping: true,
});
