let principal = document.getElementById("principal");

let opcion = window.prompt(
  "¿Qué operación quieres realizar? ¿Suma, resta, multiplicacion, division o resto?"
);

opcion = opcion.toLowerCase();

let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let resto = num1 % num2;

switch (opcion) {
  case "suma":
    principal.innerHTML = `<button onclick='window.alert(suma)'>Suma</button>`;
    break;
  case "resta":
    principal.innerHTML = `<button onclick='window.alert(resta)'>Resta</button>`;
    break;
  case "multiplicacion":
    principal.innerHTML = `<button onclick='window.alert(multiplicacion)'>Multiplicación</button>`;
    break;
  case "division":
    principal.innerHTML = `<button onclick='window.alert(division)`;
    break;
  case "resto":
    principal.innerHTML = `<button onclick='window.alert(resto)`;
    break;
}

/* 
if (opcion === "suma") {
  principal.innerHTML = `<button onclick='window.alert(suma)'>Suma</button>`;
} else if (opcion === "resta") {
  principal.innerHTML = `<button onclick='window.alert(resta)'>Resta</button>`;
} else if (opcion === "multiplicacion") {
  principal.innerHTML = `<button onclick='window.alert(multiplicacion)'>Multiplicación</button>`;
} else if (opcion === "division") {
  principal.innerHTML = `<button onclick='window.alert(division)'>División</button>`;
} else if (opcion === "resto") {
  principal.innerHTML = `<button onclick='window.alert(resto)'>Resto</button>`;
}
 */
