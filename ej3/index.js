let principal = document.getElementById("principal");

let nombre = window.prompt("¿Cómo te llamas?");
let edad = window.prompt("¿Cuántos años tienes?");

/* EJEMPLO IF ELSE

if (edad < 18) {
  principal.innerHTML = `Hola ${nombre}, eres menor de edad`;
} else {
  principal.innerHTML = `Hola ${nombre}, eres mayor de edad`;
}
 */

edad < 18
  ? (principal.innerHTML = `Hola ${nombre}, eres menor de edad`)
  : (principal.innerHTML = `Hola ${nombre}, eres mayor de edad`);

/* EJEMPLO SWITHC

switch (edad < 18) {
  case true:
    principal.innerHTML = `Hola ${nombre}, eres menor de edad`;
    break;
  case false:
    principal.innerHTML = `Hola ${nombre}, eres mayor de edad`;
    break;
}
 */
