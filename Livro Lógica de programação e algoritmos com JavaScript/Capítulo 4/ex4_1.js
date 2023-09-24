const form = document.querySelector("#formulario");
const resp1= document.querySelector("h3");
const resp2= document.querySelector("h4");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // evita envio do form

    const nomeAluno = form.inNome.value; //obtém valores do form
    const nota1 = Number(inNota1.value);
    const nota2 = Number(inNota2.value);
    const media = (nota1 + nota2) / 2; // calcula a média das notas

    resp1.innerText = `Média das Notas ${media.toFixed(1)}`;
    if (media >= 7) {
        resp2.innerText = `Parabéns ${nomeAluno}! Você foi aprovado(a)`
        resp2.style.color = "blue";
    } else if (media >= 5) {
        resp2.innerText = `Atenção ${nomeAluno}. Você está em exame`
        resp2.style.color = "green";
    }   else {
        resp2.innerText = `Ops, ${nomeAluno}... Você foi reprovado(a)`
        resp2.style.color = "red";
    }
})