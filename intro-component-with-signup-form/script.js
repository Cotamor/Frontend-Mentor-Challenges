const form = document.getElementById("form");
const errorIcons = document.querySelectorAll(".error-icon");
const errorMsgs = document.querySelectorAll(".error-msg");

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  const small = formControl.querySelector("small");

  formControl.classList.add("error");
  small.innerText = message;
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;

  formControl.classList.remove("error");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const first = form["firstName"].value;
  const last = form["lastName"].value;
  const email = form["email"].value;
  const pwd = form["password"].value;

  if (!first) {
    addErrorTo("firstName", "first name is required");
  } else {
    removeErrorFrom("firstName");
  }

  if (!last) {
    addErrorTo("lastName", "last name is required");
  } else {
    removeErrorFrom("lastName");
  }

  if (!email) {
    addErrorTo("email", "email is required");
  } else if (!validateEmail(email)) {
    addErrorTo("email", "Not valid email");
  } else {
    removeErrorFrom("email");
  }

  if (!pwd) {
    addErrorTo("password", "password is required");
  } else {
    removeErrorFrom("password");
  }
});
