
function Book(name, publicationDate, price, authors, numPages, category) {
    this.name = name;
    this.publicationDate = publicationDate;
    this.price = price;
    this.authors = authors;
    this.numPages = numPages;
    this.category = category;
}

Book.prototype.isAvailableForUser = function(userAge) {
    return this.category === "only_adults" && userAge >= 18;
};

Book.prototype.getInfoHtml = function() {
    return `
        <h2>${this.name}</h2>
        <p><strong>Publication Date:</strong> ${this.publicationDate}</p>
        <p><strong>Price:</strong> $${this.price}</p>
        <p><strong>Authors:</strong> ${this.authors}</p>
        <p><strong>Number of Pages:</strong> ${this.numPages}</p>
        <p><strong>Category:</strong> ${this.category}</p>
    `;
};

const frozenBook = Object.freeze(new Book(
    "El Laberinto del Fauno",
    "2 de Julio del 2019",
    146,
    "Guillermo del Toro, Cornelia Funke, Bertha Navarro",
    272,
    "Dark Fantasy Novel"
));

function checkAvailability() {
    const ageInput = document.getElementById("ageInput").value;
    const availabilityMessage = document.getElementById("availabilityMessage");

    if (isNaN(ageInput) || ageInput < 18) {
        availabilityMessage.textContent = "Sorry, the book is not available for your age.";
        return;
    } else {
        availabilityMessage.textContent = "The book is available for you!";
    }
}

document.getElementById("checkAvailabilityBtn").addEventListener("click", checkAvailability);

const bookInfoDiv = document.getElementById("bookInfo");
bookInfoDiv.innerHTML = frozenBook.getInfoHtml();
