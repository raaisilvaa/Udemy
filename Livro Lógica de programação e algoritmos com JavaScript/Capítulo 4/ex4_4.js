const form = document.querySelector('form');
const resposta = document.querySelector('h3');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const horaBrasil = Number(inHoraBrasil.value);
    let horaFranca = Number(horaBrasil + 5);

    if (horaFranca >= 24) {
        horaFranca = horaFranca - 24; // se passar das 24 horas na França.
    }
    resposta.innerText = `Hora na França: ${horaFranca.toFixed(2, 2)}`;
})
