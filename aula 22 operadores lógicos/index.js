/*
Operadores lógicos
&& > AND > E > Todas as expressões precisam ser verdadeiras para retornar true
|| > OR > OU
! > NOT > NÃO
*/

const expressaoAND = true && true && true && true; // eu preciso, necessito, eu quero.
const expressaoOR = false || true; // Mesmo tendo dinheiro no bolso ou se estiver sol lá fora irei sair.
const expressaoOOR = false || false || false;
//console.log(expressaoAND);
//console.log(expressaoOR);
console.log(expressaoOOR);
/* const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar); */

console.log(!true); //transformando o true em false e vice e versa. !!true inverte de novo

const email = 'raaisilvaa@hotmail.com';
const senha = 'Camaleao01@';
const autenticacao = email === 'raaisilvaa@hotmail.com' && senha === 'Camaleao01@';
console.log(autenticacao);