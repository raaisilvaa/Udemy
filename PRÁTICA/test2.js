/* PASSO A PASSO:
1- Selecionar os elementos que irei precisar.
2- Parar com evento de atualizar a página.
3- 
*/

const form = document.querySelector('#form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeBeneficiario = document.querySelector('#nome-beneficiario');
    const numeroBeneficiario = document.querySelector('#numero-conta');
    const valorDeposito = document.querySelector('#valor-deposito');
    const mensagemSucesso = `Montande de ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroBeneficiario.value}`;

    formEvalido = validaNome(nomeBeneficiario.value)
    if (formEvalido) {
        alert(mensagemSucesso)
    } else {
        alert('O nome está incompleto');
    }
})