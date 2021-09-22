let principal = document.getElementById("principal");

let nombre = window.prompt("¿Cómo te llamas?");
let edad = window.prompt("¿Cuántos años tienes?");

if (edad < 18) {
  principal.style.color = "red";
  principal.innerHTML = `Hola ${nombre}, eres menor de edad`;
} else {
  principal.style.color = "green";
  principal.innerHTML = `Hola ${nombre}, eres mayor de edad`;
}
