document.addEventListener('DOMContentLoaded', function () {
  const itemInput = document.getElementById('itemInput');
  const addItemBtn = document.getElementById('addItemBtn');
  const clearListBtn = document.getElementById('clearListBtn');
  const shoppingList = document.getElementById('shoppingList');

  function createListItem(item) {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const namePrice = document.createElement('span');
    namePrice.classList.add('name-price');
    namePrice.textContent = `${item.name} - $${item.price.toFixed(2)}`; 
    li.appendChild(namePrice);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', function () {
      li.remove();
      console.log(`Removed item: ${item.name}`);
    });
    li.appendChild(removeBtn);

    shoppingList.appendChild(li);
  }

  addItemBtn.addEventListener('click', function () {
    const newItemName = itemInput.value.trim();
    if (newItemName) {
      const newItem = {
        name: newItemName,
        price: parseFloat((Math.random() * 1000).toFixed(2)),
      };
      createListItem(newItem);
      itemInput.value = '';

      showMessage(`Added "${newItem.name}" to the list`);
    }
  });

  clearListBtn.addEventListener('click', function () {
    while (shoppingList.firstChild) {
      shoppingList.removeChild(shoppingList.firstChild);
    }
    console.log('List cleared');
  });

  function showMessage(message) {
    const msg = document.createElement('p');
    msg.textContent = message;
    msg.classList.add('message');
    
    const mainElement = document.querySelector('.main');
    mainElement.insertBefore(msg, mainElement.children[2]);
    setTimeout(() => {
      msg.remove();
    }, 2000);
}

  document.addEventListener('click', function (event) {
    const messageContainer = document.getElementById('messageContainer');
    if (event.target === messageContainer) {
      messageContainer.remove();
    }
  });
});
