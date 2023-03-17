document.addEventListener("DOMContentLoaded", () => {
  const navbarBurger = document.getElementById("nav-burger");
  const navbarMenu = document.getElementById("navbarBasicExample");

  navbarBurger.addEventListener("click", () => {
    navbarBurger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
});
