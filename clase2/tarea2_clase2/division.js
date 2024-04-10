function divideNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    console.log(num2 === 0 ? "Error: el divisor no puede ser cero" : "El resultado de la división es: " + (num1 / num2));
}
