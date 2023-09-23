const form = document.querySelector('#formulario');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const produto = form.produto.value;
    const preco = Number(form.preco.value);

    const precoMultiplicado = preco * 3; // preço do produto dividido por 3.
    const precoUnitario = preco / 2; // calcula o preço unitário e divide por 2.
    const promocao = precoMultiplicado - precoUnitario;
    
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`;
    resp2.innerHTML = `O 3 produto custa apenas R$: ${precoUnitario.toFixed(2)}`;
})