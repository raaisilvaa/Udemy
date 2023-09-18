const form = document.querySelector("#formulario");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const veiculo = form.inVeiculo.value;
    const preco = Number(form.inPreco.value);

    const promocao = preco * 0.5;
    const parcela12x = promocao / 12;

    resp1.innerText = `Promoção: ${veiculo}`;
    resp2.innerText = `Entrada de: R$${promocao.toFixed(2)}`;
    resp3.innerText = `+12x de ${parcela12x.toFixed(2)}`;
})