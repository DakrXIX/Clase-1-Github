function compararNumeros() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    console.log("Número 1 ingresado:", num1);
    console.log("Número 2 ingresado:", num2);

    switch(true) {
        case num1 < num2:
            console.log("El número menor es", num1);
            resultado.textContent = "El número menor es " + num1;
            break;
        case num2 < num1:
            console.log("El número menor es", num2);
            resultado.textContent = "El número menor es " + num2;
            break;
        default:
            console.log("Los números son iguales");
            resultado.textContent = "Los números son iguales";
    }
}
