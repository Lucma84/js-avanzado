// que pasa aqui, que se va a lanzar el console.log, se lanzará el fetch, pero está esperando una respuesta, por lo tanto se lanzará el otro console.log y aparecerá antes.

// console.log('Pedimos un pokemon a la pokeApi')

// // fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// // .then((res) => res.json())
// // .then((response) => {
// //     console.log('Respuesta', response);
// // })
// // .catch((err) => {
// //     console.log('Error', err);
// // });

// console.log('Ya hemos pedido el pokemon a la pokeApi')

// ASYNC AWAIT. Tengo codigo que va a hablar con una Api en algun sitio? Si, quiero que sea async await? Si, pues entonces necesito que todo mi codigo este en una funcion que soporte asyn await. La llamaremos main (main se suele poner de nombre a la funcion que lanza toda nuestra aplicacion).
// Si la función que devuelve ese fetch es async, podemos cambiar ese then por un await
// Ahora estamos haciendo, haz un console.log, pide un pokemon a la api y espera a q termine de recibirse y ahora haz ese console.log
// Await me permite asignar a una constante lo que responda. (res)
// Envolvemos el codigo q puede fallar con try - catch

const main = async () => {
  console.log('Pedimos un pokemon a la pokeApi');

  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const response = await res.json();
    console.log('Respuesta:', response);
  } catch (err) {
    console.log('Error', err);
  }

  console.log('Ya hemos pedido el pokemon a la pokeApi');
};

// Yo hago main, que main haga todo lo q tenga q hacer dentro y cuando main diga, he terminado de ejecutarme, yo lanzo todo este codigo

main().then(() => {
  console.log('La funcion main ha terminado');
});

// Reto: Pillar una promesa y transformarla a async - await
