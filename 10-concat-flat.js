// Concat fushiona un array con otro generando un nuevo array, no modifica el original.

const animals = ['🐶', '🐱', '🐂', '🐦'];
const newAnimals = ['🐉', '🐟'];

// newAnimals.forEach((animal) => {
//   animals.push(animal);
// });

const updateAnimals = animals.concat(newAnimals);

console.log(updateAnimals);

// Flat lo que hace es que dado un array de arrays, une todos los sub arrays de un array original. Rompe los sub arrays y nos deja solo el elemento. No modifica el original.

const batchOfAnimals = [['🐉', '🐟'], ['🐴', '🐿'], '🐷', ['🐥', '🦏']];

const fullAnimalList = animals.concat(batchOfAnimals.flat());
console.log(fullAnimalList);
