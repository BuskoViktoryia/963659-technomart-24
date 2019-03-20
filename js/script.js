var letterLink = document.querySelector(".button-contacts");
var letterPopup = document.querySelector(".modal-letter");
var letterClose = letterPopup.querySelector(".modal-close");
var name = letterPopup.querySelector("[name=yours-name]");

letterLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");
});

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show");
    }
  }
});


var basketLink = document.querySelector(".button-basket");
var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".modal-close");

basketLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("modal-show");
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});


var mapLink = document.querySelector(".min-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
