// Mobile menu toggle
document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("hidden");
});

// Mega menu hover logic
const servicesLink = document.getElementById("services-link");
const megaMenu = document.getElementById("mega-menu");
let menuTimeout;

servicesLink.addEventListener("mouseenter", () => {
  clearTimeout(menuTimeout);
  megaMenu.classList.remove("opacity-0", "invisible");
  megaMenu.classList.add("opacity-100", "visible");
});

servicesLink.addEventListener("mouseleave", () => {
  menuTimeout = setTimeout(() => {
    megaMenu.classList.remove("opacity-100", "visible");
    megaMenu.classList.add("opacity-0", "invisible");
  }, 200);
});

megaMenu.addEventListener("mouseenter", () => {
  clearTimeout(menuTimeout);
  megaMenu.classList.add("opacity-100", "visible");
});

megaMenu.addEventListener("mouseleave", () => {
  menuTimeout = setTimeout(() => {
    megaMenu.classList.remove("opacity-100", "visible");
    megaMenu.classList.add("opacity-0", "invisible");
  }, 200);
});
