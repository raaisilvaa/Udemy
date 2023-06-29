// IEEE 754-2008 - PRECISÃO DE CASAS DECIMAIS, SEQUÊNCIA.
let num1 = 0.7; // number
let num2 = 0.1; // number

//num1 = ((num1 * 100) + (num2 * 100)) /100; // 0.8 - segunda maneira de fazer de maneira mais complexa.
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 = Number(num1.toFixed(2)); // melhor forma de fazer quando ocorrer a imprecisão.

console.log(num1.toFixed(1)); // quando quiser colocar os zeros na frente ao invés do número inteiro.
console.log(Number.isInteger(1.00));



//console.log(num1.toString() + num2); // alterando para concatenar meu number junto com outro number.
//num1 = num1.toString(); // alterando number pra string.
//console.log(num1.toString(2)); // forma binária.
//console.log(num1.toFixed(3)); // casas decimais.
//console.log(Number.isInteger(num1)); // retorna se o número é inteiro ou não, true ou false.
//console.log(Number.isNaN(temp)); // essa conta aqui é um NaN?
//let temp = num1 * '5'; //
