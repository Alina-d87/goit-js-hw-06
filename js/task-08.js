const refForm = document.querySelector('.login-form');

const refBtn = document.querySelector('button');

const refInputAll = document.querySelectorAll('input');

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
