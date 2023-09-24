const form = document.querySelector("#formulario");
const resp = document.querySelector("h3");

form.addEventListener("submit", function(e) {
    e.preventDefault();

form.addEventListener("reset", function() {
    resp.innerText = ""; // limpa o conteúdo do elemento h3 que exibe a resposta
})

    const nome = form.inNome.value;
    const masculino = form.inMasculino.checked; // verifica se o campo está ou não selecionado.
    const altura = Number(form.inAltura.value);

     // declara a variável peso
    /* 
    let peso = "";
     if (masculino) { // se masculino(ou, if masculino === true)
        peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(0)} kg`;
    } else {
        peso = 21 * Math.pow(altura, 2)
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(0)} kg`;
    }
    */
   //Operador ternário, uma forma abreviada de fazer o código acima.
   // Caso a condição seja verdadeira se usa ? ou caso seja falsa se usa :
   const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);
   resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(0)} kg`;
})
