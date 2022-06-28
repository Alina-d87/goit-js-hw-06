const decremBtn = document.querySelector('[data-action="decrement"]');
const incremBtn = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');

let counterValue = 0;

decremBtn.addEventListener('click', () => {
  span.innerHTML = `${(counterValue -= 1)}`;
});

incremBtn.addEventListener('click', () => {
  span.innerHTML = `${(counterValue += 1)}`;
});
