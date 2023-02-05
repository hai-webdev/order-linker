import "../common/reset.css";
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "@/assets/global.less";

import "./index.less";

$(".job-item .title-box").on("click", function(){
    $(this).next(".cont-list").slideToggle();
})