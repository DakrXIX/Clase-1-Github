var Persona = {
    nombre: "",
    edad: 0,
    peso: "",
    altura: "",
    calcularImc: function() {
      return this.peso / (this.altura * this.altura);
    },
    esMayorDeEdad: function() {
      return this.edad > 18;
    }
  };
  
  var persona1 = Object.create(Persona);
  persona1.nombre = "Juan";
  persona1.edad = 25;
  persona1.peso = 70;
  persona1.altura = 1.75;
  
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p>Nombre: ${persona1.nombre}</p>
    <p>Edad: ${persona1.edad}</p>
    <p>Peso: ${persona1.peso}</p>
    <p>Altura: ${persona1.altura}</p>
    <p>IMC: ${persona1.calcularImc()}</p>
    <p>¿Es mayor de edad? ${persona1.esMayorDeEdad() ? 'Sí' : 'No'}</p>
  `;
  