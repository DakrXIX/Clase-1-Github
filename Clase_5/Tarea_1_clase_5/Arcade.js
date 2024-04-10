function showCelebratedYears() {
    let age = document.getElementById('age').value;
    let yearsCelebrated = 1;
    let result = '';
  
    while (yearsCelebrated <= age) {
      result += yearsCelebrated + ' ';
      yearsCelebrated++;
    }
  
    document.getElementById('result').textContent = 'Years celebrated: ' + result;

console.log('Years celebrated', result.trim());
}