/*
let anoNascimento = Number(prompt('Qual sua idade?'));
alert("Você nasceu no ano de: " + calculaIdade(anoNascimento));

function calculaIdade(anoNascimento) {
	let idade = 2023 - anoNascimento;
	return idade;
}
*/
/*
let idade = Number(prompt('Qual sua idade?'));

if (idade >= 18) {
	console.log('Pode entrar!');
} else {
	console.log('Não pode entrar!');
}
*/

let idade1 = Number(prompt('Qual sua idade?'));
let estaAcompanhada = false;

if (idade1 >= 18) {
	console.log('Pode entrar!');
} else if (estaAcompanhada === true) {
	console.log("Pode entrar, pois está acompanhada!");
} else {
	console.log("Não pode entrar, pois não está acompanhado!");
}
