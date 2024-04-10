const myArray = ["hola", "mundo", "como", "estas", "hoy"];
const reversedArray = [];

for (let i = myArray.length - 1; i >= 0; i--) {
  reversedArray.push(myArray[i]);
}

const outputDiv = document.getElementById('output');
outputDiv.textContent = `Array Original: ${myArray.join(', ')}\nArray Invertido: ${reversedArray.join(', ')}`;
