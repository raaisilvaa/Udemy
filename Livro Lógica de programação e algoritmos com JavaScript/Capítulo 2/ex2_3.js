const form = document.querySelector("#formulario");
const titulo = document.querySelector("h3");
const duracao = document.querySelector("h4");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const titulo2 = form.inTitulo.value; // obtém o conteúdo do campo título.
    const duracao2 = Number(form.inDuracao.value); // obtém o conteúdo do campo duração.
    const horas = Math.floor(duracao2 / 60); // arredonda para baixo resultado.
    const minutos = duracao2 % 60;  // obtém o resto da divisão.
    titulo.innerText = `${titulo2}`;
    duracao.innerText = `${horas}hora(s) ${minutos}minuto(s)`;
})