// Validation script for the form
const showPasswordBtn = document.querySelector("#show-pwd");
const showPasswordIcon = showPasswordBtn.querySelector("img");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const form = document.querySelector("#form");
const dangerIcon = document.querySelectorAll(".danger-icon-hidden");
const submitButton = document.querySelector(".btn");

const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);

showPasswordBtn.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";

  showPasswordIcon.src = showPasswordIcon.src.includes("show")
    ? "assets/eye-hide-icon.svg"
    : "assets/eye-show-icon.svg";
});

function validateEmail() {
  let emailValid;

  if (email.value.match(emailRegex) && email.value) {
    // remove styling for invalid email
    email.classList.remove("invalid");
    // hides danger icon
    dangerIcon[0].classList.remove("danger-icon-show");
    dangerIcon[0].classList.add("danger-icon-hidden");

    emailValid = true;
  } else {
    // add styling for invalid email
    email.classList.add("invalid");
    // shows danger icon
    dangerIcon[0].classList.remove("danger-icon-hidden");
    dangerIcon[0].classList.add("danger-icon-show");

    emailValid = false;
  }
  return emailValid;
}

function validatePassword() {
  let passwordValid;

  if (password.value.length >= 8) {
    // removes styling for invalid password
    password.classList.remove("invalid");
    // re-adds hide/show eye button to screen
    showPasswordBtn.style.display = "flex";
    // removes danger icon
    dangerIcon[1].classList.remove("danger-icon-show");
    dangerIcon[1].classList.add("danger-icon-hidden");
    passwordValid = true;
  } else {
    // adds styling for invalid password
    password.classList.add("invalid");
    // removes hide/show eye button from screen
    showPasswordBtn.style.display = "none";
    // shows danger icon
    dangerIcon[1].classList.remove("danger-icon-hidden");
    dangerIcon[1].classList.add("danger-icon-show");
    passwordValid = false;
  }

  return passwordValid;
}

function validateForm() {
  let isPasswordValid = validatePassword();
  let isEmailValid = validateEmail();
  if (isPasswordValid && isEmailValid) {
    form.submit();
  }
}
