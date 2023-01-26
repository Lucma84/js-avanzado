//Se escribe como ( ?? ), y es una alternativa a OR OPERATOR ( || )
// Lo que hace es que si un valor es null o undefined, se queda el fallback, es decir, el valor por defecto
// Si el valor no es null o undefined, se queda ese valor

// En el ejemplo, si response.age es 0 o falsy, siempre me va a poner el 100.
// que ocurre si la respuesta es 0, no es años pero es dinero... yo no puedo considerarlo falsy y devolver 100
// La forma de quedarmelo es utilizando el null coalescing
// ?? dice, es este valor null o undefinded? En caso de que sea null or undefined, me quedo el fallback. En este caso 100.
// Como 0 no es null ni undefined, se queda el 0. Si no nos pasaran ese parametro, sería undefined y nos devolvería 100.

// Por defecto usar el or operator para todo lo que podamos. Null coalescing se usa en caso muy específicos.

const response = {
  age: 0,
};

// const age = response.age || 100;
const age = response.age ?? 100;

console.log(age);
