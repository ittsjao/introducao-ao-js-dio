function escrevaNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if(idade >= 18) {
        console.log('É maior de 18 anos');
    } else {
        console.log('É menor de idade');
    }
}

verificarIdade(13);