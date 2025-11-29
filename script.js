let estudiantes = prompt("nombre del estudiante");
console.log(estudiantes);

const DNI =prompt ("ingrese su Numero de DNI");
console.log("dni: " + DNI);

let notas = [];
for (let i = 0; i < 3; i++) {
  let nota = parseInt(prompt(`Ingrese la nota ${i + 1}:`));
  notas.push(nota);
}
console.log(notas);


function calcularNotaFinal() {
  let notaFinal = 0;
  for (let i = 0; i < notas.length; i++) {
    notaFinal += notas[i]; // suma cada nota al total
  }
  notaFinal /= notas.length; // divide por la cantidad de notas
  console.log("su promedio es " + notaFinal.toFixed(2));

  if (notaFinal >= 7) { // Cambié notafinal a notaFinal
  alert("El alumno se encuentra aprobado.su promedio es " + notaFinal.toFixed(2));
} else {
  alert("El alumno se encuentra desaprobado. su promedio es " + notaFinal.toFixed(2));
}

}

calcularNotaFinal();


