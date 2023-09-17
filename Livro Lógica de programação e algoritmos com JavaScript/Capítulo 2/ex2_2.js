// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const form = document.querySelector("#form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener("submit", function (e) {
    e.preventDefault() // evita envio do form
    const nome = form.inNome.value; // obtém o nome digitado no form utilizado o ID INPUT no HTML
    resp.innerText = `Olá ${nome}`; // exibe a resposta do programa ao clicar em submit.
})
//outerText: ao clicar em submit o texto aparece do lado da caixinha.