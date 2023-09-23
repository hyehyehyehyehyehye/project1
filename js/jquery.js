//언어

//nav
const depth1 = $(".gnb_inner");
depth1.hover(
  function () {
    $(".depth2_inner").css("display", "block");
    $(".favorite_wrap>.depth2_inner").css("display", "flex");
    $("header .bottom").addClass("on");
  },
  function () {
    $(".depth2_inner").css("display", "none");
    $(".favorite_wrap>.depth2_inner").css("display", "none");
    $("header .bottom").removeClass("on");
  }
);

//top banner
$(".top_banner ul").bxSlider({
  mode: "horizontal",
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: "410px",
  pagerType: "short",
  speed: 1000,
  pause: 5000,
});

//main banner
$(".banner_img ul").bxSlider({
  mode: "horizontal",
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  pagerType: "short",
  speed: 1000,
  pause: 5000,
});

//tab
const tabBtn = $(".toggle_wrap button");
const panels = $(".menu_list");
tabBtn.on("click", function (e) {
  e.preventDefault();
  let tg = $(this).index();
  panels.hide();
  tabBtn.removeClass("on");
  panels.eq(tg).show();
  tabBtn.eq(tg).addClass("on");
});
