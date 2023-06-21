const nome = 'Raí'; // String
const nome1 = 'Raí'; // String
const nome2 = `Raí`; // String
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined > não aponta pra local nenhum da memória.
let sobrenomeAluno = null; // Nulo > não aponta pra local nenhum da memória.
const aprovado = false; // Boolean = true, false (lógico).

//console.log(typeof nomeAluno, sobrenomeAluno, nome, nome, aprovado  );

let a = [1, 2];
const b = a;
console.log(a, b);

a = 3;

console.log(a, b);