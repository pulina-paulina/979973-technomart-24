var button_buy = document.querySelector(".buy");
var popup_catalog = document.querySelector(".popup_catalog");
var popup_catalog_close = document.querySelector(".popup_catalog_close");
var overlay = document.querySelector(".overlay");



button_buy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_catalog.classList.add("popup_catalog_show");
  overlay.classList.add("overlay_show");
});

popup_catalog_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_catalog.classList.remove("popup_catalog_show");
  overlay.classList.remove("overlay_show")

});

overlay.addEventListener("click", function() {
  popup_catalog.classList.remove("popup_catalog_show");
  overlay.classList.remove("overlay_show");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (button_buy.classList.contains("popup_catalog_show")) {
      evt.preventDefault();
      button_buy.classList.remove("popup_catalog_show");
      overlay.classList.remove("overlay_show");
    }
  }
});
