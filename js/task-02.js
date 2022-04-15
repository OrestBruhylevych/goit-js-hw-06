const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  ingredientsList: document.querySelector('#ingredients'),
};

const itemsOfIngredients = ingredients.map(option => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = option;
  ingredientsItemEl.classList.add('item');

  return ingredientsItemEl;
});

refs.ingredientsList.append(...itemsOfIngredients);










