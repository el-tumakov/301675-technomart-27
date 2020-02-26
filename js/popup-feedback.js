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
