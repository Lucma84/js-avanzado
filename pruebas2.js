const monkeyCount = (n) => {
  const monkeys = [];
  for (let i = 1; n >= i; i++) {
    monkeys.push(i);
  }
  return monkeys;
};

const monkeys = monkeyCount(15);
console.log(monkeys);

function areYouPlayingBanjo(name) {
  // const firstLetter = name[0]
  if (name[0] === 'R' || name[0] === 'r') {
    return `${name} está tocando el Banjo`;
  } else {
    return `${name} no está tocando el Banjo`;
  }
}

const nameLetter = areYouPlayingBanjo('Jomo');
console.log(nameLetter);

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; n > i; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}

const seriesSum = SeriesSum(2);
console.log(seriesSum);

// Su tarea es escribir una función que devuelva la suma de las siguientes series hasta el término n (parámetro).
//Serie: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Normas:
// Si el valor dado es 0, entonces debería devolver 0.00

//DESCRIPCIÓN:
// Compruebe si una cadena tiene la misma cantidad de 'x' y 'o'. El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. La cadena puede contener cualquier carácter.

function XO(str) {
  let numberOfX = 0;
  let numberOfO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'X' || str[i] === 'x') {
      numberOfX += 1;
    }
    if (str[i] === 'O' || str[i] === 'o') {
      numberOfO += 1;
    }
    if (numberOfX === numberOfO) {
      return true;
    }
  }
}

const xo = XO('');
console.log(xo);
