/*
    3) Crie uma classe para representar carros.
    Para cada carro usaremos os atributos marca, cor, ano.
*/

class Carro {
    nome;
    marca;
    cor;
    ano;

    constructor (nome, marca, cor, ano) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
    }

    descrever(ano) {
        console.log(`O carro de ${this.ano} é o mais novo`)
    }
}
    function compararAno(c1, c2) {
        if (c1.ano > c2.ano) {
            console.log(`O ${c1.nome} é o mais novo`);
        } else {
            console.log(`O ${c2.nome} é o mais novo`);
        }
    }

        
const siena = new Carro('Siena', 'Fiat', 'Prata', 2011);
const vectra = new Carro('Vectra', 'Chevrolet', 'Verde musgo', 2000);

compararAno(siena, vectra);