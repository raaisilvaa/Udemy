// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
 	console.log('Evento prevenido');
  setResultado('Olá mundo!');
});

function setResultado (msg) {
  const resultado = document.querySelector('#resultado');
 	resultado.innerHTML = ''; // `<p>${msg}</p>`
  const p = document.createElement('p');
  p.classList.add('paragrafo-resultado');
  p.innerHTML = 'Qualquer coisa';
  resultado.appendChild(p);
}

