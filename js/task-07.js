const inputFont = document.querySelector('#font-size-control');

const spanText = document.querySelector('span');

inputFont.addEventListener('input', onChangeSpanText);

function onChangeSpanText(event) {
  inputFont.scroll = event.currentTarget.value + 'px';
  spanText.style.fontSize = inputFont.scroll;
}
