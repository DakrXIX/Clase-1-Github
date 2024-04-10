function checkTax() {
    var age = parseInt(document.getElementById("age").value);
    var income = parseFloat(document.getElementById("income").value);
    var taxStatus = (age > 16 && income >= 1000) ? "You need to pay taxes." : "You don't need to pay taxes.";
    document.getElementById("taxStatus").textContent = taxStatus;
    console.log(taxStatus);
}
