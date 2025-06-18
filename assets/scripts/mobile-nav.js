const mobileMenu = document.querySelector(".mobile-menu");
const buttonMobile = document.querySelector(".header-menu-button");

buttonMobile.addEventListener("click", () => {
  mobileMenu.classList.toggle("visible");
});
