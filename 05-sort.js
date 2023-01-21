// Sort que me hace, MUY IMPORTANTE: modifica mi array y luego me lo ordena en orden ascendenete. Es mejor copiar el array.
// Si yo pongo el 1 y el 10, me los va a ordenar seguido, esto pasa si a sort no le paso una fucion (callback), sort transforma todo a strings  y los ordena por su codigo unicode. En formato texto, el uno va antes que dos.
// Entonces habrá que mandar la función callback, sort recibe dos argumentos: a,b, siendo a el i[1] y b el i[0]. Para la siguiente vuelta a será el i[2] y b será el i[1]. Si devuelvo 1, el array se queda igual, si devuelvo -1, el array se ha dado la vuelta.

const numbers = [1, 5, 10, 4, 5, 3, 6];

// Vamos a crear 2 funciones que hay q guardar y nos van a ayudar siempre. FUNCIONES SORT PARA NUMEROS

const orderNumbersAscending = (a, b) => a - b; // Si a vale 5 y b vale 1, como 5-1=4 que es mayor que 0, sería como devolver ese 1 y se ordenan bien.
const orderNumbersDescending = (a, b) => b - a;

numbers.sort(orderNumbersAscending);
numbers.sort(orderNumbersDescending);

// numbers.sort((a, b) => {
//   if (a > b) {
//     // Si a es mayor que b, lo dejo como está.
//     return 1;
//   }

//   if (a < b) {
//     // Si a es menor que b, lo doy la vuelta y sort dice "se han dado la vuelta", se apunta que ha habido un cambio y recorre el array mas tarde.
//     return -1;
//   }

//   return 0;
// });

console.log(numbers);

// Ordenar strings

const names = ['juan', 'pepe', 'alberto', 'Pepe', 'Ramon']; // Los strings me los ha ordenado bien de forma ascendente, solo con el sort (siempre y cuando no haya mayusculas y minusculas). como le damos la vuelta?

// FUNCIONES SORT PARA STRINGS
const comparesStringAscending = (a, b) => a.localeCompare(b);
const comparesStringDescending = (a, b) => b.localeCompare(a);

names.sort(comparesStringAscending);

// con la funcion localeCompare propa de strings puedo ordenarlos, si hago a.localeCompare(b) me los ordenará de forma ascendente, si lo hago al revés, será de forma descendente.

// names.sort((a, b) => {
//   return b.localeCompare(a);
// });
console.log(names);

const people = [
  { name: 'juan', age: 30 },
  { name: 'pepe', age: 40 },
  { name: 'alberto', age: 50 },
  { name: 'Pepe', age: 20 },
  { name: 'Ramon', age: 75 },
];

people.sort((a, b) => {
    return comparesStringAscending(a.name, b.name);
  });


people.sort((a, b) => {
  return orderNumbersAscending(a.age, b.age);
});

console.log(people);
