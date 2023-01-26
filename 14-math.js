// Es una clase de js que tiene muchas propiedades. Math tiene un set de funciones.

Math.random(); // Nos devuelve un numero pseudo aleatorio de 0 a 1.

// Juego  de cara o cruz

if (Math.random() > 0.5) {
  console.log('CARA');
} else {
  console.log('CRUZ');
}

Math.ceil(); // Dado un numero con decimales acercalos al entero POR ARRIBA mas cercano que tenga.

console.log(Math.ceil(0.2));
console.log(Math.ceil(0.5));
console.log(Math.ceil(0.8));

Math.floor(); // Dado un numero con decimales acercalos al entero POR DEBAJO mas cercano que tenga.

console.log(Math.floor(0.2));
console.log(Math.floor(0.5));
console.log(Math.floor(0.8));

Math.round(); // Dado un numero con decimales acercalos al entero MAS CERCANO que tenga.

console.log('Round 0.2', Math.round(0.2));
console.log('Round 3.5', Math.round(3.5));
console.log('Round 1.8', Math.round(1.8));

// DECIMALES FIJADOS

const randomNum = Math.random();
console.log('Random Number', randomNum);
console.log('Random Number Truncated', randomNum.toFixed(2));
