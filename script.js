const projects = [
  { name: "Four-Card-Feature-Section" },
  { name: "base-apparel-coming-soon" },
  { name: "intro-component-with-signup-form" },
  { name: "single-price-grid-component" },
  { name: "ping-coming-soon-page" },
];

const list = document.getElementById("list");

projects.forEach(({ name }, idx) => {
  console.log(name);
  const listItem = document.createElement("li");
  listItem.innerHTML = `
   
      <a href="/${name}/index.html">
        <img src="./${name}/design/desktop-design.jpg" alt="${name}" />
      </a>
      <div class="content">
        <h3>${idx + 1}. ${formatTitle(name)}</h3>
        <a href="/${name}"><button>View Live</button></a>
      </div> 
  `;
  list.appendChild(listItem);
});

function formatTitle(title) {
  return title
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
