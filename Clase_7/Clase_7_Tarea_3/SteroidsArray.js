document.addEventListener("DOMContentLoaded", function () {
    let myArray = [];

    for (let i = 0; i < 50; i++) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        myArray.push(randomNumber);
    }

    console.log("Generated Array:", myArray);

    let newArray = [];

    myArray.forEach((num) => {
        if (num < 4) {
            newArray.push(num);
        }
    });

    console.log("New Array (Numbers less than 4):", newArray);

    const ulElement = document.getElementById("random-array");
    myArray.forEach((num) => {
        let liElement = document.createElement("li");
        liElement.textContent = num;
        ulElement.appendChild(liElement);
    });

    console.log("Array displayed in the DOM.");
});
