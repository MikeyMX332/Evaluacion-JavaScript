let nombre = prompt ("Dame tu nombre")

let edad = prompt("dame tu edad"); 

let estudiaste = prompt("Estudiaste?")
//Asi se tiene que hacer
console.log("Hola soy "+ nombre + "y tengo "+  edad +" años".);  // Conctenacion correcion //
// ${nombre Backticks} //

if (estudiaste) {
  console.log(nombre + " si estudiaste! Pasarás la materia! 🤓");
} else {
  console.log(nombre + " no estudiaste! Reprobarás la materia! 😢");
}


if (estudiaste) {
  alert(nombre + " si estudiaste! Pasarás la materia! 🤓");
} else {
  alert(nombre + " no estudiaste! Reprobarás la materia! 😢");
}
