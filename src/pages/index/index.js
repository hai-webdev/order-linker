import "../common/reset.css";
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "@/assets/global.less";
import "./index.less";
import "swiper/css/swiper.min.css";
import Swiper from "swiper";

const clientSwiper = new Swiper(".client-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

function handleMouse() {
  const viewHeight = $(window).height();
  const viewWidth = $(window).width();
  const headerHeight =
    viewWidth > 768 ? $(".pc-header").height() : $(".m-header").height();
  $(".icon-mouse").on("click", () => {
    $(window).scrollTop(viewHeight - headerHeight);
  });
}
handleMouse();
$(window).on("resize", function () {
  handleMouse();
});
