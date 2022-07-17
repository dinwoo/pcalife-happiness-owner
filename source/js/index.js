let isMobile = $(window).width() > 768;
let controller = new ScrollMagic.Controller();

$(window).resize(function () {
  let windowSize = $(window).width();
  checkWid(windowSize);
});

function verifyNumber(number) {
  const numberRules = /^[0-9]*$/;
  return numberRules.test(number);
}

function verifyId(id) {
  const idRules = /^[A-Za-z]{1}[1-2]{1}[0-9]{8}$/;
  return idRules.test(id);
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
    ".banner .banner-title,.section01 .title,.section01 .pic,.section02 .title img,.section02 .container,.section03 .title img,.section03 .animate-item,.section04 .wrapper,.section05 .title img,.section05 .form-box,.section06 .title img,.section06 .remind,.section06 .box .item",
    {
      opacity: 0,
      y: 50,
    }
  );
  TweenMax.set(".banner .banner-slogan,.banner .dog-box", {
    opacity: 0,
  });
  TweenMax.set(".banner .dadnmom", {
    opacity: 0,
    x: -100,
  });
  TweenMax.set(".banner .papamama", {
    opacity: 0,
    x: 100,
  });

  // 進場動畫
  doAnimate(
    new TimelineMax()
      .add(
        TweenMax.to(".banner .banner-title", 0.6, {
          opacity: 1,
          y: 0,
        })
      )
      .add(
        TweenMax.to(".banner .dadnmom", 0.6, {
          opacity: 1,
          x: 0,
        })
      )
      .add(
        TweenMax.to(".banner .papamama", 0.6, {
          opacity: 1,
          x: 0,
          delay: -0.6,
        })
      )
      .add(
        TweenMax.to(".banner .banner-slogan", 1, {
          opacity: 1,
        })
      )
      .add(
        TweenMax.to(".banner .dog-box", 0.6, {
          opacity: 1,
          delay: 0.1,
        })
      ),
    {
      triggerElement: ".banner",
      offset: 0, //指標位移
      reverse: false, //動畫重複 default:true
    },
    "banner"
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

$(document).ready(function () {
  checkWid($(window).width());
  // setAnimate();

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
      console.log(event.page.index);
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
    } else if (!$("#phone").val() || !verifyNumber($("#phone").val())) {
      sweetAlertError("請填寫電話及確認格式正確");
      return;
    } else if ($("input[name='isPcalife']:checked").val() == undefined) {
      sweetAlertError("請確認是否已經是保誠保戶");
      return;
    } else if (
      $("input[name='isPcalife']:checked").val() == "1" &&
      (!$("#identityNumber").val() || !verifyId($("#identityNumber").val()))
    ) {
      sweetAlertError("請輸入身分證字號及確認格式正確");
      return;
    } else if (!$("#personalInformation").is(":checked")) {
      sweetAlertError("請閱讀並同意個人資料告知暨同意事項");
      return;
    } else if (!$("#checkBtn").is(":checked")) {
      sweetAlertError("請確認以上資料正確無誤");
      return;
    }
    $.ajax({
      url: "Home/Index",
      type: "post",
      data: {
        name: $("#name").val(),
        phone: $("#phone").val(),
        isPcalife: $("input[name='isPcalife']:checked").val(),
        identityNumber: $("#identityNumber").val(),
        currentAge,
        retireAge,
        lifeSpan,
        totalAssets,
        salary,
        incomeReplacementRatio,
        inflation,
        totalInvest,
        requiredAmount: calcRequiredAmount(),
        shortage: calcShortage(),
        rspResult: calcPMT(),
      },
      success: function (e) {
        console.log(e);
        if (e.code === 200) {
          Swal.fire({
            icon: "success",
            title: "成功送出資料",
          });
          $("#name").val("");
          $("#phone").val("");
          $("#identityNumber").val("");
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
      },
      error: function (err) {
        console.log(err);
        sweetAlertError("送出失敗");
      },
    });
  });
});
