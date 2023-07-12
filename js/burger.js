const navBurgerBtn = document.querySelector('.nav__burger-btn');
const navButtons = document.querySelector('.nav__buttons');

navBurgerBtn.addEventListener('click', () => {
    navButtons.classList.toggle('active');
    navBurgerBtn.classList.toggle('active');
    
});