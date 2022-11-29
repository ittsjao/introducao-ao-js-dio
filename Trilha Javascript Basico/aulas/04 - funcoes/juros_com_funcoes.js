/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta
e a escolha da condicao de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condicao de pagamento escolhida e efetuar o calculo
adequado.

Codigo Condicao de Pagamento:
- A vista Debito, recebe 10% de desconto;
- A vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preco normal de etiqueta sem juros;
- Acima de duas vezes, preco normal de etiqueta mais juros de 10%;
*/

/*
Debito = 1
Dinheiro ou Pix = 2
Dividido ate 2x = 3
Dividido acima de 2x = 4
*/

function aplicarDesconto(valor, desconto) {
   return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const precoEtiqueta = 100;
let formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10))
}

console.log(200 * 0.1);
console.log(10 / 100);