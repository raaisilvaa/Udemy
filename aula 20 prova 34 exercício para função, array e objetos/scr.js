// selecionando o formulário.
function formulario() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.form');

    const pessoas = []; //array vazio para preenchimento do formulário.

    //selecionando as inputs dentro do formulário.
    function validaFormulario(e) {
        e.preventDefault(); // previne o comportamento padrão de um objeto.

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //criando um objeto para colocar dentro do array que será salvo ao preencher o formulário.
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(nome.value, sobrenome.value, peso.value, altura.value);

        //texto inserido no resultado final ao clicar no enviar, isso irá aparecer na tela.
        resultado.innerHTML += `<p><strong>Seu nome é ${nome.value} ${sobrenome.value}, seu peso é de ${peso.value} e sua altura é ${altura.value}!</p></strong>`;


    }
    form.addEventListener('submit', validaFormulario);
}
formulario();