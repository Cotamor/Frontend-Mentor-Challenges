const form = document.getElementById("form");
const modal = document.getElementById("modal");

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  const span = formControl.querySelector("span");
  formControl.classList.add("error");
  span.innerText = message;
}
function removeErrorFrom(field) {
  const formControl = form[field].parentNode;

  formControl.classList.remove("error");
}
function showModal() {
  modal.classList.add("modal");
  modal.innerText = "Thanks!!";
  setTimeout(() => {
    modal.innerText = "";
    modal.classList.remove("modal");
  }, 2000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = email.value;
  if (!value) {
    addErrorTo("email", "Email is required");
  } else if (!validateEmail(value)) {
    addErrorTo("email", "Not a valid email");
  } else {
    removeErrorFrom("email");
    showModal();
  }
  console.log("submit", value);
});
