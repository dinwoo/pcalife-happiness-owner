"use strict";
var isMobile = 768 < $(window).width(),
  controller = new ScrollMagic.Controller();
function mobile() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch (e) {
    return !1;
  }
}
function verifyNumber(e) {
  return /^[0-9]*$/.test(e);
}
function checkWid(e) {
  e < 768 && !isMobile
    ? ((isMobile = !0), mobileFun())
    : 768 < e && isMobile && ((isMobile = !1), desktopFun());
}
function mobileFun() {}
function desktopFun() {}
function setCarousel() {}
function ValidateValue(e) {
  var t = e.value,
    n = t.length - 1,
    o = e.value.charAt(n);
  0 <=
    "[`~!#$^&*()=|{}':;',\\[\\]<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'".indexOf(
      o
    ) && ((o = t.substring(0, n)), (e.value = o));
}
function setAnimate() {
  TweenMax.set(
    ".banner .title,.banner .kv,.banner .dialogue1,.banner .dialogue2,.section02 .title,.section02 .container,.section03 .main,.section03 .btn,.section04 .title,.section05 .title,.section06 .title,.section06 .item,.section06 .btn,.section07 .title,.section07 .main",
    {
      opacity: 0,
      y: 50,
    }
  ),
    TweenMax.set(
      ".banner .slogan .icon,.banner .slogan p,.section01 .box:nth-child(1),.section04 .box .item:nth-child(1),.section05 .box .item:nth-child(1)",
      {
        opacity: 0,
        x: -50,
      }
    ),
    TweenMax.set(
      ".banner .slogan .btn,.section01 .box:nth-child(2),.section04 .box .item:nth-child(2),.section05 .box .item:nth-child(2)",
      {
        opacity: 0,
        x: 50,
      }
    ),
    doAnimate(
      new TimelineMax()
        .add(
          TweenMax.to(".banner .title", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.to(".banner .kv", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.to(".banner .dialogue1", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.to(".banner .dialogue2", 0.6, {
            opacity: 1,
            y: 0,
            delay: -0.4,
          })
        )
        .add(
          TweenMax.to(".banner .slogan .icon", 0.6, {
            opacity: 1,
            x: 0,
          })
        )
        .add(
          TweenMax.to(".banner .slogan p", 0.6, {
            opacity: 1,
            x: 0,
            delay: -0.6,
          })
        )
        .add(
          TweenMax.to(".banner .slogan .btn", 0.6, {
            opacity: 1,
            x: 0,
            delay: -0.6,
          })
        ),
      {
        triggerElement: ".banner",
        offset: 0,
        reverse: !1,
      },
      "banner"
    ),
    doAnimate(
      new TimelineMax()
        .add(
          TweenMax.to(".section01 .box:nth-child(1)", 0.6, {
            opacity: 1,
            x: 0,
          })
        )
        .add(
          TweenMax.to(".section01 .box:nth-child(2)", 0.6, {
            opacity: 1,
            x: 0,
            delay: -0.6,
          })
        ),
      {
        triggerElement: ".section01",
        offset: 0,
        reverse: !1,
      },
      "section01"
    ),
    doAnimate(
      new TimelineMax()
        .add(
          TweenMax.to(".section02 .title", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.staggerTo(
            ".section02 .container",
            0.6,
            {
              opacity: 1,
              y: 0,
            },
            0.1
          )
        ),
      {
        triggerElement: ".section02",
        offset: 0,
        reverse: !1,
      },
      "section02"
    ),
    doAnimate(
      new TimelineMax()
        .add(
          TweenMax.to(".section03 .main", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.to(".section03 .btn", 0.6, {
            opacity: 1,
            y: 0,
            delay: -0.4,
          })
        ),
      {
        triggerElement: ".section03",
        offset: 0,
        reverse: !1,
      },
      "section03"
    ),
    doAnimate(
      new TimelineMax()
        .add(
          TweenMax.to(".section04 .title", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.to(".section04 .box .item:nth-child(1)", 0.6, {
            opacity: 1,
            x: 0,
            delay: -0.2,
          })
        )
        .add(
          TweenMax.to(".section04 .box .item:nth-child(2)", 0.6, {
            opacity: 1,
            x: 0,
            delay: -0.6,
          })
        ),
      {
        triggerElement: ".section04",
        offset: 0,
        reverse: !1,
      },
      "section04"
    ),
    doAnimate(
      new TimelineMax()
        .add(
          TweenMax.to(".section05 .title", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.to(".section05 .box .item:nth-child(1)", 0.6, {
            opacity: 1,
            x: 0,
            delay: -0.2,
          })
        )
        .add(
          TweenMax.to(".section05 .box .item:nth-child(2)", 0.6, {
            opacity: 1,
            x: 0,
            delay: -0.6,
          })
        ),
      {
        triggerElement: ".section05",
        offset: 0,
        reverse: !1,
      },
      "section05"
    ),
    doAnimate(
      new TimelineMax()
        .add(
          TweenMax.to(".section06 .title", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.staggerTo(
            ".section06 .item",
            0.6,
            {
              opacity: 1,
              y: 0,
            },
            0.2
          )
        )
        .add(
          TweenMax.to(".section06 .btn", 0.6, {
            opacity: 1,
            y: 0,
          })
        ),
      {
        triggerElement: ".section06",
        offset: 0,
        reverse: !1,
      },
      "section06"
    ),
    doAnimate(
      new TimelineMax()
        .add(
          TweenMax.to(".section07 .title", 0.6, {
            opacity: 1,
            y: 0,
          })
        )
        .add(
          TweenMax.to(".section07 .main", 0.6, {
            opacity: 1,
            y: 0,
          })
        ),
      {
        triggerElement: ".section07",
        offset: 0,
        reverse: !1,
      },
      "section07"
    );
}
function doAnimate(e, t, n) {
  return new ScrollMagic.Scene(t).setTween(e).addTo(controller);
}
function sweetAlertError(e) {
  return (
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e,
    }),
    !1
  );
}
function scrollToReserve() {
  $("html,body")
    .stop()
    .animate(
      {
        scrollTop: $(".section05").offset().top - 100,
      },
      700
    );
}
$(window).resize(function () {
  checkWid($(window).width());
}),
  $(document).ready(function () {
    checkWid($(window).width()), setAnimate();
    var e = $("#carouselBox02").owlCarousel({
      nav: !1,
      dots: !0,
      loop: !1,
      items: 1,
      center: !0,
      autoHeight: !0,
      margin: 70,
      onInitialize: function (e) {
        $(".section02 .title1").fadeIn(),
          $("#infoNowPage").text("01"),
          $("#infoLeftArrow").addClass("disabled");
      },
      onChanged: function (e) {
        0 <= e.page.index &&
          ($("#infoNowPage").text("0".concat(e.page.index + 1)),
          $(".section02 .title-box").fadeOut(),
          $(".section02 .title".concat(e.page.index + 1)).fadeIn()),
          e.page.index <= 0
            ? $("#infoLeftArrow").addClass("disabled")
            : 4 == e.page.index
            ? $("#infoRightArrow").addClass("disabled")
            : ($("#infoLeftArrow").removeClass("disabled"),
              $("#infoRightArrow").removeClass("disabled"));
      },
    });
    $("#infoLeftArrow").on("click", function () {
      e.trigger("prev.owl.carousel");
    }),
      $("#infoRightArrow").on("click", function () {
        e.trigger("next.owl.carousel");
      }),
      $("#sendBtn").on("click", function () {
        $("#name").val()
          ? null == $("input[name='gender']:checked").val()
            ? sweetAlertError("請選擇性別")
            : $("#phone").val() && verifyNumber($("#phone").val())
            ? $("#code").val()
              ? $("#personalInformation").is(":checked")
                ? $("#checkBtn").is(":checked")
                  ? $.ajax({
                      url: "/Home/Index",
                      type: "post",
                      data: {
                        name: $("#name").val(),
                        gender: Number($("input[name='gender']:checked").val()),
                        phone: $("#phone").val(),
                        code: $("#code").val(),
                        deviceType: mobile() ? 2 : 1,
                      },
                      beforeSend: function (e) {
                        e.setRequestHeader(
                          "requestverificationtoken",
                          $(
                            'input:hidden[name="__RequestVerificationToken"]'
                          ).val()
                        );
                      },
                      success: function (e) {
                        200 === e.code &&
                          ($(".section05 .success-popup").fadeIn(),
                          $("#name").val(""),
                          $("input[name='gender']").prop("checked", !1),
                          $("#phone").val(""),
                          $("#code").val(""),
                          $("#personalInformation").prop("checked", !1),
                          $("#checkBtn").prop("checked", !1)),
                          500 === e.code &&
                            Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: e.msg,
                            }),
                          9999 === e.code &&
                            Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "送出失敗",
                            }),
                          $("#imgcode").attr("src", `${e.memo}`);
                      },
                      error: function (e) {
                        $("#imgcode").attr("src", `${e.memo}`);
                        console.log(e);
                        sweetAlertError("送出失敗");
                      },
                    })
                  : sweetAlertError("請確認以上資料正確無誤")
                : sweetAlertError("請閱讀並同意個人資料告知暨同意事項")
              : sweetAlertError("請輸入驗證碼")
            : sweetAlertError("請填寫電話及確認格式正確")
          : sweetAlertError("請填寫姓名");
      }),
      $(".fix-btn").on("click", scrollToReserve),
      $(".banner .btn").on("click", scrollToReserve),
      $(".section01 .btn").on("click", scrollToReserve),
      $(".section03 .btn").on("click", scrollToReserve),
      $(".section06 .btn").on("click", scrollToReserve),
      $("#toSection3").on("click", function () {
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop: $(".section03").offset().top - 50,
            },
            700
          );
      }),
      $("#toSection6").on("click", function () {
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop: $(".section06").offset().top - 100,
            },
            700
          );
      }),
      $(".section07 .tab").on("click", function () {
        var e = $(this).index();
        $(".section07 .tab").removeClass("active"),
          $(".section07 .tab").eq(e).addClass("active"),
          $(".section07 .box").removeClass("active"),
          $(".section07 .box").eq(e).addClass("active");
      }),
      $(".section08 .title").on("click", function () {
        Number($(this).attr("isShow"))
          ? ($(this).next().slideUp(),
            $(this).attr("isShow", 0),
            $(this).find("span").text("＋"))
          : ($(this).next().slideDown(),
            $(this).attr("isShow", 1),
            $(this).find("span").text("－"));
      }),
      $(".success-popup .close").on("click", function () {
        $(".section05 .success-popup").fadeOut();
      });
  });
//# sourceMappingURL=all.js.map
function ReloadCode() {
  $.ajax({
    url: "/Home/Reload",
    type: "post",
    success: function (e) {
      if (e.code === 200) {
        $("#imgcode").attr("src", `${e.memo}`);
      }
    },
    error: function (e) {
      console.log(e);
      sweetAlertError("重新整理失敗");
    },
  });
}
