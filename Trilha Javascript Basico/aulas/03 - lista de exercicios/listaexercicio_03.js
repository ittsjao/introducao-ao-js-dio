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

const precoEtiqueta = 100;
const condicaoDePagamento = 4;

if (condicaoDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (condicaoDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (condicaoDePagamento === 3){
    console.log(precoEtiqueta);
} else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}