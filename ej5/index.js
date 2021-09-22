let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));

let suma = document.getElementById("suma");
suma.style.color = "yellow";
suma.style.background = "purple";
suma.innerHTML = num1 + num2;

let resta = document.getElementById("resta");
resta.style.color = "orange";
resta.style.background = "blue";
resta.innerHTML = num1 - num2;

let multiplicacion = document.getElementById("multiplicacion");
multiplicacion.style.color = "white";
multiplicacion.style.background = "black";
multiplicacion.innerHTML = num1 * num2;

let division = document.getElementById("division");
division.style.color = "blue";
division.style.background = "yellow";
division.innerHTML = num1 / num2;

let resto = document.getElementById("resto");
resto.style.color = "white";
resto.style.background = "pink";
resto.innerHTML = num1 % num2;
