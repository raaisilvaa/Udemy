const form = document.querySelector('form');
const resposta = document.querySelector('h3');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const numero = Number(inNumero.value);
    let raizQuadrada = Math.sqrt(numero);

    if (Number.isInteger(raizQuadrada)) { // isInteger mostra se o número é inteiro ou não
        resposta.innerText = `Raiz: ${raizQuadrada}`; // mostra a raiz
    } else {
        resposta.innerText = `Não há raiz exata para ${numero}`; // mostra mensagem
    }

})