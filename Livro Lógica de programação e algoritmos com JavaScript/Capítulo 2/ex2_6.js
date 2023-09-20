const form = document.querySelector("#formulario");
const resposta = document.querySelector("h3");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const precoPorMinuto = Number(inValorMinuto.value);
    const tempoDeUso = Number(inTempoUso.value);
    const tempoTotalDeUso = Math.ceil(tempoDeUso / 15);

    const precoTotal = (precoPorMinuto * tempoTotalDeUso);

    resposta.innerText = `Valor a pagar R$: ${precoTotal.toFixed(2)}`;

})