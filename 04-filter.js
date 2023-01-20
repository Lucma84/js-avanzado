// si nosotros pasamos por la función .filter(), generamos un NUEVO array, con los elementos que cumplan una condición devolviendo TRUE.
//Vamos a empujar al array herbAnimals los animales herviboros.

// const animals = ['🐼', '🐦', '🐮', '🦁'];

// const herbAnimals = [];

// for (let i = 0; i < animals.length; i++) {
//   const animal = animals[i];
//   if (animal === '🐼' || animal === '🐮') {
//     herbAnimals.push(animal);
// }
// }

// Vamos a usar el filter. A filter hay que pasarle una funcion flecha, llamada callback. Y en cada iteración va a recibir el elemento que estemos recorriendo. Filter tiene que devolver true o false. Si filter devuelve true, yo me quedo el elemento siempre. Está diciendo que para iteracion, me quedo todos. Si en cambio devuelvo false, no me quedo ninguno.
// Si ponemos esto console.log({ isHerbAnimal, animal }) nos dice si es true or false

// Vamos a hacer un caso mas real con objetos. Animal son objetos por cada vuelta de filter yo tng un animalito.
// Nos devuelve un array de objetos con los animalitos que son herviboros.
// Como puedo transformar un array de objetos en un array de elementos distintos de la misma longitud? con MAP

const animals = [
  {
    icon: '🐼',
    herb: true,
  },
  {
    icon: '🐦',
    herb: false,
  },
  {
    icon: '🐮',
    herb: true,
  },
  {
    icon: '🦁',
    herb: false,
  },
];

const herbAnimals = animals.filter((animal) => {
  return animal.herb;
});

const herbAnimalsIcons = herbAnimals.map((animal) => {
  return animal.icon;
});

// Se puede concatenar filter con map, como filter me devuelve un array, le puedo pasar el map para quedarme con los iconos.
// const herbAnimals = animals 
//   .filter((animal) => {
//     return animal.herb;
//   })
//   .map((animal) => {
//     return animal.icon;
//   });

console.log(`Los animales herviboros son ${herbAnimalsIcons}`);
