function Libro(nombre, fechaPublicacion, price, autores, numPaginas, categoria) {
    this.nombre = nombre;
    this.fechaPublicacion = fechaPublicacion;
    this.price = price;
    this.autores = autores;
    this.numPaginas = numPaginas;
    this.categoria = categoria;
    
    this.getTotalPrice = function() {
        const vat = 0.19;
        const totalPrice = this.price * (1 + vat);
        const vatAmount = totalPrice - this.price;
        return { totalPrice, vatAmount };
    };
}

Libro.prototype.isAvailableForUser = function(userAge) {
    return this.categoria === "only_adults" && userAge >= 18;
};

const myLibro = new Libro(
    "El Laberinto del Fauno",
    "2 de Julio del 2019",
    146,
    ["Guillermo del Toro", "Cornelia Funke", "Bertha Navarro"],
    272,
    "only_adults"
);

document.addEventListener("DOMContentLoaded", function() {
    const libroInfoDiv = document.getElementById("libroInfo");
    const totalPriceDiv = document.getElementById("totalPrice");
    const vatAmountDiv = document.getElementById("vatAmount");

    libroInfoDiv.innerHTML = `
        <h2>${myLibro.nombre}</h2>
        <p><strong>Fecha de Publicación:</strong> ${myLibro.fechaPublicacion}</p>
        <p><strong>Precio:</strong> $${myLibro.price}</p>
        <p><strong>Autores:</strong> ${myLibro.autores.join(", ")}</p>
        <p><strong>Número de Páginas:</strong> ${myLibro.numPaginas}</p>
        <p><strong>Categoría:</strong> ${myLibro.categoria}</p>
    `;

    const ageInput = document.getElementById("ageInput");
    const checkAvailabilityBtn = document.getElementById("checkAvailabilityBtn");
    const availabilityMessage = document.getElementById("availabilityMessage");

    checkAvailabilityBtn.addEventListener("click", function() {
        const userAge = parseInt(ageInput.value, 10);
        if (isNaN(userAge) || userAge < 18) {
            availabilityMessage.textContent = "Lo siento, el libro no está disponible para tu edad.";
            return;
        } else {
            if (myLibro.isAvailableForUser(userAge)) {
                availabilityMessage.textContent = "¡El libro está disponible para ti!";
                const totalPrice = myLibro.getTotalPrice();
                totalPriceDiv.textContent = `Total Price with VAT: $${totalPrice.totalPrice.toFixed(2)}`;
                vatAmountDiv.textContent = `VAT Amount: $${totalPrice.vatAmount.toFixed(2)}`;
            } else {
                availabilityMessage.textContent = "Lo siento, el libro no está disponible para tu edad.";
                totalPriceDiv.textContent = "";
                vatAmountDiv.textContent = "";
            }
        }
    });
});
