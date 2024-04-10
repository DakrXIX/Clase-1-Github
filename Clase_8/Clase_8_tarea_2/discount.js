function calculateDiscount() {
    var itemPrice = parseFloat(document.getElementById('itemPrice').value);
    var discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
  
    console.log('Item Price:', itemPrice);
    console.log('Discount Percentage:', discountPercentage);
  
    if (isNaN(itemPrice) || isNaN(discountPercentage)) {
      console.log('Invalid input. Please enter valid numbers.');
      document.getElementById('result').textContent = 'Please enter valid numbers.';
      return;
    }
  
    var discountedPrice = itemPrice - (itemPrice * (discountPercentage / 100));
    console.log('Discounted Price:', discountedPrice);
  
    document.getElementById('result').textContent = 'Discounted Price: ' + discountedPrice.toFixed(2);
  }
  