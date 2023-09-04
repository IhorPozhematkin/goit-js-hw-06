const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addItem = function (array) {
  return array.map(ingredient => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  return newItem;
})};

const list = document.querySelector("#ingredients");
const items = addItem(ingredients);
list.append(...items);
 