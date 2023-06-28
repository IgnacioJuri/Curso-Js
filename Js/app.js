
// Function para calcular el IMC
// Cuenta: IMC = Peso (Kg) / Estatura al cuadrado (m).
function calcularIMC(peso, altura) {
    let alturaMetros = altura / 100;
    let imc = peso / (alturaMetros * alturaMetros);
    return imc.toFixed(2);
  }
  
  // Prompt para los datos 
  let nombre = prompt("Ingrese su nombre:");
  let genero = prompt("Ingrese su género (Masculino/Femenino):");
  let peso = parseFloat(prompt("Ingrese su peso en kg:"));
  let altura = parseFloat(prompt("Ingrese su altura en cm:"));
  
  // Objeto usuario con sus datos
  let usuario = {
    nombre: nombre,
    genero: genero,
    peso: peso,
    altura: altura,
    imc: calcularIMC(peso, altura)
  }
  
  // Array para los datos de los usuarios
  let usuarios = [];
  usuarios.push(usuario);
  

  // Console.log de los datos y del array 
  console.log("Datos del usuario:");
  console.log("Nombre:", usuario.nombre);
  console.log("Género:", usuario.genero);
  console.log("Peso:", usuario.peso, "kg");
  console.log("Altura:", usuario.altura, "cm");
  console.log("IMC:", usuario.imc);
  console.log("Usuarios registrados:");
  console.log(usuarios);