function calculate() {
    var numberA = parseFloat(document.getElementById('numberA').value);
    var numberB = parseFloat(document.getElementById('numberB').value);
    var operation = document.getElementById('operation').value;
    var result;
  
    console.log(`Number A: ${numberA}`);
    console.log(`Number B: ${numberB}`);
    console.log(`Operation: ${operation}`);
  
    if (operation === 'add') {
      result = numberA + numberB;
    } else if (operation === 'subtract') {
      result = numberA - numberB;
    } else if (operation === 'multiply') {
      result = numberA * numberB;
    } else if (operation === 'divide') {
      if (numberB === 0) {
        result = "Cannot divide by zero!";
      } else {
        result = numberA / numberB;
      }
    }
  
    console.log(`Result: ${result}`);
  
    document.getElementById('result').innerText = `Result: ${numberA} ${getOperationSymbol(operation)} ${numberB} = ${result}`;
  }
  
  function getOperationSymbol(operation) {
    switch (operation) {
      case 'add':
        return '+';
      case 'subtract':
        return '-';
      case 'multiply':
        return '*';
      case 'divide':
        return '/';
      default:
        return '';
    }
  }
  
  document.getElementById('calculateButton').addEventListener('click', calculate);
  