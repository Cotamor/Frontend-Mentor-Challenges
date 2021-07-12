const toggle = document.getElementById("toggle");
const prices = document.querySelectorAll(".price");
const monthly = [19.99, 24.99, 39.99];
const annually = [199.99, 249.99, 399.99];

toggle.addEventListener("change", (e) => {
  const checked = e.currentTarget.checked;
  if (checked) {
    prices.forEach((price, idx) => {
      price.innerText = `$${monthly[idx]}`;
    });
  } else {
    // Annually
    prices.forEach((price, idx) => {
      price.innerText = `$${annually[idx]}`;
    });
  }
});
