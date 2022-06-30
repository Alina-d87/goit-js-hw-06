const refInput = document.querySelector('#validation-input');
console.log(refInput);

refInput.addEventListener('input', onInputText);

function onInputText(event) {
  refInput.textContent = event.currentTarget.value;
}

refInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (refInput.textContent.length === 6) {
    return (refInput.style.borderColor = '#4caf50');
  } else if (refInput.textContent.length !== 6) {
    return (refInput.style.borderColor = '#f44336');
  }
}
