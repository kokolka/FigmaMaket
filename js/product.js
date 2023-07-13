const products = document.querySelector('.products');
const productsInfoArrow = document.querySelectorAll('.products__info-arrow');
const productsMeaningText = document.querySelectorAll('.products__meaning-text');
let productPrice = document.querySelector('.price');

const additional = document.querySelectorAll('.additional');
const additionalText = document.querySelectorAll('.additional__text');

for (let i = 0; i < productsInfoArrow.length; i++) {
    productsInfoArrow[i].addEventListener('click', () => {
        productsInfoArrow[i].classList.toggle('products__info-arrow--active');
        additional[i].classList.toggle('additional--active');
    });
}

for (let j = 0; j < additionalText.length; j++) {
    additionalText[j].addEventListener('click', (event) => {
        const clickedAdditionalText = event.target;
        const productsInfo = clickedAdditionalText.closest('.products__info');
        const productsMeaningText = productsInfo.querySelector('.products__meaning-text');
        productsMeaningText.textContent = clickedAdditionalText.textContent;
    });
}

const subButtonsDicrement = document.querySelector('.sub-buttons__dicrement');
const subButtonsIncrement = document.querySelector('.sub-buttons__increment');
const subButtonsNumber = document.querySelector('.sub-buttons__number');

subButtonsDicrement.addEventListener('click', () => {
    subButtonsNumber.value--;
    productPrice.textContent = parseInt(productPrice.textContent) - 360
    if (subButtonsNumber.value < 1) {
        subButtonsNumber.value++;
        productPrice.textContent = parseInt(productPrice.textContent) + 360
    }
});

subButtonsIncrement.addEventListener('click', () => {
    productPrice.textContent = parseInt(productPrice.textContent) + 360
    subButtonsNumber.value++;
}); 



