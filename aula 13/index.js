// Strings são indexiváveis, 01234567
let umaStringg = "Um \"texto\""; // caso precisar colocar aspas no texto dentro de uma string.

let umaString = "Um texto";

console.log(umaString[5]); //selecionar qual posição está meu elemento.

console.log(umaString.charAt(0)); //outra maneira de fazer a mesma coisa acima.

console.log(umaString.indexOf('texto')); // serve par identificar aonde começa a palavra que deseja.

console.log(umaString.indexOf('x', 5));

console.log(umaString.lastIndexOf('m', 3)); // encontrar a palavra de trás pra frente.

console.log(umaString.match(/[a-z]/g)) // expressões regulares.

console.log(umaString.match(/[a-z]/)) // expressões regulares.

console.log(umaString.search(/x/)) // ele retorna aonde o índice foi encontrado.

console.log(umaString.replace('Um', 'Outro')) // substituição de caracteres.

console.log(umaString.replace('Um', 'Outro')) // substituição de caracteres.






