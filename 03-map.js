// Es un metodo que me sirve para recorrer todos los elementos de un array y si espera q se devuelva algo dentro del Array. Map genera un nuevo array con los elementos que yo devuelva de cada iteración.

const animals = ['🐼', '🦦', '🐸'];

const getAnimalFood = (animal) => {
  let food;
  if (animal === '🐼') {
    food = '🎍';
  } else if (animal === '🦦') {
    food = '🐟';
  } else if (animal === '🐸') {
    food = '🐛';
  }
  return food;
};

// animals.forEach(getAnimalFood) // Lo hacemos así para que con cada vuelta que de el forEach, invoque a la función getAnimalFood.

// Map recorre la array de la misma forma y para cada vuelta invoca a una función. Recibe lo mismo, el elemento y el indice. Map me devuelve un nuevo array. Vamos a asignar a algo. Creamos un array de comida para los animales que sale como resultado de invocar a map sobre el array animals. SIEMPRE TENGO Q DEVOLVER.

const animalFood = animals.map((animal) => {
  return getAnimalFood(animal);
});

console.log(animalFood);


// for (let i = 0; i < animals.length; i++) {
//   const animal = animals[i];
//   let animalFood;
//   if (animal === '🐼') {
//     animalFood = '🎍';
//   } else if (animal === '🦦') {
//     animalFood = '🐟';
//   } else if (animal === '🐸') {
//     animalFood = '🐛';
//   }

//   food.push(animalFood);
// }

console.log(`Para los animales: ${animals}`);
console.log(`Su comida favorita es: ${animalFood}`);

// Vamos a utilizar quokka para ver la terminal en tiempo real. Pulsamos ctrl + shift + p y le decimos start on current file
