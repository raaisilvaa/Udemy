const form = document.querySelector("#formulario");
const resposta1 = document.querySelector("#resp1");
const resposta2 = document.querySelector("#resp2");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const medicamento = form.inMedicamento.value;
    const preco = Number(form.inPreco.value);

    const promocao = Math.floor(preco * 2);

    resposta1.innerText = `Promoção de ${medicamento}`;
    resposta2.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`;
})