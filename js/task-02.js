const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
ingredients.map(element => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredients;
  listEl.classList.add('item');
  listEl.innerHTML = `${element}`;
  console.log(listEl);
  list.append(listEl);
});
