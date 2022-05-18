let maxima: number = 0;
let minima: number = 0;
//let aux: number = 0;
let promedio: number;
let numIngresado: number;
let contador: number;

while (numIngresado !== 0) {
  for (contador = 1; contador <= 2; contador++) {
    numIngresado = Number(prompt("Ingrese el número: "));
    if (numIngresado === 0) {
      break;
    } else if (numIngresado > maxima) {
      maxima = numIngresado;
    } else {
      minima = numIngresado;
    }
  }
  promedio = (maxima + minima) / 2;
  console.log(
    "mínima: " + minima + ", máxima: " + maxima + ", media: " + promedio
  );
}
