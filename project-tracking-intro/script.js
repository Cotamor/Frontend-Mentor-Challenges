const hamburger = document.getElementById("hamburger");
const { body } = document;

hamburger.addEventListener("click", () => {
  // alert("hamburger! click");
  body.classList.toggle("nav-show");
});
