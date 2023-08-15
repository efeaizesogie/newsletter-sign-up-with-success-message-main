document.addEventListener("DOMContentLoaded", function () {
  var userEmail = document.querySelector(".email");
  var welcome = document.querySelector(".welcome");
  var showContent = document.querySelector(".hide");
  var emailValue = document.querySelector(".user-email");
  var dismissButton = document.querySelector(".dismiss-btn");
  var subscribeButton = document.querySelector(".subscribe-btn");
  var errorMessage = document.querySelector(".error-message");

  subscribeButton.addEventListener("click", function () {
    if (userEmail.value) {
      welcome.style.display = "none";
      emailValue.innerHTML = userEmail.value;
      showContent.style.display = "inline-block";
      userEmail.classList.remove("error");
      errorMessage.innerHTML = "";
    } else {
      errorMessage.innerHTML = "Valid email required";
      userEmail.classList.add("error");
    }
  });

  dismissButton.addEventListener("click", function () {
    showContent.style.display = "none";
    welcome.style.display = "flex";
  });
});
