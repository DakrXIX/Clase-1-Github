function performVerifications() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter two valid numbers.";
        return;
    }

    if (num1 === num2) {
        result.textContent = "Number " + num1 + " is equal to number " + num2;
    } else {
        result.textContent = "Number " + num1 + " is different from number " + num2;
    }

    if (num1 < num2) {
        result.textContent += "\nNumber " + num1 + " is less than number " + num2;
    } else {
        result.textContent += "\nNumber " + num1 + " is greater than or equal to number " + num2;
    }

    if (num1 > num2) {
        result.textContent += "\nNumber " + num2 + " is less than number " + num1;
    } else {
        result.textContent += "\nNumber " + num2 + " is greater than or equal to number " + num1;
    }

    if (num1 <= num2) {
        result.textContent += "\nNumber " + num1 + " is less than or equal to number " + num2;
    } else {
        result.textContent += "\nNumber " + num2 + " is less than or equal to number " + num1;
    }
}
