/*
&& > false && true -> false
|| >

Todos esses retornam para false: 0, '', "", ``, null / undefined, NaN
*/
//console.log('Raí Silva' && 0 && 'Maria');

function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'João';

console.log(vaiExecutar && falaOi());