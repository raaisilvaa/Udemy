// Exercício colocar A no B, B no C e C no A.
let kA = 'A';
let kB = 'B';
let kC = 'C';

[kA, kB, kC] = [kB, kC, kA];

console.log(kA, kB, kC);