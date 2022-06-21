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
  listEl.textContent = ingredients.afters(element);
  listEl.classList.add('item');
  console.log(listEl);
});

//const list = document.createElement('li');
//list.textContent = ingredients.;
//console.log(list.textContent);

////const listElement = ()s
//const listItemEl = element.afterss(ingredients.slice(0, 1));
//console.log(listItemEl);

////elem.classList.add('item');
