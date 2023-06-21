/*
Aritméticos
+ Adição / Concatenação(unir dois valores)
- / *
** potência
% resto da divisão
Primeiro de forma automática será executado o (), **, * / %, + - , 
*/

const num1 = 10;
const num2 = 4;
const num3 = 10;
console.log((num1 + num2) * num3);

let contador = 1; //contador fazer com let e não com const.
contador++;
console.log(contador); //contador de incremento

let contador1 = 10;
contador1--;
console.log(contador1); //contador de decrimento

// Operadores de atribuição.
let contador3 = 2;
contador3 += 2; // contador com mais de um.
contador3 += 2;
contador3 += 2;
console.log(contador3)

//NaN - Not a number
const num5 = 10;
const num6 = parseInt ("5"); // parseInt conversão para inteiro.
console.log(num5 + num6);

const num7 = 10;
const num8 = parseFloat ("5.3"); // parseFloat conversão para números decimais.
console.log(num7 + num8);

const num9 = 10;
const num10 = Number ("5.3"); // terceira maneira de usar a conversão de números.
console.log(num8 + num9);


