/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

IMC em amdultos Condição:
- Abaixo de 18.5 Abaixo de peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

const peso = 79;
const altura = 1.86;
let imc = peso / Math.pow(altura, 2);

if (imc < 18.5){
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25){
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30){
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40){
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}