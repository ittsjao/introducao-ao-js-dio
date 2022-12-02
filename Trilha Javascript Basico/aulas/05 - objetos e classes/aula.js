/* Objetos */

const pessoa = {  
    nome: 'João César',
    idade: 21,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const atributo = 'nome'; /* da pra acessar através de uma string*/

pessoa ['nome'] = 'teste';
pessoa.nome = 'teste';

console.log(pessoa[atributo])

/* Classes */

class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) { /* Quando chamar new sempre passará pelo construtor*/
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const joao = new Pessoa('João César', 21);
const vitor = new Pessoa('Vitor', 30);

/*const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const joao = new Pessoa();
joao.nome = 'João César';
joao.idade = 21;*/

console.log(joao);

vitor.descrever();
joao.descrever();

/* classe é a definição do objeto e instância é a ocorrência */