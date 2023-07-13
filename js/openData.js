const dataItems = document.querySelectorAll('.item__array');

function openEl(event) {
  event.srcElement.classList.toggle('active');

  if (event.srcElement.offsetParent.children[1].hidden) {
    event.srcElement.offsetParent.children[1].hidden = false;
  } else {
    event.srcElement.offsetParent.children[1].hidden = true;
  }
}

for (let el of dataItems) {
  el.children[0].addEventListener('click', openEl);
}
