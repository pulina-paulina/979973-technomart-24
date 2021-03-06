/*---------popup'ы----------*/

var link_map = document.querySelector(".map");
var big_map = document.querySelector(".box_popup_map");
var map_close = document.querySelector(".popup_map_close");

link_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  big_map.classList.add("map_show");
});

map_close.addEventListener("click", function() {
  big_map.classList.remove("map_show");
});


/*---------форма---------*/

var link_message = document.querySelector(".open_form");
var form_message = document.querySelector(".form_message_box");
var message_close = document.querySelector(".popup_message_close");

/*переменные внутри формы*/
var username = form_message.querySelector("[name=user_name]");
var message = form_message.querySelector(".form_message");
var email = form_message.querySelector("[name=user_email]");
var text_messag = form_message.querySelector("[name=user_massage]");

var user_name = localStorage.getItem(".username");

link_message.addEventListener("click", function(evt) {
  evt.preventDefault();
  form_message.classList.add("form_show");
  username.focus();
});

message_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  form_message.classList.remove("form_show");
  popup.classList.remove("modal_error");
});

/*внутри формы*/

message.addEventListener("submit", function(evt) {

  if (!username.value || email.value || text_messag.value) {
    evt.preventDefault();
    form_message.classList.remove("modal_error");
    form_message.offsetWidth = popup.offsetWidth;
    form_message.classList.add("modal_error");
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
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form_message.classList.contains("form_show")) {
      evt.preventDefault();
      form_message.classList.remove("form_show");
    }
  }
});


/*-слайдер-*/
var sliders = document.querySelector('.sliders');
var sliderControlPoints = sliders.querySelector('.slider_controls_point');
var sliderList = sliders.querySelector('.slider_list');
var sliderControlArrows = sliders.querySelector('.slider_controls_arrows');

sliderControlPoints.querySelectorAll('button').forEach(function(elem, index){
	elem.addEventListener('click', function(){
		sliderControlPoints.querySelector('.current').classList.remove('current');
		sliders.querySelector('.slider_item_show').classList.remove('slider_item_show');

		this.classList.add('current');
		var slider = sliderList.children[index];
		slider.classList.add('slider_item_show');
	});
});

sliderControlArrows.querySelectorAll('button').forEach(function(elem){
	elem.addEventListener('click', function(){
		var current = sliders.querySelector('.slider_item_show');	
		var indexOfNext = -1;

		if (this.classList.contains('next')){
			var next = current.nextElementSibling;			
			if (!next) next = sliderList.children[0];		 
	
			var slidersArray = Array.prototype.slice.call(sliderList.children);		
			indexOfNext = slidersArray.indexOf(next);								
		}
		else if (this.classList.contains('previous')){
			var next = current.previousElementSibling;									
			if (!next) next = sliderList.children[sliderList.children.length -1];		 
	
			var slidersArray = Array.prototype.slice.call(sliderList.children);		
			indexOfNext = slidersArray.indexOf(next);								
		}

		sliderControlPoints.querySelector('.current').classList.remove('current');	
		sliderControlPoints.children[indexOfNext].classList.add('current');			

		current.classList.remove('slider_item_show');
		next.classList.add('slider_item_show');
	});
});


var headlineList = document.querySelector('.headline_list');

headlineList.querySelectorAll('a').forEach(function(elem){
	elem.addEventListener('click', function(e){
		e.preventDefault();
	
		headlineList.querySelector('.current').classList.remove('current');
		document.querySelector('.sections_item_show').classList.remove('sections_item_show');
	
		var clickedElem = this;
		var blockId = clickedElem.getAttribute('href');
		var block = document.querySelector(blockId);

		clickedElem.classList.add('current');
		block.classList.add('sections_item_show');
	});	
});

var searchForm = document.querySelector('.search_header');
var searchLine = searchForm.querySelector('input');
searchLine.addEventListener('focus', function(){
	searchForm.classList.add('active');
});
searchLine.addEventListener('blur', function(){
	searchForm.classList.remove('active');
});

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
