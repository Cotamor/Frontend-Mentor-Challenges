const form = document.querySelector("#form");
const email = document.querySelector("#email");

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const handleSubmit = (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const result = validateEmail(emailValue);
  console.log("submit", result);
  if (!result) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
};

form.addEventListener("submit", handleSubmit);
