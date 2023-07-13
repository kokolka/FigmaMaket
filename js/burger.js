const burger = document.querySelector('.burger');
const logoDote = document.querySelector('.logo-dote');
const logo = document.querySelectorAll('.logo')

for(let i = 0; i < logo.length; i++) {
    logoDote.addEventListener('click', () => {
        logo[i].classList.toggle('logo--active')
        burger.classList.toggle('burger--active')
    });    
}