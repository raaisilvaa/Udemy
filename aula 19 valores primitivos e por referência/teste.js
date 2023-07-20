const a = {
    nome: 'Raí',
    sobrenome: 'Silva',
};

const b = {...a}; // em const se usa {} e ele fica um valor independente.

a.nome = 'Rafael';
console.log(b);
console.log(a);