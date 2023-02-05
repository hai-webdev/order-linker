import "./index.less";
var pcLoading = false;

function headerStyle() {
  const scrollTop = $(document).scrollTop();
  if (scrollTop > 100) {
    // 添加样式
    $(".pc-header").addClass("on");
    $(".m-header").addClass("on");
  } else {
    // 删除样式
    $(".pc-header").removeClass("on");
    $(".m-header").removeClass("on");
  }
}

$(document).scroll(() => {
  headerStyle();
});

$(".pc-header").hover(
  function () {
    $(this).addClass("on");
  },
  function () {
    $(this).removeClass("on");
    $(".nav-sub-container").slideUp();
    headerStyle();
    document.body.parentNode.style.overflow = "scroll"; //显示且可用
  }
);

$(".pc-header .nav-item").on("mouseenter", function () {
  if (pcLoading) {
    return;
  }
  pcLoading = true;
  if (!$(this).find(".nav-sub-container").length) {
    pcLoading = false;
  }
  $(this)
    .find(".nav-sub-container")
    .slideDown(function () {
      pcLoading = false;
    });
  document.body.parentNode.style.overflow = "hidden"; //隐藏且禁用
  $(this)
    .siblings()
    .find(".nav-sub-container")
    .hide(function () {
      for (const item of $(".pc-header .nav-item .nav-sub-container")) {
        if ($(item).css("display") == "block") {
          document.body.parentNode.style.overflow = "hidden"; //显示且可用
        } else {
          continue;
        }
      }
    });
});

$(".language-box .text").on("click", function () {
  $(this).next(".language-list").slideToggle();
});

// 手机端
let menuShow = false;
let hasOn = false;
$(".menu-btn").on("click", function () {

  if(!menuShow && $(".m-header").hasClass("on")){
    hasOn = true;
  }
  console.log(hasOn);
  if (!menuShow) {
    $(this).addClass("on");
    $(".m-header").addClass("on");
    $(".nav-container").slideDown();
    menuShow = true;
  } else{
    $(this).removeClass("on");
    if(!hasOn){
      $(".m-header").removeClass("on");
    }
    $(".nav-container").slideUp();
    menuShow = false;
  }
  // menuShow = !menuShow;

  if (
    !document.body.parentNode.style.overflow ||
    document.body.parentNode.style.overflow === "scroll"
  ) {
    document.body.parentNode.style.overflow = "hidden";
  } else {
    document.body.parentNode.style.overflow = "scroll";
  }
});
$(".m-header .nav-item .next").on("click", function () {
  $(this).parent(".title").next(".nav-sublist").slideToggle();
});
