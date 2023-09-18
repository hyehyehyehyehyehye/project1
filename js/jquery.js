const depth1 = $(".gnb_inner");
depth1.hover(
  function () {
    $(".depth2_inner").css("display", "block");
    $("nav").addClass("on");
  },
  function () {
    $(".depth2_inner").css("display", "none");
    $("nav").removeClass("on");
  }
);
