// Destructuring, spread y rest de Arrays

const students = ['pepe', 'maria', 'juan', 'jose', 'paula'];

// De esta forma sacamos los 3 primeros estudiantes.
// const firstStudent = students[0]
// const secondStudent = students[1]
// const thirdStudent = students[2]

//Destructurando
const [firstStudent, secondStudent, thirdStudent] = students;

console.log('Los primeros 3 estudiantes son:', {
  firstStudent,
  secondStudent,
  thirdStudent,
});

// Que solo quiero sacar el 4o elemento...

const [, , , fourthStudent] = students;
console.log('El cuarto estudiante es:', fourthStudent);

// REST OPERATOR -> De un array del q destructuro cosas, quedarme lo que no he destructurado en una nueva const que se un nuevo array

const [, , , ...restStudents] = students; // es muy tipico poner la palabra rest.
console.log('Los estudiantes a partir del cuarto puesto son:', restStudents);

const [...copyArr] = students; // Saco una copia del Array
const copyArr2 = students.slice(); // Recomendado
console.log('Copia:', copyArr);
console.log('Copia:', copyArr2);

// SPREAD OPERATOR

const newStudents = ['Bosco', 'Ignacio'];

const totalStudents = [...students, ...newStudents];
console.log('Los estudiantes finales son:', totalStudents);

const numbers = [1, 2, 3, 4, 5];
const max = Math.max(...numbers); // Math.max() No acepta arrays, le paso el Spread Operator para quitar esos corchetes y poder sacar el número máximo y el mínimo.
const min = Math.min(...numbers);

console.log('Max:', max);
console.log('Min:', min);
