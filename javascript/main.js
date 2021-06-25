// loader
$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
    // $('h1').css('color','#222222');
  }, 1000);
});
// wl to weblaunch transformation
$(function () {
  var text = $(".wl_head");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log("window_top_position: ", scroll);
    if (scroll >= 5350) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }

    if (scroll >= 8970) {
      text.removeClass("hidden_mobile");
    } else {
      text.addClass("hidden_mobile");
    }

    if (scroll >= 7350) {
      text.removeClass("hidden_tab");
    } else {
      text.addClass("hidden_tab");
    }
  });
});

var fix_header = $(".fix_header");
$(window).scroll(function () {
  console.log("secret: ", $(window).scrollTop());
  var header_position = $(window).scrollTop();
  console.log("fixing: ", header_position);
  console.log("innerWidth: ", $(window).innerWidth());
  if ($(window).innerWidth() > 976) {
    if (header_position > 647) {
      fix_header.addClass("fixing_items");
    } else {
      fix_header.removeClass("fixing_items");
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
    }
  }
});

var wl_process_heading = $(".wl_process_heading");
$(window).scroll(function () {
  console.log("wl_agency: ", $(window).scrollTop());
  var window_top = $(window).scrollTop();
  console.log("window_top: ", window_top);
  if (window_top > 4150) {
    wl_process_heading.addClass("line_cross");
  } else {
    wl_process_heading.removeClass("line_cross");
  }
});
