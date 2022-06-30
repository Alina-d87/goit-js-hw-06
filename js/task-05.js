const refInput = document.querySelector('#name-input');
const refSpan = document.querySelector('#name-output');

refInput.addEventListener('input', onWorkSpanText);

function onWorkSpanText(event) {
  refSpan.textContent = event.currentTarget.value || `Anonymous`.trim();
}
