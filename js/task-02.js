const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = ingredients;
  listEl.innerHTML = `${element}`;
  return listEl;
});

console.log(elements);

list.append(...elements);
