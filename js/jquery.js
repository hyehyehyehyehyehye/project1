//언어 toggle
$(".language").click(function () {
  if ($(".lag_textbox").is(":visible")) {
    $(".lag_textbox").hide();
  } else {
    $(".lag_textbox").show();
    $(".part_web_textbox").hide();
  }
});
$(".site_visit").click(function () {
  if ($(".part_web_textbox").is(":visible")) {
    $(".part_web_textbox").hide();
  } else {
    $(".part_web_textbox").show();
    $(".lag_textbox").hide();
  }
});

//nav
$(".gnb_inner,.favorite,.bottom inner").hover(
  function () {
    $(".depth2_inner").css("display", "block");
    $(".favorite").css("display", "flex");
    $("header").addClass("on");
  },
  function () {
    $(".depth2_inner").css("display", "none");
    $(".favorite").css("display", "none");
    $("header").removeClass("on");
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

//event banner
$(".hiwell_service ul").bxSlider({
  mode: "horizontal",
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  pagerType: "short",
  speed: 1000,
  pause: 5000,
  slideWidth: "272px",
});

$(".pr_banner2 ul").bxSlider({
  mode: "horizontal",
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  pagerType: "short",
  speed: 1000,
  pause: 5000,
  slideWidth: "272px",
});

//내부관련사이트
let btn = $(".family_link");
let list = $(".box_site");
let navLinks = $("box_site ul li");
btn.click(function () {
  $(this).find(".box_site").toggleClass("active");
  $(this).find("button").toggleClass("on");
});

//포트폴리오 닫기
$(".btn_close").on("click", function (e) {
  e.preventDefault();
  $(".popup").hide();
});

// toggle_menu.mobile;
$(".toggle_menu.mobile").click(function () {
  $(".mobile_nav").css({
    transform: "translateX(0)",
    transition: "0.8s",
  });
  $(".user_support").css("z-index", "-99");
});

$(".icon_btn").click(function () {
  $(".mobile_nav").css({
    transform: "translateX(100%)",
    transition: "0.8s",
  });
  $(".user_support").css("z-index", "10");
});

$(".toggle_menu.mobile").on("click", function () {
  $(".overlay").addClass("open");
});

$(".icon_btn").on("click", function () {
  $(".overlay").removeClass("open");
});
