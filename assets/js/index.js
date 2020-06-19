// aos init
AOS.init();

//close announcemenets modal on screen ready
toggleAnnouncementsModal();


//toast displayed and goes off after 10 secs
$(document).ready(function () {
  $('.login-toast').toast('show')
  setTimeout(function () {
    $('.login-toast .close').click()
  }, 5000);
});

//hide booth btns in general chat
$('.booth-btns').hide()

// $('.booth-btns').delay(5000).fadeIn(500)


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

$("body").scroll(function () {
  if (
    $(this).scrollTop() > 10 &&
    $("#emoji_dropdownMenu1_content").hasClass("show")
  ) {
    $("#emoji_dropdownMenu1").click();
  }
});

//auditorium - virtualbooth
function VirtualBooth() {
  document.getElementById("virtual_booth").click();
}

//expo hall - slick caorousel
$(document).ready(function () {
  width = $(window).width();
  if (width >= 992) {
    $(".multiple-items").slick({
      rows: 2,
      slidesPerRow: 3,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  } else if (width <= 576) {
    $(".multiple-items").slick({
      infinite: true,
      rows: 2,
      slidesPerRow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  } else if (width >= 768 && width > 576) {
    $(".multiple-items").slick({
      infinite: true,
      rows: 2,
      slidesPerRow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }
});


//Business card modal
function openBusinessCardModal() {
  $("#businessCardModal").modal("show");
}

// Notification Modal
$("#minimize-btn").click(function () {
  $(".notification-modal-class").toggleClass("d-none");
});

//on load minimize notification modal
$("#minimize-btn").click();

function toggleAnnouncementsModal() {
  $("#notification-modal-dialog").toggleClass("d-none");
}

// Event Modal
//close event modal
function eventmodal() {
  $("#eventmodal").toggleClass("d-none");
}
//btn click
$("#events-modal-btn").click(function () {
  eventmodal();
});

// Event Bag Modal
//close event modal
function eventbagmodal() {
  $("#eventbagmodal").toggleClass("d-none");
}
//btn click
$("#event-bag-modal-btn").click(function () {
  eventbagmodal();
});

// Brochures Modal
//close event modal
function brochuresmodal() {
  $("#brochuresmodal").toggleClass("d-none");
}
//btn click
$("#brochures-modal-btn").click(function () {
  brochuresmodal();
});

// on tab item click - close modal
$(".tab-item").click(function () {
  $("#eventmodal").addClass("d-none");
  $("#eventbagmodal").addClass("d-none");
  $("#notification-modal-dialog").addClass("d-none");
  $("#brochuresmodal").addClass("d-none");
  $('.booth-btns').delay(3000).fadeIn(500)
});


//chat Modal
window.addEventListener("resize", function () {
  width = $(window).width()
  if (width <= 992) {
    $('#chatModal .close').click()
    $('#attendeeModal .close').click()
    $('#exhibitorModal .close').click()
    $('#speakerModal .close').click()

  }
});

//general chat tab btn
// $(function () {
//   $('.booth-btns').hide();

//   function fadeImage() {
//     $('.booth-btns').fadeIn(4000);
//   }

// });