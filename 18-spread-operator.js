// El Spread Operator es un operador que nos permite dividir (desestructurar) objetos y arrays
// Nos ayuda hacer código que sea más fácil de prever, de ver como se va a comportar
// Adicionalmente, este Spread Operator también tiene otra 'versión' (otro uso) por el que le llamamos de otra formaRest Operator

const animal = {
  name: 'Alpaca',
  legs: 4,
  food: {
    breakfast: 'grass',
  },
};

const livingSpace = {
  place: 'field',
  lifeSpan: 20,
};

// yo quiero tener en una variable el numero de patas de nuestro animal

// const animalLegs = animal.legs;
// Empiezo con el destructuring y acabo con el spread, aqui lo que hago es... dado un objeto voy a sacar una de sus propiedades y le voy a asignar a una constante.
const { legs, food } = animal; // Salen del objeto animal, siempre q salgan del mismo objeto lo puedo hacer por comas
const { breakfast } = food; // Salen del objeto food
console.log(breakfast);

// SPREAD OPERATOR -> Me sirve para crear copias y trabajar con objetos y con arrays de forma super rapida.
// Me permite unir una cosa dentro de otra, a un objeto, añadir otro objeto y fusinarlo.
// Si nosotros queremos al objeto animal, añadirle las propiedades de livingSpace pero creando un objeto nuevo, crear un super objeto con los dos fusionados.

// De la forma normal
const completeAnimal = {
  name: animal.name,
  lifeSpan: livingSpace.lifeSpan,
  // etc....
};

// Con Spread Operator

const completeAnimalSpreadOperator = {
  ...animal, // Dado el objeto animal, le quito los curly y el resto se queda en el objeto que he marcado
  ...livingSpace, // Lo mismo pasa con livingSpace.
};

const addProperty = (object, key, value) => {
  const newObject = {
    ...object,
    [key]: value,
  };

  return newObject;
};

const animalWithSound = addProperty(
  completeAnimalSpreadOperator,
  'sound',
  'beeee'
);

console.log('Los animales con sonido son:', {
  completeAnimalSpreadOperator,
  animalWithSound,
});

// Rest Operator

// Quiero crear un objeto nuevo que tenga 3 propiedades

// const simpleAnimal = {
//   name: animalWithSound.name,
//   place: animalWithSound.place,
//   lifeSpan: animalWithSound.lifeSpan,
// };

// De animalWithSound, voy a sacar lo que no quiero: legs, food, sound, lo quito... Y del resto del objeto me lo quedo y lo asigno a otra constante que es un objeto con el nombre que yo quiera. (simpleAnimal en este caso)

const {
  legs: animalLegs,
  food: animalFood,
  sound,
  ...simpleAnimal
} = animalWithSound; // Vamos a desestructurar, le puedo cambiar el nombre a la variable con legs: animalLegs, etc... He sacado las propiedades que no quiero en el objeto.



console.log('Simple Animal:', simpleAnimal);
