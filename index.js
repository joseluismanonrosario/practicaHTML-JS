let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let AnoNacimiento = prompt("Ingrese su año de nacimiento:");
let edad = 2026 - AnoNacimiento;
let mayorEdad = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
let mensaje = `Hola ${nombre} ${apellido}, tienes ${edad} años. ${mayorEdad}`;
alert(mensaje);
