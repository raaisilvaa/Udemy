function meuEscopo () {
    const form = document.querySelector('.form');


    function recebeEventoForm () {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();









/*
const form = document.querySelector('.form');

    form.onsubmit = function(evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado');
    };
    */