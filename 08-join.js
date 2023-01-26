// Dado un array, nos permite concatenar los strings del array con espacios.

const words = ['Hola', 'que', 'tal', '?'];

const sentence = words.join(' '); // \n es un salto de linea en la terminal

// let sentence = '';

// for (let i = 0; i < words.length; i++) {
//   sentence += words[i];
//   sentence += ' ';
// }

console.log(sentence);

let sentence2 = ''

for (let i = 0; i < words.length; i++) {
    sentence2 += words[i];
    sentence += ' ';
}

console.log(sentence2)
