const shoppingList = [];

function addItem() {
  const itemInput = document.getElementById('itemInput');
  const newItem = itemInput.value.trim();

  if (newItem === '') {
    alert('Please enter a valid item.');
    return;
  }

  if (shoppingList.includes(newItem)) {
    alert('Error: This item is already in the shopping list.');
    return;
  }

  shoppingList.push(newItem);
  displayShoppingList();
  itemInput.value = '';
}

function displayShoppingList() {
  const shoppingListElement = document.getElementById('shoppingList');
  shoppingListElement.innerHTML = '';

  shoppingList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    shoppingListElement.appendChild(li);
  });
}
