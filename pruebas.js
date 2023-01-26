const age = 30;
let isAllowed;

if (age > 30) {
  isAllowed = true;
} else {
  isAllowed = false;
}

isAllowed = age >= 30 ? true : false;

console.log(isAllowed);

const numberA = 2;
const numberB = 4;

let operation = 'multiply';
let result;

if (operation === 'multiply') {
  result = numberA * numberB;
} else if (operation === 'divide') {
  result = numberA / numberB;
}

console.log(result);

const result2 =
  operation === 'multiply' ? numberA * numberB : numberA / numberB;

console.log(result2);

// Para invocar funciones

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const result3 = operation === 'multiply' ? multiply(5, 2) : divide(8, 4);

console.log(result3);

let operation3 = 'suma';

const sum = (a, b) => a + b;
const rest = (a, b) => a - b;

const result4 = operation3 === 'suma' ? sum(10, 20) : rest(15, 5);

console.log(result4);

// forEach

const numbers = [1, 4, 6, 3, 2, 1, 0, 9];

// Queremos sacar los números mayores que 3. Como lo haría con un bucle for

let count = 0;

numbers.forEach((number) => {
  if (number > 3) {
    count += 1;
  }
});

// for (let i = 0; i < numbers.length; i++) {
//     number = numbers[i];
//     if (number > 3) {
//         count += 1
//     }
// }

console.log(count);

let evenNumbers = [];
let oddNumbers = [];

// Lo hacemos con un ternario. Recordamos que si la función tiene un return implicito podemos quitar los curly brackets.

numbers.forEach((number) =>
  number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number)
);

console.log('Los numeros pares son', evenNumbers);
console.log('Los numeros impares son', oddNumbers);

// map

const animals = ['🐼', '🦦', '🐸'];

const getAnimalFood = (animal) => {
  let food;
  if (animal === '🐼') {
    food = '🎍';
  } else if (animal === '🦦') {
    food = '🐛';
  } else if (animal === '🐸') {
    food = '🥬';
  }

  return food;
};

const animalFood = animals.map((animal) => {
  return getAnimalFood(animal);
});

console.log(animals);
console.log(animalFood);

// Filter

const animals2 = ['🐼', '🐦', '🐮', '🦁'];

const herbAnimals = [];

// for (let i = 0; i < animals2.length; i++) {
//   let animal = animals2[i];
//   if (animal === '🐼' || animal === '🐮') {
//     herbAnimals.push(animal);
//   }
// }

animals2.filter((animal) => {
  if (animal === '🐼' || animal === '🐮') {
    herbAnimals.push(animal);
  }
});

console.log(herbAnimals);

// Con un array de objetos

const animals3 = [
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

const herbAnimals3 = animals3
  .filter((animal) => {
    return animal.herb;
  })
  .map((animal) => {
    return animal.icon;
  });

console.log(herbAnimals3);

// Sort

const numbers2 = [1, 5, 10, 4, 5, 3, 6];

let firstNumber = 0;

const orderNumbersAscending = (a, b) => a - b;
const orderNumbersDescending = (a, b) => b - a;
numbers2.sort(orderNumbersAscending);
numbers2.sort(orderNumbersDescending);

console.log(numbers2);

const people = [
  { name: 'juan', age: 30 },
  { name: 'pepe', age: 40 },
  { name: 'alberto', age: 50 },
  { name: 'Pepe', age: 20 },
  { name: 'Ramon', age: 75 },
];

people.sort((name) => {
  return name.name;
});

console.log(people);



// Empezar a contar desde 1
// Completar un array con todos los numeros
