/* Faca um programa para calcular o valor gasto de uma viagem.

Voce tera 3 variaveis. Sendo elas: 
1 - Preco do combustivel;
2 - Gasto medio de combustivel do carro por KM;
3 - Distancia em KM da viagem.

Imprima no console o valor que sera gasto para realizar esta viagem */

const precoCombustivel = 5.79;
const kmPorLitros = 12;
let distanciaTotal = 1580;

const litrosConsumidos = distanciaTotal / kmPorLitros;
var gastoTotal = litrosConsumidos * precoCombustivel;

console.log('O valor total gasto para a viagem foi de R$' + gastoTotal.toFixed(2))