const nav = document.querySelector('.nav');
const navLogo = document.querySelector('.nav__logo');


window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
        nav.classList.add("nav--active");
        navLogo.classList.add("nav__logo--active");
    } else {
        nav.classList.remove("nav--active");
        navLogo.classList.remove("nav__logo--active");
    }
});