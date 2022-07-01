function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refButton = document.querySelector('.change-color');

const refBody = document.querySelector('body');

refButton.addEventListener('click', buttonColor);

function buttonColor(event) {
  refButton.value = event.currenttarget;
  refBody.style.backgroundColor = getRandomHexColor();
}
