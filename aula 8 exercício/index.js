/*Raí Silva tem 30, pesa 82 kg, nasceu em 1993
 e tem 1.80 de altura e seu IMC é de 25.92592592592594 */

 const nome = 'Raí';
 const sobrenome = 'Silva'
 const idade = 30;
 const peso = 82;
 const alturaM = 1.80;
 let imc;
 let anoNascimento;

 imc = peso / (alturaM * alturaM);
 anoNascimento = 2023 - idade;

 console.log(imc);
 console.log(anoNascimento);

 console.log(`${nome} ${sobrenome} tem ${idade} anos,`);
 console.log(`sua altura é de ${alturaM}, pesa ${peso}, e seu`);
 console.log(`imc é de ${imc}.`)



