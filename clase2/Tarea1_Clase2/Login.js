function checkPassword() {
    var correctPassword = "kambcode";
    var passwordInput = document.getElementById("passwordInput").value;
    var message = (passwordInput === correctPassword) ? "Successful login!" : "Incorrect password. Please try again.";
    console.log(message);
}
