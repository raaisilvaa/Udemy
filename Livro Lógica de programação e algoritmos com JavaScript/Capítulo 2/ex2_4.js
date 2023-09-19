const form = document.querySelector("#formulario");
const resposta = document.querySelector("#resultado");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const precoQuilo = Number(form.inQuilo.value); // valor do campo Quilo digitado pelo usuário.
    const consumoCliente = Number(form.inConsumo.value);

    const resultado = (precoQuilo / 1000) * consumoCliente; // convertendo quilo em gramas ()

    resposta.innerText = `Valor a pagar R$: ${resultado.toFixed(2)}`;
})
