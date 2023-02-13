let xmen = ['ciclops', 'beast', 'angel', 'marvel-girl'];

const xmenWithUppercas = xmen.map((hero) => {
  let newHero = initialWithUppercase(hero);
  return newHero;
});

console.log(xmenWithUppercas);

function initialWithUppercase(name) {
  return name[0].toUpperCase() + name.slice(1);
}

let newXmen = ['wolverine', 'nigthcrawler', 'storm'];

const newXmenWithUppercas = newXmen.map((hero) => {
  let newHero = initialWithUppercase(hero);
  return newHero;
});

console.log(newXmenWithUppercas);

// Concatenar

const myMutants = [...xmenWithUppercas, ...newXmenWithUppercas];
console.log(myMutants);

// Spread para copiar array

const copyXmen = [...xmen];
console.log(copyXmen);

// Combinar spread + methods
let [lastMutant] = [...xmen].reverse();
console.log(lastMutant);

// Spread operators en params de una funcion

const sumOperator = (a, b, c) => {
  return a + b + c;
};

const numberToOperate = [5, 6, 7];
console.log(sumOperator(...numberToOperate));

// Spread operator in Strings - IMPORTANTE PARA POSIBLES ENTREVISTAS
const myTeam = 'RAYO';
const charactersTeamDash = [...myTeam].join('-');
console.log(charactersTeamDash);

// Spread operator in Object
const obj1 = { firstName: 'Alberto', age: 34 };
const obj2 = { lastName: 'Rivera', gender: 'M' };

const newObj = { ...obj1, ...obj2 };
const newObj2 = { ...obj1, ...obj2, planet: 'Earth' };

console.log(newObj2);

// Destructuring with Spread Operators
const school = {
  firstName: 'Code',
  lastName: 'Rock',
  age: 1,
};
// Sacar el valor de la edad y dejar el resto de atributos

const { age, ...restOfSchool } = school;
console.log(age);
console.log(restOfSchool);

// map -> mapea elementos iterables para modificarlos y retornar el elemento de la lista modificado
let officers = [
  { id: 20, name: 'Captain A' },
  { id: 24, name: 'Captain B' },
  { id: 50, name: 'Captain C' },
  { id: 75, name: 'Captain D' },
];

// Forma tradicional de sacar los id
const officersList = [];
officers.forEach((officer) => {
  officersList.push(officer.id);
});
// Con map y podemos operar con el
const officerIdMap = officers.map((officer) => {
  return officer.id * 2;
});

const officersNameA = officers.map((officer, index) => {
  if (officer.name === 'Captain D') {
    return officer;
  }
  return {
    id: officer.id,
    name: `${index + 1} ${officer.name}`,
  };
});

console.log(officersNameA);

// filter -> filtrar elementos y retorna los elementos filtrados en base a una condicion.

let pilots = [
  { id: 20, name: 'Captain A', faction: 'Rebels' },
  { id: 24, name: 'Captain B', faction: 'Empires' },
  { id: 50, name: 'Captain C', faction: 'Empires' },
  { id: 75, name: 'Captain D', faction: 'Rebels' },
];

const rebels = pilots.filter((pilot) => pilot.faction === 'Rebels');

const empires = pilots.filter((pilot) => pilot.faction === 'Empires');

console.log(rebels);
console.log(empires);

// find -> busca el elemento que quieres y lo retorna (solo devuelve el primer elemento que se encuentra)

const arrayFind = [12, 8, 130, 44];
const findArrayElements = arrayFind.find((element) => element > 10);
console.log(findArrayElements);

// Reduce
let pilotsReduce = [
  { id: 20, name: 'Captain A', faction: 'Rebels', years: 5 },
  { id: 24, name: 'Captain B', faction: 'Empires', years: 8 },
  { id: 50, name: 'Captain C', faction: 'Empires', years: 10 },
  { id: 75, name: 'Captain D', faction: 'Rebels', years: 3 },
];

let totalYearsPilots = pilotsReduce.reduce((acc, pilot) => {
  return acc + pilot.years;
}, 0);
console.log(totalYearsPilots);

