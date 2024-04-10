document.getElementById('form-square').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    let resultDiv = document.getElementById('result');
    let shapeDiv = document.getElementById('shape');
    
    console.log("Entered Base:", base);
    console.log("Entered Height:", height);

    if (base === height) {
        resultDiv.textContent = "It's a square";
        shapeDiv.innerHTML = '<div class="square"></div>';
        console.log("Result: It's a square");
    } else if (base > height) {
        resultDiv.textContent = "Horizontal Rectangle";
        shapeDiv.innerHTML = '<div class="horizontal-rectangle"></div>';
        console.log("Result: Horizontal Rectangle");
    } else {
        resultDiv.textContent = "Vertical Rectangle";
        shapeDiv.innerHTML = '<div class="vertical-rectangle"></div>';
        console.log("Result: Vertical Rectangle");
    }
});
