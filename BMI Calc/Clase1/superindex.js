document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nombreCompleto = document.getElementById('nombre').value;
    var alturaCm = parseFloat(document.getElementById('altura').value);
    var alturaM = alturaCm / 100;
    var pesoKg = parseFloat(document.getElementById('peso').value);
    var imc = pesoKg / alturaM ** 2 ;

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Hola ' + nombreCompleto + ', tu índice de masa corporal es ' + imc.toFixed(1) + ' kg/m2</p>';
    resultadoDiv.style.display = 'block';
});
