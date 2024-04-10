function calculateIVA() {
    var price = document.getElementById('price').value;
    console.log('Price entered:', price);
    
    var iva = price * 19 / 100;
    console.log('IVA calculated:', iva);
  
    document.getElementById('result').innerText = 'IVA: $' + iva.toFixed(2);
  }
  