// Mejorar nuestros condicionales
// Un ternario es un condicional simple, que permite sustituir if…else por algo más simple visualmente

const age = 30;
let isAllowed;

// Este es el if else normal que conocemos. Para hacer un ternario tengo que pensar...qué está haciendo este bloque? Bajo una condición, cambio una variable y bajo otra condicion la cambia tb.

if (age > 30) {
  isAllowed = true;
} else {
  isAllowed = false;
}

// Hacemos el ternario
age > 30 ? (isAllowed = true) : (isAllowed = false);

// Pero es mejor hacerlo de esta forma
isAllowed = age > 30 ? true : false;

// Siguiente ejemplo

const numberA = 2;
const numberB = 4;

let operation = 'multiply';

// let result;

// if (operation === 'multiply') {
//   result = numberA * numberB;
// } else {
//   result = numberA / numberB;
// }

// const result = operation === 'multiply' ? numberA * numberB : numberA / numberB;

// Ternarios para invocar funciones

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const result = operation === 'multiply' ? multiply(5, 8) : divide(3, 2);
console.log(result);

const ageToDrive = 40;
let drive;

drive = ageToDrive > 40 ? true : false;

console.log(drive);
