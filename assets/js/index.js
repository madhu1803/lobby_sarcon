// aos init
AOS.init();

// dropdown profile
$(function () {
  // ------------------------------------------------------- //
  // Multi Level dropdowns
  // ------------------------------------------------------ //
  $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    $(this).siblings().toggleClass("show");

    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
  });
});

//Business card modal

function openBusinessCardModal() {
  $('#businessCardModal').modal('show');
}

//slick caorousel

$(document).ready(function () {
  width = $(window).width();
  if (width >= 992) {
    $(".multiple-items").slick({
      rows: 2,
      slidesPerRow: 3,
      infinite: true,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000,
    });
  } else if (width <= 576) {
    $(".multiple-items").slick({
      infinite: true,
      rows: 2,
      slidesPerRow: 2,
      slidesToScroll: 2,
      // autoplay: true,
      // autoplaySpeed: 3000,
    });
  } else if (width >= 768 && width > 576) {
    $(".multiple-items").slick({
      infinite: true,
      rows: 2,
      slidesPerRow: 3,
      slidesToScroll: 2,
      // autoplay: true,
      // autoplaySpeed: 3000,
    });
  }
});

// Event Modal
//close event modal
function eventmodal() {
  $("#eventmodal").toggleClass("d-none");
}
//btn click
$("#events-modal-btn").click(function () {
  eventmodal();
});

$(".tab-item").click(function () {
  $("#eventmodal").addClass("d-none");
});
//on resizing window adjust slick carousel

// window.onresize = function (event) {
//     width = $(window).width()
//     if (width >= 992) {
//         $(".multiple-items").slick({
//             infinite: true,
//             slidesToShow: 3,
//             slidesToScroll: 4,
//             autoplay: true,
//             autoplaySpeed: 2000,
//         });

//     } else if (width <= 576) {
//         $(".multiple-items").slick({
//             infinite: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,

//         });
//     } else if (width >= 768 && width > 576) {
//         $(".multiple-items").slick({
//             infinite: true,
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,

//         });
//     }
// };
function VirtualBooth() {
  document.getElementById("virtual_booth").click();
}

// there are two buttons
// the button u see with an emoji => dummy button
// the other button hidden => acutal button
// on resize and scroll get the position of the dummy button and place the actual button over it
function emoji_button_position() {
  let dummy_button = $("#emoji_button");
  let actual_button = $("#emoji_dropdownMenu1");
  let dummy_position = dummy_button.offset();

  let top_px = `${dummy_position.top}px`;
  let left_px = `${dummy_position.left}px`;

  actual_button.css("top", top_px);
  actual_button.css("left", left_px);
  actual_button.css("width", `${dummy_button.width() + 18}px`);

  console.log(top_px, left_px);
}

window.addEventListener("resize", function () {
  emoji_button_position();
});

window.onload = function () {
  emoji_button_position();
};

$("#myTab").scroll(function () {
  emoji_button_position();
});