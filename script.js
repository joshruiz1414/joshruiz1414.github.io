const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("sidebarToggle");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.add("collapsed");
  });
});
