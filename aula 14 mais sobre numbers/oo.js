let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //
num1 += num2;
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(1));

console.log(num1);


console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
