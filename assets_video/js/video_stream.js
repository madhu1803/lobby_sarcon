toggleAnnouncementsModal();
// Notification Modal
$("#minimize-btn").click(function () {
  $(".notification-modal-class").toggleClass("d-none");
});

//on load minimize notification modal
$("#minimize-btn").click();

function toggleAnnouncementsModal() {
  $("#notification-modal-dialog").toggleClass("d-none");
}

window.addEventListener("resize", function () {
  width = $(window).width();
  if (width <= 992) {
    $("#chatModal .close").click();
  }
});

function display() {
  $(".qa-btn").toggleClass("d-none");
  $(".audience-btn").toggleClass("d-none");
  $(".polling-btn").toggleClass("d-none");
  $("#notification-btn").toggleClass("d-none");
  $("#chat-modal-btn").toggleClass("d-none");
}

$(".audience-btn").click(function () {
  $(".menu_icon").click();
  $("#chat_button").click();
});

$(".qa-btn").click(function () {
  $(".menu_icon").click();
  $("#qa_button").click();
});

$(".polling-btn").click(function () {
  $(".menu_icon").click();
  $("#poll_button").click();
});

function tabclick(tab_value) {
  window.location.href = "./index.html?tab_id=".concat(tab_value);
}