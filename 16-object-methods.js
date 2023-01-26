// Transformar objeto a un array

const hero = {
  name: 'The Power hero',
  power: 40,
  defense: 10,
};

// Si yo quiero sacar todas las claves de un objeto y devolverlo en forma de array ['name', 'power', ...]

const heroKeys = Object.keys(hero);
console.log(heroKeys);

// Esto me puede servir para recorrer los valores de un objeto y hacer cosas con esos valores.

// imaginemos que nuestro super heroe puede atacar, cada vez que el super heroe ataca, suele atacar con su escudo, entonces le sumariamos la mitad de su defensa al daño de su ataque total, para calcular el daño que hace nuestro super  heroe en el juego.
// Recorremos el array heroKeys y nos devuelve sus keys. Estamos recorriendo todas las claves del objeto que hemos creado en formato array con el Object.keys y estamos operando con ellas, entrando en el objeto con esa clave de forma dinamica, estos es una clave dinamica, es una variable que adquiere un valor.

let totalPower = 0;

heroKeys.forEach((key) => {
  if (key === 'power') {
    totalPower += hero[key];
  }
  if (key === 'defense') {
    totalPower += hero[key] / 2;
  }
});

console.log(totalPower);

// Object.values() -> Saca un array de los valores del objeto

console.log(Object.values(hero));

// Object.entries() -> No crea un array de claves ni de values, crea un array de tuplas, una tupla es un paquete, un pequeño array de dos elementos relacionados entre si. [['name, 'The Power Hero'], ['power', 40], ['defense', 10]]

const heroEntries = Object.entries(hero);

heroEntries.forEach((tuple) => {
  const key = tuple[0];
  const value = tuple[1];
});

console.log(Object.entries(hero));
