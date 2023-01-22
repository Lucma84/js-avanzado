//  Dado un array de animales yo quiero saber el indice del toro, por ejemplo. Lo sacamos usando indexOf.
// Solo puedo utilizarlo con strings y con números (por que los pasa a strings, no muy recomendable hacerlo con numeros )
// Se quedan la primera vez que devuelvo true, por lo tanto solo nos devolverán la posicion del primer elemento que cumpla la condicion marcada por nosotros. Para saber el índice del último elemento utilizaremos lastIndexOf

const animals = ['🐶', '🐱', '🐂', '🐦', '🐂'];

const indexOfBull = animals.indexOf('🐂');
console.log(`El primer toro está en el indice ${indexOfBull}`);
const lastIndexOfBull = animals.lastIndexOf('🐂');
console.log(`El último toro está en el indice ${lastIndexOfBull}`);

// Nos dicen que busquemos una persona en un objeto infinito que se llame C y tenga entre 45 y 50 años.
// Para ello utilizaremos findIndex, al invocarlos, tb tenemos q mandar un callback, y lo que hace es que para el elemento que me devuelva true, asigno el índice de ese elemento dentro del array.
// Se quedan la primera vez que devuelvo true, por lo tanto solo nos devolverán la posicion del primer elemento que cumpla la condicion marcada por nosotros.

const people = [
  { name: 'A', age: 20 },
  { name: 'C', age: 40 },
  { name: 'C', age: 40 },
  { name: 'B', age: 30 },
  { name: 'C', age: 42 },
  { name: 'C', age: 45 },
  { name: 'D', age: 50 },
  { name: 'C', age: 50 },
];

const index = people.findIndex((person) => {
  if (person.name === 'C' && person.age >= 45 && person.age <= 50) {
    return true;
  }
});

// Si findIndex, lasIndexOf o findIndex no encuentran ese elemento que cumpla la condición, devuelven -1. Xq? Porque yo a un array con -1 no puedo entrar, para ello hacemos lo siguiente y que no se nos quede con -1 o undefined.

if (index === -1) {
  console.log('No hemos encontrado a la persona!');
} else {
  console.log('La persona está en la posición', index);
  console.log('La persona es:', people[index]);
}
