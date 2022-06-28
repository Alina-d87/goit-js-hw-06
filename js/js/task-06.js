const refInput = document.querySelector('#validation-input');
console.log(refInput);

//console.log(refInput.classList.add('#validation-input.valid'));
//console.log(refInput.classList.add('#validation-input.invalid'));

refInput.addEventListener('input', onInputText);

function onInputText(event) {
  console.log((refInput.textContent = event.currentTarget.value));
}

refInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (refInput.textContent.length === 6) {
    return (refInput.style = '#validation-input.valid');
  } else if (refInput.textContent.length !== 6) {
    return console.log(refInput.classList.add('#validation-input.invalid'));
  }
}
