const input = document.querySelector('.input__login_for_reset');
const formForReset = document.querySelector('.form-for-reset');
const main = document.querySelector('main');

let dataOfInput = false;

function changeInput(event) {
  if (event.srcElement.value.length > 1) {
    event.srcElement.offsetParent.children[1].children[0].classList.remove('gray-button');
    dataOfInput = true;
  } else {
    event.srcElement.offsetParent.children[1].children[0].classList.add('gray-button');
    dataOfInput = false;
  }
}

function openModal(event) {
  input.value = '';
  input.offsetParent.children[1].children[0].classList.add('gray-button');

  // fetch('./changePassword.html')
  //   .then((res) => {
  //     return res.text();
  //   })
  //   .then((text) => {});
  event.preventDefault();
}

input.addEventListener('input', changeInput);
formForReset.addEventListener('submit', openModal);
