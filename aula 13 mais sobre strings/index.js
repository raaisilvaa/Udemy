// Strings são indexiváveis, 01234567
let umaStringg = "Um \"texto\""; // caso precisar colocar aspas no texto dentro de uma string.

let umaString = "Um rato roeu.";

console.log(umaString[5]); //selecionar qual posição está meu elemento.

console.log(umaString.charAt(0)); //outra maneira de fazer a mesma coisa acima.

console.log(umaString.indexOf('rato')); // serve par identificar aonde começa a palavra que deseja.

console.log(umaString.indexOf('x', 5));

console.log(umaString.lastIndexOf('m', 3)); // encontrar a palavra de trás pra frente.

console.log(umaString.match(/[a-z]/g)) // expressões regulares.

console.log(umaString.match(/[a-z]/)) // expressões regulares.

console.log(umaString.search(/x/)) // ele retorna aonde o índice foi encontrado.


console.log(umaString.replace('Um', 'Outro')) // substituição de caracteres.

console.log(umaString.replace(/r/g, '#')) // substituição de caracteres, se eu coloco G ele seleciona para todos com #.

console.log(umaString.length); // mostra quantos caracteres tem minha string.

console.log(umaString.slice(1, 6)); // selecionando de qual número quero começar e terminar minha string.

console.log(umaString.slice(-3)); // começando do final, subtraindo a string.

console.log(umaString.slice(-5, -1)); // começando do final, menos - o que quero.

console.log(umaString.slice(1, 6));

console.log(umaString.split(' '));

console.log(umaString.split(' r '));

console.log(umaString.toLocaleUpperCase()); // deixar tudo maiúsculo.

console.log(umaString.toLocaleLowerCase()); // deixar tudo minúsculo.


