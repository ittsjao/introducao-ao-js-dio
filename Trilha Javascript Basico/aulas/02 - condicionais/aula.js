
const numero = 4;
const numeroPar = (numero % 2) === 0;

if (numero === 0) {
    console.log('O numero e invalido');
} else if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}
