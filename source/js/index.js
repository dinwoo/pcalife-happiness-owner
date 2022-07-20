let isMobile = $(window).width() > 768;
let controller = new ScrollMagic.Controller();

$(window).resize(function () {
  let windowSize = $(window).width();
  checkWid(windowSize);
});

function mobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

function verifyNumber(number) {
  const numberRules = /^[0-9]*$/;
  return numberRules.test(number);
}

function checkWid(windowSize) {
  if (windowSize < 768 && !isMobile) {
    isMobile = true;
    mobileFun();
  } else if (windowSize > 768 && isMobile) {
    isMobile = false;
    desktopFun();
  }
}

function mobileFun() {}

function desktopFun() {}

function setCarousel() {}

function ValidateValue(textbox) {
  var IllegalString =
    "[`~!#$^&*()=|{}':;',\\[\\]<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
  var textboxvalue = textbox.value;
  var index = textboxvalue.length - 1;
  var s = textbox.value.charAt(index);
  if (IllegalString.indexOf(s) >= 0) {
    s = textboxvalue.substring(0, index);
    textbox.value = s;
  }
}

function setAnimate() {
  TweenMax.set(
    ".banner .title,.banner .kv,.banner .dialogue1,.banner .dialogue2,.section02 .title,.section02 .container,.section03 .main,.section03 .btn,.section04 .title,.section05 .title,.section06 .title,.section06 .item,.section06 .btn,.section07 .title,.section07 .main",
    {
      opacity: 0,
      y: 50,
    }
  );

  TweenMax.set(
    ".banner .slogan .icon,.banner .slogan p,.section01 .box:nth-child(1),.section04 .box .item:nth-child(1),.section05 .box .item:nth-child(1)",
    {
      opacity: 0,
      x: -50,
    }
  );

  TweenMax.set(
    ".banner .slogan .btn,.section01 .box:nth-child(2),.section04 .box .item:nth-child(2),.section05 .box .item:nth-child(2)",
    {
      opacity: 0,
      x: 50,
    }
  );

  // 進場動畫
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
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "banner"
  );

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
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "section01"
  );

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
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "section02"
  );

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
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "section03"
  );

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
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "section04"
  );

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
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "section05"
  );

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
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "section06"
  );

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
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "section07"
  );
}

function doAnimate(tween, Scene, indicator) {
  return (
    new ScrollMagic.Scene(Scene)
      .setTween(tween)
      // .addIndicators({ name: indicator }) // 指標顯示
      .addTo(controller)
  );
}

function sweetAlertError(msg) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: msg,
  });
  return false;
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

$(document).ready(function () {
  checkWid($(window).width());
  setAnimate();

  let infoOwl = $("#carouselBox02").owlCarousel({
    nav: false,
    dots: true,
    loop: false,
    items: 1,
    center: true,
    autoHeight: true,
    margin: 70,
    onInitialize: (event) => {
      $(`.section02 .title1`).fadeIn();
      $("#infoNowPage").text(`01`);
      $("#infoLeftArrow").addClass("disabled");
    },
    onChanged: (event) => {
      if (event.page.index >= 0) {
        $("#infoNowPage").text(`0${event.page.index + 1}`);
        $(".section02 .title-box").fadeOut();
        $(`.section02 .title${event.page.index + 1}`).fadeIn();
      }
      if (event.page.index <= 0) {
        $("#infoLeftArrow").addClass("disabled");
      } else if (event.page.index == 4) {
        $("#infoRightArrow").addClass("disabled");
      } else {
        $("#infoLeftArrow").removeClass("disabled");
        $("#infoRightArrow").removeClass("disabled");
      }
    },
  });
  $("#infoLeftArrow").on("click", () => {
    infoOwl.trigger("prev.owl.carousel");
  });
  $("#infoRightArrow").on("click", () => {
    infoOwl.trigger("next.owl.carousel");
  });

  $("#sendBtn").on("click", () => {
    if (!$("#name").val()) {
      sweetAlertError("請填寫姓名");
      return;
    } else if ($("input[name='gender']:checked").val() == undefined) {
      sweetAlertError("請選擇性別");
      return;
    } else if (!$("#phone").val() || !verifyNumber($("#phone").val())) {
      sweetAlertError("請填寫電話及確認格式正確");
      return;
    } else if (!$("#code").val()) {
      sweetAlertError("請輸入驗證碼");
      return;
    } else if (!$("#personalInformation").is(":checked")) {
      sweetAlertError("請閱讀並同意個人資料告知暨同意事項");
      return;
    } else if (!$("#checkBtn").is(":checked")) {
      sweetAlertError("請確認以上資料正確無誤");
      return;
    }
    $.ajax({
      url: "/Home/Index",
      type: "post",
      data: {
        name: $("#name").val(),
        gender: Number($("input[name='gender']:checked").val()),
        phone: $("#phone").val(),
        code: $("#code").val(),
        deviceType: mobile() ? 2 : 1,
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader(
          "requestverificationtoken",
          $('input:hidden[name="__RequestVerificationToken"]').val()
        );
      },
      success: function (e) {
        console.log(e);
        if (e.code === 200) {
          $(".section05 .success-popup").fadeIn();
          $("#name").val("");
          $("input[name='gender']").prop("checked", false);
          $("#phone").val("");
          $("#code").val("");
          $("#personalInformation").prop("checked", false);
          $("#checkBtn").prop("checked", false);
        }
        if (e.code === 500) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: e.msg,
          });
        }
        if (e.code === 9999) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `送出失敗`,
          });
        }
        $("#imgcode").attr("src", `${e.memo}`);
      },
      error: function (err) {
        console.log(err);
        $("#imgcode").attr("src", `${err.memo}`);
        sweetAlertError("送出失敗");
      },
    });
  });

  $(".fix-btn").on("click", scrollToReserve);
  $(".banner .btn").on("click", scrollToReserve);
  $(".section01 .btn").on("click", scrollToReserve);
  $(".section03 .btn").on("click", scrollToReserve);
  $(".section06 .btn").on("click", scrollToReserve);

  $("#toSection3").on("click", () => {
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(".section03").offset().top - 50,
        },
        700
      );
  });
  $("#toSection6").on("click", () => {
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(".section06").offset().top - 100,
        },
        700
      );
  });

  $(".section07 .tab").on("click", function () {
    const index = $(this).index();
    $(".section07 .tab").removeClass("active");
    $(".section07 .tab").eq(index).addClass("active");
    $(".section07 .box").removeClass("active");
    $(".section07 .box").eq(index).addClass("active");
  });

  $(".section08 .title").on("click", function () {
    const isShow = Number($(this).attr("isShow"));
    if (isShow) {
      $(this).next().slideUp();
      $(this).attr("isShow", 0);
      $(this).find("span").text("＋");
    } else {
      $(this).next().slideDown();
      $(this).attr("isShow", 1);
      $(this).find("span").text("－");
    }
  });

  $(".success-popup .close").on("click", function () {
    $(".section05 .success-popup").fadeOut();
  });
});
