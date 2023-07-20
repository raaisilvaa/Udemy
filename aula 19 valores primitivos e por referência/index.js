// dados primitivos - string, number, boolean, undefined, null (bigint, symbol) - são copiados ao usar =
// referência (mutável) - array, object, function - se utilizar = ele não copia mas aponta para o mesmo local.
let a = [1, 2, 3];
let b = [...a]; //forma mais fácil de se adicionar de forma independente. LET É []
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);