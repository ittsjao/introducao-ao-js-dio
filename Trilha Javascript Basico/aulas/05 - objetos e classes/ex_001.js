/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Km rodado.
    Crie um método que dado a quantidade de Km e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
    */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distancia, precoCombustivel) {
        return  distancia * this.gastoMedioPorKm * precoCombustivel;

    }
}

const uno = new Carro('Fiat', 'Pretp', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Verde', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));