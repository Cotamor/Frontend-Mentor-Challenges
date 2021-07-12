const menu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

menu.addEventListener("click", () => {
  if (!menu.classList.contains("show")) {
    burger.classList.toggle("show");
    close.classList.toggle("show");
    modal.classList.toggle("show");
  } else {
    burger.classList.toggle("show");
    close.classList.toggle("show");
    modal.classList.toggle("show");
  }
});
