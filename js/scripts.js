// Попап добавления в корзину
// Кнопки купить и в закладки

var purchaseButtons = document.querySelectorAll(".add-to-cart");
var bookmateButtons = document.querySelectorAll(".add-to-bookmates");
var purchasePopup = document.querySelector(".purchase");
var purchaseResume = document.querySelector(".resume-purchase");
var purchaseClose = document.querySelector(".purchase .close");
var bookmates = document.querySelector(".bookmates");
var bookmatesCount = document.querySelector(".bookmates span");
var cart = document.querySelector(".cart");
var cartCount = document.querySelector(".cart span");

for (var i = 0; i < purchaseButtons.length; i++) {
  purchaseButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    purchasePopup.classList.add("popup-show");
    cart.classList.add("shopping-link-active");
    cartCount.innerHTML = parseInt(cartCount.innerHTML) + 1;
  });
}

for (var i = 0; i < bookmateButtons.length; i++) {
  bookmateButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmates.classList.add("shopping-link-active");
    bookmatesCount.innerHTML = parseInt(bookmatesCount.innerHTML) + 1;
  });
}

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

// Попап с формой

var button = document.querySelector(".feedback-button");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback .close");
var form = document.querySelector(".feedback form");
var inputName = document.querySelector("#message-name");
var inputEmail = document.querySelector("#message-email");
var inputMessage = document.querySelector("#message-content");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");

  if (storageName) {
    inputName.value = storageName;

    if (storageEmail) {
      inputEmail.value = storageEmail;
      inputMessage.focus();
    } else {
      inputEmail.focus();
    }

  } else {
    inputName.focus();
  }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputEmail.value || !inputMessage.value) {
    evt.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", inputName.value);
      localStorage.setItem("email", inputEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("feedback-error");
    }
  }
});

// Попап с картой

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
