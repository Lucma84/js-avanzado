// La función principal de Array.reduce() es que dado un array, convertimos ese array en otra cosa cualquiera.
// De un array podemos sacar un string, un número, otro array, un objeto
// En el caso en el que más se usa, es cuando queremos crear un objeto a raíz de un array

const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// numbers.forEach((number) => {
//   sum += number;
// });

// Vamos a hacerlo con reduce. El primer parametro q recibe reduce es un acumulador (acc, acumuletor, etc) y después recoge el siguiente elemento que vamos a recorrer en el array. El acumulador es el primer elemento del array. Al acumulador si no le devolvemos nada, se convierte en undefined. Si yo devuelvo el acumulador, siempre será 1, que es el primer elemento del array. Lo que yo devuelva ser convertirá como acumulador, en nuestro ejemplo devolvemos la suma entre acumulador y el siguiente numero: 3, el acumulador se queda con lo que hemos devuelto que es el 3 y le suma el siguiente número... etc.
// Si pongo un 0 detrás del curly, el acumulador será 0 en la primera vuelta

const sum = numbers.reduce((acc, next) => {
  console.log(acc, next);
  return acc + next;
}, 0);

console.log(sum);

const words = ['Hola', 'que', 'tal', '?'];

const sentence = words.reduce((acc, next) => {
  console.log(acc, next);
  return `${acc} ${next}`;
});

console.log(sentence);

// const sentence = words.join(' ')
// console.log(sentence)

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

const herbAnimals = animals.reduce((acc, next) => {
  if (next.herb) {
    acc.push(next);
  }
  return acc;
}, []);

console.log(herbAnimals);
