/*---------popup'ы----------*/

var link_map = document.querySelector(".min_map");
var big_map = document.querySelector(".box_popup_map");
var map_close = document.querySelector(".popup_map_close");
var overlay = document.querySelector(".overlay");

link_map.addEventListener("click", function() {
  big_map.classList.add("map_show");
  overlay.classList.add("overlay_show");
});

map_close.addEventListener("click", function() {
  big_map.classList.remove("map_show");
  overlay.classList.remove("overlay_show");
});

overlay.addEventListener("click", function() {
  big_map.classList.remove("map_show");
  overlay.classList.remove("overlay_show");
});

/*---------форма---------*/

var link_message = document.querySelector(".open_form");
var form_message = document.querySelector(".form_message_box");
var message_close = document.querySelector(".popup_message_close");
var overlay = document.querySelector(".overlay");

/*переменные внутри формы*/
var username = form_message.querySelector("[name=user_name]");
var message = form_message.querySelector(".form_message");
var email = form_message.querySelector("[name=user_email]");
var text_messag = form_message.querySelector("[name=user_massage]");

var user_name = localStorage.getItem(".username");





link_message.addEventListener("click", function(evt) {
  evt.preventDefault();
  form_message.classList.add("form_show");
  overlay.classList.add("overlay_show");
  username.focus();
});

message_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  form_message.classList.remove("form_show");
  overlay.classList.remove("overlay_show");

});

overlay.addEventListener("click", function() {
  form_message.classList.remove("form_show");
  overlay.classList.remove("overlay_show");
});

/*внутри формы*/

message.addEventListener("submit", function(evt) {

  if (!username.value || email.value || text_messag.value) {
    evt.preventDefault();
    consol.log("Заполните поля форм");

  } else {
    localStorage.setItem("username", username.value);
  }
});



/*---ESC---*/

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (big_map.classList.contains("map_show")) {
      evt.preventDefault();
      big_map.classList.remove("map_show");
      overlay.classList.remove("overlay_show");
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form_message.classList.contains("form_show")) {
      evt.preventDefault();
      form_message.classList.remove("form_show");
      overlay.classList.remove("overlay_show");
    }

  }
});



