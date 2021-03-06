var popup_catalog = document.querySelector(".popup_catalog");
var popup_catalog_close = document.querySelector(".popup_catalog_close");

var button_buy = document.querySelectorAll(".buy");
var popup_catalog = document.querySelector(".popup_catalog");
var popup_catalog_close = document.querySelector(".popup_catalog_close");



document.querySelectorAll('.buy').forEach(function(elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault();

    popup_catalog.classList.add("popup_catalog_show");
  })
});

popup_catalog_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_catalog.classList.remove("popup_catalog_show");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (button_buy.classList.contains("popup_catalog_show")) {
      evt.preventDefault();
      button_buy.classList.remove("popup_catalog_show");
    }
  }
});

var searchForm = document.querySelector('.search_header');
var searchLine = searchForm.querySelector('input');
searchLine.addEventListener('focus', function() {
  searchForm.classList.add('active');
});
searchLine.addEventListener('blur', function() {
  searchForm.classList.remove('active');
});
