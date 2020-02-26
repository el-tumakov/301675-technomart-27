var purchaseButtons = document.querySelectorAll(".add-to-cart");
var bookmateButtons = document.querySelectorAll(".add-to-bookmates");
var purchasePopup = document.querySelector(".purchase");
var purchaseResume = document.querySelector(".resume-purchase");
var purchaseClose = document.querySelector(".purchase .close");
var bookmates = document.querySelector(".bookmates");
var bookmatesCount = document.querySelector(".bookmates span");
var cart = document.querySelector(".cart");
var cartCount = document.querySelector(".cart span");

purchaseButtons.forEach(function (itm) {
  itm.addEventListener("click", function (evt) {
    evt.preventDefault();
    purchasePopup.classList.add("popup-show");
    cart.classList.add("shopping-link-active");
    cartCount.innerHTML = parseInt(cartCount.innerHTML) + 1;
  });
});

bookmateButtons.forEach(function (itm) {
  itm.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmates.classList.add("shopping-link-active");
    bookmatesCount.innerHTML = parseInt(bookmatesCount.innerHTML) + 1;
  });
});

purchaseResume.addEventListener("click", function (evt) {
  evt.preventDefault();
  purchasePopup.classList.remove("popup-show");
});

purchaseClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  purchasePopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (purchasePopup.classList.contains("popup-show")) {
      purchasePopup.classList.remove("popup-show");
      purchasePopup.classList.remove("feedback-error");
    }
  }
});
