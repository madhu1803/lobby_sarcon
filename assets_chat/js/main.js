// script to toggle the chat rooms
let chat_rooms = ["#chat-1", "#chat-2"]; // TODO: remove dummy chat ids
for (let chat_room_id of chat_rooms) {
  $(chat_room_id).click(function (event) {
    $(`#content-${chat_room_id.split("-")[1]}`).toggleClass("d-none");
    $(chat_room_id).children("i").toggleClass("fa-caret-up");
    $(chat_room_id).children("i").toggleClass("fa-caret-down");
  });
}

// script to handle responsiveness | on event
$(window).resize(function () {
  checkAndInitScreens();
});
// on page load init the chat screens
checkAndInitScreens();

function checkAndInitScreens() {
  // init the screens based on width
  if ($(window).width() < 960) {
    $(".online_users").removeClass("d-none");
    $(".chat_rooms").removeClass("d-none");
    $(".messages").removeClass("d-none");

    $(".online_users").addClass("d-none");
    $(".chat_rooms").addClass("d-none");

    $(".to_messages").click(function () {
      toggleMessages();
    });
  } else {
    $(".online_users").removeClass("d-none");
    $(".chat_rooms").removeClass("d-none");
    $(".messages").removeClass("d-none");
  }
}

function toggleActiveUsers() {
  $(".online_users").removeClass("d-none");
  $(".chat_rooms").removeClass("d-none");
  $(".messages").removeClass("d-none");

  $(".chat_rooms").addClass("d-none");
  $(".messages").addClass("d-none");
}

function toggleChatRooms() {
  $(".online_users").removeClass("d-none");
  $(".chat_rooms").removeClass("d-none");
  $(".messages").removeClass("d-none");

  $(".online_users").addClass("d-none");
  $(".messages").addClass("d-none");
}

function toggleMessages() {
  $(".online_users").removeClass("d-none");
  $(".chat_rooms").removeClass("d-none");
  $(".messages").removeClass("d-none");

  $(".online_users").addClass("d-none");
  $(".chat_rooms").addClass("d-none");
}

function formInput() {
  swal("Enter Password:", {
    content: "input",
  }).then((value) => {});
}

// notification modal functions

//minimize modal
$("#minimize-btn").click(function () {
  $(".notification-modal-class").toggleClass("d-none");
});

//on load minimize notification modal
$("#minimize-btn").click();

function toggleAnnouncementsModal() {
  $("#notification-modal-dialog").toggleClass("d-none");
}

//go back to main page
function tabclick(tab_value) {
  window.location.href = "./index.html?tab_id=".concat(tab_value);
}