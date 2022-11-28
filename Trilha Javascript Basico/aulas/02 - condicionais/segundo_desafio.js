/* Faca um programa para calcular o valor de uma viagem.

Voce tera 5 variaveis. Sendo elas:
1 - Preco etanol;
2 - Preco gasolina; 
3 - O tipo de combustivel que esta no seu carro;
4 - Gasto medio de combustivel que esta no seu carro;
5 - Distancia em KM da viagem;

Imprima no console o valor que sera gasto para realizar esta viagem. */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Etanol';
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGastoEtanol = precoEtanol * litrosConsumidos;
    console.log('O valor total gasto de combustivel foi de R$' + valorGastoEtanol.toFixed(2));
} else {
    const valorGastoGasolina = precoGasolina * litrosConsumidos;
    console.log('O valor total gasto de combustivel foi de R$' + valorGastoGasolina.toFixed(2));
}
    