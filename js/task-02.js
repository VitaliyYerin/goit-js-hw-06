const refs = {
  list: document.querySelector("#ingredients"),
};

const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("item");
  refs.list.append(li);
};

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

ingredients.forEach((ingredient) => createListItem(ingredient));
