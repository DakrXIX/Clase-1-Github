document.getElementById('checkBtn').addEventListener('click', function() {
    let age = parseInt(document.getElementById('age').value);
    let income = parseInt(document.getElementById('income').value);
  
    console.log("Age:", age);
    console.log("Income:", income);
  
    let shouldPayTax = (age >= 16 && income >= 1000) ? true : false;
  
    console.log("Should pay tax:", shouldPayTax);
  
    let resultElement = document.getElementById('result');
    if (shouldPayTax) {
      resultElement.textContent = "You have to pay taxes.";
      resultElement.style.color = "#ff0000";
    } else {
      resultElement.textContent = "You don't have to pay taxes.";
      resultElement.style.color = "#008000";
    }
  });
  