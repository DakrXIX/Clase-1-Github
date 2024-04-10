
const ArrayUtils = Object.freeze({
    sum: function(array) {
      return array.reduce((total, num) => total + num, 0);
    },
    average: function(array) {
      const sum = this.sum(array);
      return sum / array.length;
    }
  });
  
  const UI = Object.freeze({
    getInputArray: function() {
      const input = document.getElementById('input-numbers').value;
      return input ? input.split(',').map(num => parseInt(num.trim())) : [];
    },
    displayResult: function(numbers) {
      const sum = ArrayUtils.sum(numbers);
      const average = ArrayUtils.average(numbers);
      const outputElement = document.getElementById('output');
      outputElement.innerHTML = `
        <p>Numbers: ${numbers.join(', ')}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${average.toFixed(2)}</p>
      `;
    }
  });
  
  document.getElementById('calculate-btn').addEventListener('click', function() {
    const numbers = UI.getInputArray();
    UI.displayResult(numbers);
  });
  