let mostExpPilot = pilotsReduce.reduce((oldest, pilot) => {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

console.log(mostExpPilot);

// Ejemplo final

let personnel = [
  {
    id: 1,
    name: 'Captain A',
    pilotingScore: 50,
    shootingScore: 86,
    isForcerUser: true,
  },
  {
    id: 2,
    name: 'Captain B',
    pilotingScore: 50,
    shootingScore: 56,
    isForcerUser: false,
  },
  {
    id: 3,
    name: 'Captain C',
    pilotingScore: 50,
    shootingScore: 56,
    isForcerUser: false,
  },
  {
    id: 4,
    name: 'Captain D',
    pilotingScore: 50,
    shootingScore: 56,
    isForcerUser: true,
  },
  {
    id: 5,
    name: 'Captain E',
    pilotingScore: 50,
    shootingScore: 56,
    isForcerUser: false,
  },
  {
    id: 6,
    name: 'Captain F',
    pilotingScore: 20,
    shootingScore: 56,
    isForcerUser: true,
  },
];

let jediPersonnel = personnel.filter((person) => {
  return person.isForcerUser;
});

let jediScores = jediPersonnel.map(
  (jedi) => jedi.pilotingScore + jedi.shootingScore
);

let totalJediScore = jediScores.reduce((acc, score) => acc + score, 0);

console.log(jediPersonnel);
console.log(jediScores);
console.log(totalJediScore);

const totalComplicatedScore = personnel
  .filter((person) => person.isForcerUser)
  .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(totalComplicatedScore);

// Contar el numero de estudiantes cuyo nombre empieza por la letra J (mayuscula o minuscula)
const countStudentWithJ = (students) => {
  const toReturn = students.reduce((acc, student) => {
    if (student[0].toLowerCase() === 'j') {
      acc += 1;
    }
    return acc;
  }, 0);

  // Recorrer un array al contrario
  // for (let i = students.length -1; i >= 0; i--)

  // Recorrer un array de 2 en 2
  // for (let 0; i < array.length; i = i + 2)

  //     let count = 0;
  //   students.forEach((student) => {
  //     if (student[0].toLowerCase() === 'j') {
  //       count += 1;
  //     }
  //   });
  //   return count;
  return toReturn;
};

// Ejemplo
const students = [
  'Alejandro90',
  'Bea',
  'JDebug-Manu',
  'jose angel',
  'Juan Ocaña',
];

console.log(countStudentWithJ(students));

// Palindromo

const palindrom = (word) => {
  const cleanWord = word.split('');
  const joinWord = cleanWord.join('');
  const uppercaseWord = joinWord.toUpperCase();
  console.log(uppercaseWord);

  const splitWord = uppercaseWord.split('');
  const reverseWord = splitWord.reverse();
  const finalWord = reverseWord.join('');
  console.log(finalWord);

  const toReturn = uppercaseWord === finalWord;

  return toReturn;
};

const isAPalindrom = palindrom('kayak');
console.log(isAPalindrom);

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(evenOrOdd(2));

function betterThanAverage(classPoints, yourPoints) {
  let classCount = 0;
  let classAverageScore = classPoints.forEach((point) => {
    classCount += point;
    totalCount = classCount + yourPoints;
  });
  classAverageScore = totalCount / classPoints.length;
  if (classAverageScore > yourPoints) {
    return false;
  } else {
    return true;
  }
}

const scores = betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 90);
console.log(scores);

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution('Amigo'));

function grow(x) {
  const toReturn = x.reduce((acc, next) => {
    return acc * next;
  });

  return toReturn;
}

console.log(grow([4, 1, 1, 1, 4]));

function maps(x) {
  return x.map((number) => {
    return number * 2;
  });
}

console.log(maps([1, 2, 3, 4]));

for (let i = 1; i < 99; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

function getOddNumbers() {
  let count = [];
  for (let i = 1; i < 99; i++) {
    if (i % 2 !== 0) {
      count.push(i);
    }
  }
  return count;
}

console.log(getOddNumbers());

const result = ['3:1', '2:2', '0:1'];

function getTotalPoints(games) {
  let points = 0;
  games.map((game) => {
    if (game[0] > game[2]) {
      points += 3;
    } else if (game[0] === game[2]) {
      points += 1;
    }
  });

  return points;
}

console.log(getTotalPoints(['3:1', '2:2', '0:1']));

// Los puntos se otorgan por cada partido de la siguiente manera:

// si x > y: 3 puntos (ganar)
// si x < y: 0 puntos (pérdida)
// si x = y: 1 punto (empate)
// Necesitamos escribir una función que tome esta colección y devuelva la cantidad de puntos que nuestro equipo (x) obtuvo en el campeonato según las reglas dadas anteriormente.

// 0 <= y <= 4

const dogsArray = [
  {
    name: 'Antonia',
    mood: 'serious',
  },
  {
    name: 'Juan',
    mood: 'guapo',
  },
  {
    name: 'Pedro',
    mood: 'muy perro',
  },
];

const copyDogsArray2 = [...dogsArray];
dogsArray[0].mood = 'Guarro';
console.log(dogsArray);
console.log(dogsArray);

// const copyDogsArray = structuredClone(dogsArray); // Con structuredClone te copia el array y no pasa nada porq lo modifiques.

function mystery() {
  var results = { sanity: 'Hello' };
  return results;
}

// Devuelve el número (recuento) de vocales en la cadena dada.

// Consideraremos a, e, i, o, u como vocales para este Kata (pero no y).

// La cadena de entrada solo constará de letras minúsculas y/o espacios.

function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      count += 1;
    }
  }
  return count;
}

const vocalsInString = getCount('abracadabra');
console.log(vocalsInString);

function hamming(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count += 1;
    }
  }

  return count;
}

const totalHamming = hamming('I like turtles', 'I like turkeys');
console.log(totalHamming);

function opposite(number) {
  return -number;
}

const oppositeNumber = opposite(4.25);
console.log(oppositeNumber);

function addLength(str) {
  const strSplitted = str
    .split(' ')
    .map((string) => `${string} ${string.length}`);
  // stringsWithNumber = []
  // for (let i = 0; i < strSplitted.length; i++) {
  //     let string = strSplitted[i];
  //     stringsWithNumber.push(`${string} ${string.length}`)
  // }
  // return stringsWithNumber
  return strSplitted;
}

const string = addLength('apple ban banana');
console.log(string);

// Tenemos que devolver un array que ponga la palabra y la longitud de la misma

function correct(string) {
  return string.replaceAll(0, 'O').replaceAll(5, 'S').replaceAll(1, 'I');
}

const correctString = correct('L0ND0N');
console.log(correctString);

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

console.log(quarterOf());

const getDocumentationTemplate = (url, title) => {
  return `
  <div class="favorite-element">
    <a href="${url}" target="__blank">${title}</a>
  </div>
  `;
};

// Tienes que crear un método que corrija una cadena de tiempo dada.
// Además, había un problema, por lo que muchas de las cadenas de tiempo están rotas.
// La hora se formatea usando el reloj de 24 horas, de 00:00:00 a 23:59:59.
// Ejemplos
// "09:10:01" -> "09:10:01"
// "11:70:10" -> "12:10:10"
// "19:99:99" -> "20:40:39"
// "24:01:01" -> "00:01:01"


