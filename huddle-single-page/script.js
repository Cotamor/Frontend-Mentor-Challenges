const circles = document.querySelectorAll(".circle");

console.log(circles);
circles.forEach((circle) => {
  const icon = circle.firstChild;
  circle.addEventListener("mouseover", () => {
    console.log(icon);
    icon.style = "color: var(--SoftMagenta)";
  });
  circle.addEventListener("mouseout", () => {
    console.log(icon);
    icon.style = "color: white";
  });
});
