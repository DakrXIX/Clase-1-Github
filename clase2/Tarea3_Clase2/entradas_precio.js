function calculateEntryPrice() {
    var age = parseInt(document.getElementById("age").value);
    var entryPrice = 0;

    if (age < 4) {
        entryPrice = 0;
    } else if (age >= 4 && age <= 18) {
        entryPrice = 5;
    } else {
        entryPrice = 10;
    }

    console.log("Entry price: $" + entryPrice);
}
