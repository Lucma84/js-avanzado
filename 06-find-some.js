// Find me permite encontrar dentro de un array un elemento que cumpla una condicion.
// Si lo encuentro, ese elemento se lo asigan a una constante, que no lo encuentra, me devuelve undefined
// Le asigno a una constante y busco la comida que quiero dentro del array.
// Con find solo saco el primero de todos los elementos que me encuentro, aunque haya muchos iguales.

// const fridgeFood = ['🍜', '🍔', '🥬', '🍗'];
const fridgeFood = [
  { food: '🍜', id: '1' },
  { food: '🍔', id: '2' },
  { food: '🥬', id: '3' },
  { food: '🍗', id: '4' },
  { food: '🍜', id: '5' },
];

const foodToEat = fridgeFood.find((food) => {
  // recibe el elemento y el indice.
  if (food.food === '🍜') {
    return true;
  }
});

console.log(fridgeFood);
console.log(
  `En mi frigorifico tengo ${foodToEat.food} con la id ${foodToEat.id}`
);

// Vamos a utilizar some

const people = [
  { name: 'A', age: 11 },
  { name: 'B', age: 22 },
  { name: 'C', age: 33 },
  { name: 'D', age: 44 },
];

// Quiero saber si en mi array de personas tengo una persona de mas de 30 años.

const hasPersonOver30 = people.some((person) => {
  return person.age > 30;
});

const hasPersonOver30InOneline = people.some((person) => person.age > 30); // Lo podemos poner en una sola linea xq el return está implicito
console.log(hasPersonOver30);

// Find busca el elemento, lo saca y lo asigna a una constante. Some busca el elemento y si la condicion que le hemos indicado se cumple, devuelve true, si no se cumple, devuelve false
