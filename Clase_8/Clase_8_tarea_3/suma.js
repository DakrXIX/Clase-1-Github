function sumNumbers(array) {
    return array.reduce((total, num) => total + num, 0);
  }
  
  const numbers = [5, 2, 15];
  const result = sumNumbers(numbers);
  const outputElement = document.getElementById('output');
  outputElement.innerText = `The sum of numbers ${numbers.join(', ')} is ${result}.`;
  