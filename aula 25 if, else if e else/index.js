// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// se não faça isso {o código}

const numero = 6;

if (numero >= 0 && numero <= 5) {
	console.log('O número está entre 0 e 5.');
}	else {
	console.log('O número não está entre 0 e 5.');
};

const numero1 = 10;

if (numero1 >= 0 && numero1 <= 5) {
	console.log('O número está entre 0 e 5.');
}	else if (numero1 >= 6 && numero1 <= 8) {
	console.log('O número não está entre 0 e 5.');
}	else if (numero1 >= 9 && numero1 <= 11) {
	console.log('O número está entre 9 e 11.');
} else {
	console.log('O número não está entre 0 e 11.');
}

