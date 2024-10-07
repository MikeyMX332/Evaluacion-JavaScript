alert ("Holiwis")

let nombre = "Miguel"; 

let edad = "22"; 

let estudiaste = true;

console.log("Hola soy Mike y tengo 22 años."); 

if (estudiaste) {
  console.log(nombre + " si estudiaste! Pasarás la materia! 🤓");
} else {
  console.log(nombre + " no estudiaste! Reprobarás la materia! 😢");
}

let nombre = prompt("Miguel");
let edad = prompt("22");

let estudiaste = confirm("Estudiaste");

if (estudiaste) {
  alert(nombre + " si estudiaste! Pasarás la materia! 🤓");
} else {
  alert(nombre + " no estudiaste! Reprobarás la materia! 😢");
}
