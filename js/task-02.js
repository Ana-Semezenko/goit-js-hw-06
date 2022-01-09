const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul');


const list = ingredients.map(element => {
  const elementItem = document.createElement('li');
  elementItem.textContent = element;
  elementItem.classList.add('item')
  return elementItem;
})

ingredientsList.append(...list);
