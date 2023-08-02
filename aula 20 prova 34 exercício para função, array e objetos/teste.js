function meuFormulario () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    function dentroFormulario (evento) {
        evento.preventDefault();

        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(nome.value, sobrenome.value, peso.value, altura.value);
        resultado.innerHTML += `<p><strong>Seu nome é ${nome.value} ${sobrenome.value}, seu peso é de ${peso.value} e sua altura é ${altura.value}!</p></strong>`;
    }
    form.addEventListener('submit', dentroFormulario);
}
meuFormulario();

























/*
const form = document.querySelector('.form');

    form.onsubmit = function(evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado');
    };
    */