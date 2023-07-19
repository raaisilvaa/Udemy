// objeto se cria com {} e array se cria com [].
const ar1 = {
    nome: 'Raí',
    sobrenome: 'Miranda',
    idade: 30,

    fala() {
        console.log(`${this.idade} está falando oi`);
    },

    incrementaIdade() {
        ++this.idade;
    }
}

ar1.fala();
ar1.incrementaIdade();
ar1.fala();
ar1.incrementaIdade();









/*
function criaPessoa(nome, sobrenome, idade) { //parâmetro
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Basso', 25); // argumento(valor passado para o parâmetro)
const pessoa2 = criaPessoa('Carlos', 'Silva', 30);
const pessoa3 = criaPessoa('Ana', 'Carvalho', 18);
const pessoa4 = criaPessoa('Sabrina', 'Oliveira', 55);

console.log(pessoa1.nome,)
*/

/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
*/