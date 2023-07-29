const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function validaNome(e) {
    e.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
    })

    form.addEventListener('submit', validaNome);

    console.log(nome.value, sobrenome.value, peso.value, altura.value);
};




























/*
const form = document.querySelector('.form');

    form.onsubmit = function(evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado');
    };
    */