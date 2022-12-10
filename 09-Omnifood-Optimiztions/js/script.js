const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const navButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
navButton.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//Smooth scrolling
