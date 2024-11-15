const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-screen");
    mobileMenu.classList.add("menu-enter-active");
    mobileMenu.classList.remove("menu-leave-active");
  } else {
    mobileMenu.classList.remove("max-h-screen");
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.add("menu-leave-active");
    mobileMenu.classList.remove("menu-enter-active");
  }
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah, sembunyikan navbar
    navbar.classList.add("-translate-y-full");
  } else {
    // Scroll ke atas, tampilkan navbar
    navbar.classList.remove("-translate-y-full");
  }

  lastScrollTop = scrollTop;
});
