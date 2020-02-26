var buttonMap = document.querySelector(".map");
var popupMap = document.querySelector(".bigmap");
var closeMap = document.querySelector(".bigmap .close");

buttonMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("popup-show")) {
      popupMap.classList.remove("popup-show");
      popupMap.classList.remove("feedback-error");
    }
  }
});
