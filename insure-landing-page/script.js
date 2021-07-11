const mobileMenu = document.getElementById("mobile-menu");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const links = document.querySelector(".links");

mobileMenu.addEventListener("click", () => {
  links.classList.toggle("show");
  burger.classList.toggle("show");
  close.classList.toggle("show");
});
