/*
&& > false && true -> false, a partir que eu achei o false o JavaScript para por aí.
|| > true && false: OR necessita de qualquer um para ser true.

Todos esses retornam para false: 0, '', "", ``, null / undefined, NaN
*/
console.log('Raí Silva' && 0 && 'Maria' && true);

//encontrando false o próprio JavaScript para de analisar, exemplo:
console.log('Raí Silva' && true && NaN);

// fazendo uma função para retornar o Olá
function falaOi () {
    return 'Olá';
}
const vaiExecutar = 'Raizinho';
console.log(vaiExecutar && falaOi());

// Or necessita de qualquer true para retornar verdadeiro.
console.log(0 || false || null || 'Raí Silva' || true);

// outro exemplo
const corUsuario = null; // 'vermelho' caso o usuário definir a cor primária.
const corPadrao = corUsuario || 'azul';
console.log(corPadrao);

// outro exemplo:
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);