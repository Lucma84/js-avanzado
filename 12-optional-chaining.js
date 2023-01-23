// Forma de acceder a propiedades nexteadas (en varios niveles hacia abajo de un objeto).

const power = {
  name: 'power-hammer',
  value: 20,
};

const hero = {
  name: 'The Power',
  powers: [],
};

// Quiero acceder al primer de todos los powers q tiene el super heroe y ver cuanto vale su value.
// Y que sucede cuando lo hago, que me lo marca como undefined, xq powers ahora mismo no tiene valor, por lo tanto es undefined.
// Solución para que no me marque undefined y se rompa todo el código...

// console.log(hero.powers[0].value); // Pero claro, 0 puede ser undefined, como ahora mismo q el array está vacio.

// Para que no se rompa, tengo que entrar en hero.powers[0], ver que existe, sacar el value y añadirlo a algo de fuera.

// const powerOne = hero.powers[0];
// let powerOneValue = 0;

// if (powerOne) {
//     powerOneValue = powerOne.value
// }

// Vamos autilizar optional chainging

const powerOneValue = hero.powers[0]?.value || 0; // Esto está diciendo, si lo q hay detras de la interrogacion es undefined, no entro aqui y convierto todo en undefined y si pongo el or, le doy valor 0. Esto da consistencia al codigo.
console.log(powerOneValue); // 0

// Ahora añadimos el poder y metemos una función use, pero primero probamos con ella comentada para ver que sucede si no esta la función.

const power2 = {
  name: 'power-hammer',
  value: 20,
  use: () => {
    console.log('Uso el poder power-hammer');
  },
};

const hero2 = {
  name: 'The Power',
  powers: [power2],
};

const powerOneValue2 = hero2.powers[0]?.value || 0;
console.log(powerOneValue2); // 20

hero2.powers[0]?.use?.(); // Esto explotaría porque .use está comentado, no está por lo que sea, y que pasa si yo lo dejo así? que rompo mi código.
// Para que eso no pase, usamos optional chaining y de estar asi: hero2.powers[0].use(); pasamos a como esta el ejemplo, le ponemos la interrogacio xq el poder puede no estar.
// Ya tengo acceso a use si existe, ahora tengo que invocarla si existe tb.
// Ahora digo que la propiedad existe, seguimos, que no undefined y si el use existe, seguimos y damos el resultado, que no, undefined.

// if (hero2.powers[0]?.use()) {
//     hero2.powers[0].use()
// }

const hero3 = {
  name: 'The Power',
  powers: [power2],
  cities: [
    {
      name: 'Madrid',
    },
  ],
};

console.log(hero3.cities?.[0].name) // Estamos intentando leer la posicion 0 de cities, pero como no existe, codigo roto.
