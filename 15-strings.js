// Dado un string lo podemos partir en trocitos dado un operador que hay en medio

const sentence = 'A santa, at NASA';

// Queremos quitarle la coma y queremos unir los elementos (usaremos join)

const splitSentence = sentence.split(',');
const joinSentence = splitSentence.join('');
console.log({ splitSentence, joinSentence });

// Ahora voy a separar los elementos con un espacio y los voy a unir con guiones bajos.

console.log(joinSentence.split(' ').join('_'));

// .replace() -> Dado un string me genera un nuevo string que lo asigno a una constante y le tengo que decir que quiero cambiar y xq lo quiero cambiar.

const sentenceWithoutComma = sentence.replace(',', '');
console.log(sentenceWithoutComma);

// Vamos a sustituir las A por O

console.log(sentence.replace('a', 'o')); // Solo nos cambia la primera letra que encuentra
console.log(sentence.replaceAll('a', 'o').replaceAll('A', 'O')); // Nos cambia todas las a minusculas por o minusculas

const commaSentence = 'Hola, que, pasa??????? y que_ tal_ estas';
console.log(
  commaSentence.replaceAll(',', '').replaceAll('?', '').replaceAll('_', '')
);
