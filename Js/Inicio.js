let PrecioOriginal;
let NumeroCuotas;
let PrecioCuotas;

// Verificacion Solo Numeros
do {
  PrecioOriginal = prompt("Ingresa el precio Original del producto ");
} while (isNaN(PrecioOriginal));

do {
  NumeroCuotas = prompt("Ingrese el número de cuotas");
} while (isNaN(NumeroCuotas));

do {
  PrecioCuotas = prompt("Ingrese el valor de las cuotas");
} while (isNaN(PrecioCuotas));


//Calculador de interes 
if((PrecioCuotas * NumeroCuotas) > PrecioOriginal){
  alert("Estas pagando un extra de: $" + ((PrecioCuotas * NumeroCuotas) - PrecioOriginal) )
}else{
  alert("No estas pagando un extra por las cuotas")
}