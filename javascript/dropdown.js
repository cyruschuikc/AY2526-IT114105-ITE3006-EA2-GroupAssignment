// javascript/dropdown.js

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown-menu");
  const summary = document.getElementById("dropdown-menu-tag");
  const dropdownList = dropdown.querySelector("ul");

  // Open when mouse enters the summary
  summary.addEventListener("mouseenter", () => {
    dropdown.setAttribute("open", "true");
  });

  // Close when mouse leaves the whole <details> area
  dropdown.addEventListener("mouseleave", () => {
    dropdown.removeAttribute("open");
  });

  // Close when clicking any item inside the dropdown
  dropdownList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      dropdown.removeAttribute("open");
    });
  });
});
