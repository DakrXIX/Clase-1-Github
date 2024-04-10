function calculateInvestment() {
    let monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    let months = parseInt(document.getElementById('months').value);
    let totalInvestment = 0;
    let resultText = '';
  
    for (let m = 1; m <= months; m++) {
      let capital = monthlyInvestment * m;
      totalInvestment += capital;
      resultText += `Month ${m}: $ ${capital}<br>`;
    }
  
    resultText += `<br>End, Total savings: $ ${totalInvestment}`;
    document.getElementById('result').innerHTML = resultText;
    
    console.log('result', totalInvestment);
  }
  