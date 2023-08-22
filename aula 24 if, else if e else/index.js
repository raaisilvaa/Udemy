/* 
if - se
else if - se não
if pode ser usado sozinho
else if não pode ser executado sozinho, sempre que utilizo else tem que ter um if antes.
eu posso ter vários else if na checagem.
Só posso ter um else na checagem no final.
podemos usar condições sem else if, utilizando apenas if e else.
Entre 0-11 : Bom dia
Entre 12-17: Boa tarde
Entre 18-23: Boa noite
*/
const maiorIdade = 18;
const menorIdade = 17;

const pergunta = prompt('Qual sua idade?');
pergunta = Number(pergunta);

if (maiorIdade >= 18) {
    console.log('Pode entrar!');

} else if (menorIdade <= 17) {
    console.log('Entrada recusada!');
}


if (hora >= 0 && hora <=)