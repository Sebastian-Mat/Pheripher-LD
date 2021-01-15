//  SideBar Menu

$(".main.menu").visibility({
  type: "fixed",
  zIndex: 11,
});
$(".main.menu").visibility("refresh");
$(".ui.sidebar").sidebar("attach events", ".menu .item");
$(window).scroll(function () {
  $(".main.menu").toggleClass("scrolled", $(this).scrollTop() > 300);
  $(".secondary.menu").toggleClass("scrolled", $(this).scrollTop() > 300);
  $(".item.secondaryMenu").toggleClass("scrolled", $(this).scrollTop() > 300);
  $(".window.minimize.outline.icon.large").toggleClass(
    "scrolled",
    $(this).scrollTop() > 300
  );
});

//  Home

$("#title").transition("fade down in", "1000ms");
$(".headerText").transition("drop up in", "1000ms");
$(".headerText2").transition("drop down in", "1000ms");
$(".mouse").transition("set looping").transition("bounce", "2500ms");

//  Section/Info

$("#logo").hide();
$("#textInfo").hide();
$(".information").visibility({
  onOnScreen: function () {
    $("#logo").transition({
      animation: "fade right in",
      duration: "500ms",
      onComplete: function () {
        $("#logo").transition("set looping").transition("pulse", "4000ms");
      },
    });
    $("#textInfo").transition("fade left in", "500ms");
  },
});

//  Information Card

$("#cardInfo").visibility({
  onPassing: function () {
    $(".cardInfo").transition("bounce", "500ms");
  },
});

//  Social

$("#infoContact").hide();
$("#card").hide();
$("#softing").hide();

$(".contact").visibility({
  onBottomVisible: function () {
    $("#card").transition({
      animation: "fade down in",
      duration: "1000ms",
    });
    $("#infoContact").transition({
      animation: "fade up in",
      duration: "1000ms",
    });
    $("#softing").transition({
      animation: "fade left in",
      duration: "500ms",
      onComplete: function () {
        $("#softing").transition("set looping").transition("bounce", "2000ms");
      },
    });
  },
});

//  Modal

$(".ui.modal")
  .modal({
    blurring: true,
  })
  .modal("attach events", "#button-modal", "show");

//  Checkbox

$(".ui.checkbox").checkbox();
