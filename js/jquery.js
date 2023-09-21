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
