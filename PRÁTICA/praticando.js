const form = document.querySelector('#form-deposito');

function validaNome(nomeCompleto) {
    const nomeBene = nomeCompleto.split(' ')
    return nomeBene.length >= 3;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let formValido = false;

    const nomeBeneficiario = document.querySelector('#nome-beneficiario');
    const numeroConta = document.querySelector('#numero-conta');
    const valorDeposito = document.querySelector('#valor-deposito');
    const mensagemS = `Depósito efetuado com sucesso!`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        document.querySelector('.sucess-message').innerHTML = mensagemS;

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';

    } else {
        alert('Dados incompletos')
    }
})
