const refForm = document.querySelector('.login-form');
//console.log(refForm);
const refBtn = document.querySelector('button');
//console.log(refBtn);

const refInputAll = document.querySelectorAll('input');
//console.log(refInputAll);

refForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Bсі поля повинні бути заповнені');
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
