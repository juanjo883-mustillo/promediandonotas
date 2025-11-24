// Clase Estudiante
class Estudiante {
 constructor(nombre, notas) {
 this.nombre = nombre;
 this.notas = notas;
 }

 calcularNotaFinal() {
 let notaFinal = 0;
 for (let i = 0; i < this.notas.length; i++) {
 notaFinal += this.notas[i];
 }
 return notaFinal / this.notas.length;
 }
}

// Array de estudiantes
let estudiantes = [];

// Función para agregar estudiantes
function agregarEstudiante() {
 let nombre = prompt("Ingrese el nombre del estudiante:");
 let notas = [];
 for (let i = 0; i < 3; i++) {
 let nota = parseFloat(prompt("Ingrese la nota " + (i+1) + " del estudiante:"));
 notas.push(nota);
 }
 let estudiante = new Estudiante(nombre, notas);
 estudiantes.push(estudiante);
 alert("Estudiante agregado con éxito!");
}

// Función para mostrar los estudiantes
function mostrarEstudiantes() {
 console.log("Estudiantes:");
 for (let i = 0; i < estudiantes.length; i++) {
 console.log(`${i+1}. ${estudiantes[i].nombre}`);
 }
}

// Función para calcular las notas finales
function calcularNotasFinales() {
 for (let i = 0; i < estudiantes.length; i++) {
 let notaFinal = estudiantes[i].calcularNotaFinal();
 console.log(`La nota final del estudiante ${estudiantes[i].nombre} es: ${notaFinal.toFixed(2)}`);
 }
}

// Llamadas a las funciones
agregarEstudiante();
mostrarEstudiantes();
calcularNotasFinales();