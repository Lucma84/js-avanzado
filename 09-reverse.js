// Da la vuelta a una array pero muta ese array, lo cambia. Modifical el original. Para evitar modificar el original, copiamos el array con slice

const people = [
  { name: 'A', age: 20 },
  { name: 'B', age: 30 },
  { name: 'C', age: 42 },
  { name: 'D', age: 50 },
];

const reversedPeople = people.slice().reverse();

console.log('People', people);
console.log('Reverse People', reversedPeople);
