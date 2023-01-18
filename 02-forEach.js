const numbers = [1, 4, 6, 3, 2, 1, 0, 9];

// Queremos sacar los números mayores que 3. Como lo haría con un bucle for

let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 3) {
//     count += 1;
//   }
// }

// Ahora vamos a usar forEach, que es un bucle que es una función que pertenece a los elementos de tipo array. Cada vez q creo un array, ese array tiene acceso a una función llamada forEach. Esa función crea por debajo un bucle for. Recibe un argumento que es una función anónima o con nombre si la creamos fuera. La función que pasemos como argumento se va a invocar las mismas veces que longitud tenga el array. (en nuestro ejemplo: 8). al hacer las vueltas y recorrer el array, la función va a recibir como argumento cada elemento y posicion del array. Para la primera vuelta va a ser 1, segunda vuelta 4, etc..

numbers.forEach((number) => {
  if (number > 3) {
    count += 1;
  }
});

console.log(`forEach:`, count);

let evenNumbers = [];
let oddNumbers = [];

// Lo hacemos con un ternario. Recordamos que si la función tiene un return implicito podemos quitar los curly brackets.

numbers.forEach((number) =>
  number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number)
);

console.log(`Números pares:`, evenNumbers);
console.log(`Números impares:`, oddNumbers);

// Dato importante: Podemos crear una función y pasarla por el forEach

const setNumberOddOrEven = (number) => {
number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number)
}

numbers.forEach(setNumberOddOrEven)
