/*
function humano1 (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
};

const pesso1 = humano1('Carlos', 'Kasuki', 32);
const pesso2 = humano1('Nubia', 'Sarna', 20);
const pesso3 = humano1('Sol', 'Evo', 15);
const pesso4 = humano1('Ivo', 'Oliveira', 10);
console.log(pesso1.nome, pesso2.nome);
*/

const familia = {
    nome: 'Raí',
    Sobrenome: 'Silva',
    idade: 31,

    diga() {
        console.log(`oi ${this.idade}`);
    },

    idadeMaior() {
        ++this.idade;
    }
};

familia.diga();
familia.idadeMaior();
familia.diga();
familia.idadeMaior();
familia.diga();


