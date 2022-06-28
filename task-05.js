const refInput = document.querySelector('#name-input');
const refSpan = document.querySelector('#name-output');

refInput.addEventListener('input', onWorkSpanText);

refInput.addEventListener('blur', onReturnSpan);

function onWorkSpanText(event) {
  console.log((refSpan.textContent = event.currentTarget.value));
}

function onReturnSpan() {
  if (refInput.textContent === ' '.trim()) {
    return console.log((refSpan.innerHTML = `Anonymous`));
  }
}
