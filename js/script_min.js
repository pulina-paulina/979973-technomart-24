var link_map=document.querySelector(".map"),big_map=document.querySelector(".box_popup_map"),map_close=document.querySelector(".popup_map_close");link_map.addEventListener("click",function(e){e.preventDefault(),big_map.classList.add("map_show")}),map_close.addEventListener("click",function(){big_map.classList.remove("map_show")});var link_message=document.querySelector(".open_form"),form_message=document.querySelector(".form_message_box"),message_close=document.querySelector(".popup_message_close"),username=form_message.querySelector("[name=user_name]"),message=form_message.querySelector(".form_message"),email=form_message.querySelector("[name=user_email]"),text_messag=form_message.querySelector("[name=user_massage]"),user_name=localStorage.getItem(".username");link_message.addEventListener("click",function(e){e.preventDefault(),form_message.classList.add("form_show"),username.focus()}),message_close.addEventListener("click",function(e){e.preventDefault(),form_message.classList.remove("form_show"),popup.classList.remove("modal_error")}),message.addEventListener("submit",function(e){!username.value||email.value||text_messag.value?(e.preventDefault(),form_message.classList.remove("modal_error"),form_message.offsetWidth=popup.offsetWidth,form_message.classList.add("modal_error")):localStorage.setItem("username",username.value)}),window.addEventListener("keydown",function(e){27===e.keyCode&&big_map.classList.contains("map_show")&&(e.preventDefault(),big_map.classList.remove("map_show"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&form_message.classList.contains("form_show")&&(e.preventDefault(),form_message.classList.remove("form_show"))});var sliders=document.querySelector(".sliders"),sliderControlPoints=sliders.querySelector(".slider_controls_point"),sliderList=sliders.querySelector(".slider_list"),sliderControlArrows=sliders.querySelector(".slider_controls_arrows");sliderControlPoints.querySelectorAll("button").forEach(function(e,s){e.addEventListener("click",function(){sliderControlPoints.querySelector(".current").classList.remove("current"),sliders.querySelector(".slider_item_show").classList.remove("slider_item_show"),this.classList.add("current"),sliderList.children[s].classList.add("slider_item_show")})}),sliderControlArrows.querySelectorAll("button").forEach(function(e){e.addEventListener("click",function(){var e=sliders.querySelector(".slider_item_show"),s=-1;if(this.classList.contains("next"))(r=e.nextElementSibling)||(r=sliderList.children[0]),s=Array.prototype.slice.call(sliderList.children).indexOf(r);else if(this.classList.contains("previous")){var r;(r=e.previousElementSibling)||(r=sliderList.children[sliderList.children.length-1]),s=Array.prototype.slice.call(sliderList.children).indexOf(r)}sliderControlPoints.querySelector(".current").classList.remove("current"),sliderControlPoints.children[s].classList.add("current"),e.classList.remove("slider_item_show"),r.classList.add("slider_item_show")})});var headlineList=document.querySelector(".headline_list");headlineList.querySelectorAll("a").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),headlineList.querySelector(".current").classList.remove("current"),document.querySelector(".sections_item_show").classList.remove("sections_item_show");var s=this.getAttribute("href"),r=document.querySelector(s);this.classList.add("current"),r.classList.add("sections_item_show")})});var searchForm=document.querySelector(".search_header"),searchLine=searchForm.querySelector("input");searchLine.addEventListener("focus",function(){searchForm.classList.add("active")}),searchLine.addEventListener("blur",function(){searchForm.classList.remove("active")});var button_buy=document.querySelectorAll(".buy"),popup_catalog=document.querySelector(".popup_catalog"),popup_catalog_close=document.querySelector(".popup_catalog_close");document.querySelectorAll(".buy").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),popup_catalog.classList.add("popup_catalog_show")})}),popup_catalog_close.addEventListener("click",function(e){e.preventDefault(),popup_catalog.classList.remove("popup_catalog_show")});