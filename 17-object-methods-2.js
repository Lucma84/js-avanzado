// Delete -> Sirve para cargarme una clave del objeto

const student = {
  name: 'Alberto',
  master: 'Full Stack',
  job: 'Software Engineer',
};

// 2 opciones de borrar la clave job

student.job = null; // reescribo la prop job para que sea null y así no valga nada, es mucho mas eficiente que borrar una clave.
console.log({
  keys: Object.keys(student),
  values: Object.values(student),
});

// Yo no quiero que valga null, es que no quiero que esté esa clave en el objeto

delete student.job;
console.log({
  keys: Object.keys(student),
  values: Object.values(student),
});

// Object.freeze -> congela un objeto, bloquea los atributos, previene la modificacion de propiedades y valores que existen y previene la adiccion de nuevas propiedad.

Object.freeze(student); // No hace falta asignarlo a una variable, xq no nos devuelve otro objeto, simplemente congela el que le indiquiemos.
console.log(student);

// Voy a intentar modificar el original, student. No podemos modificarlo.
student.name = 'Cristian';
console.log(student);
