//##### EXERCÍCIOS DO CONTEÚDO #####

// 1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// 2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"

// 3. Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// 4. Altere o valor da nota para verificar se as condições que você implementou funcionam;

//## SWITCH/CASE ##

// 1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.

const nota = 70;
let estado;

if (nota >=80) {
	console.log("Parabéns, você foi aprovada(o)!");
	estado = "aprovada";
} else if (nota < 80 && nota >=60) {
	console.log("Você está na nossa lista de espera");
	estado = "lista";
} else {
	console.log("Você foi reprovada(o)");
	estado = "reprovada";
};


switch (estado) {
	case "aprovada":
		console.log("Parabéns, você foi aprovada(o)!");
		break;
	case "lista":
		console.log("Você está na nossa lista de espera");
		break;
	case "reprovada":
		console.log("Você foi reprovada(o)");
		break;
	default:
		console.log("Não se aplica");
		break;
};
//#######################################################
//#################### EXERCÍCIOS #######################
//#######################################################
// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b):
const a = 0;
const b = 35;
const c = 23;
console.log(a + b);
// Subtração (a - b):
console.log(a - b);
// Multiplicação (a * b)
console.log(a * b);
// Divisão (a / b)
console.log(a / b);
// Módulo (a % b)
console.log(a % b);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}


// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);

}

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
if (a > 0) {
  console.log("¨Positive");
} else if (a < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//
// - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// - Um ângulo será considerado inválido se não tiver um valor positivo.
const angle1 = 40;
const angle2 = 40;
const angle3 = 100;

let sumAngles = angle1 + angle2 + angle3;

let isValid;

if (angle1 > 0 && angle2 > 0 && angle3 > 0){
  isValid = true;
} else {
  isValid = false;
}

if (isValid === true) {
  if (sumAngles === 180) {
    console.log("True");
  } else {
    console.log("False");
  }
} else {
  console.log("Ângulo inválido");
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
const piece = "rei";


switch (piece.toLowerCase()) {
  case "rei":
    console.log("Uma casa, qualquer direção");
    break;
  case "bispo":
    console.log("Diagonal");
    break;
  case "rainha":
    console.log("Diagonal, horizontal e vertical");
    break;
  case "cavalo":
    console.log("Formato de L, pula sobre peças");
    break;
  case "torre":
    console.log("Horizontal e vertical");
    break;
  case "peão":
    console.log("Uma casa para frente");
    break;
  default:
    console.log("Peça inválida");
    break;
};


// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// - Porcentagem >= 90 -> A
// - Porcentagem >= 80 -> B
// - Porcentagem >= 70 -> C
// - Porcentagem >= 60 -> D
// - Porcentagem >= 50 -> E
// - Porcentagem < 50 -> F
// - O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
const nota = 80;

if (nota < 0 || nota > 100){
  console.log("Nota inválida");
}else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80){
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
}else if (nota >= 60) {
  console.log("D");
}else if (nota >= 50) {
  console.log("E");
}else  {
  console.log("F");
}

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false
const numero1 = 77;
const numero2 = 37;
const numero3 = 57;

let par;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0 ){
  par = true;
} else {
  par = false;
}

console.log(par);

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false
const numero1 = 77;
const numero2 = 37;
const numero3 = 57;

let impar;

if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0 ){
  impar = true;
} else {
  impar = false;
}

console.log(impar);

/*
10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

- Atente que, sobre o custo do produto, incide um imposto de 20%.
- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    - valorCustoTotal = valorCusto + impostoSobreOCusto
    - lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/
const custo = 100;
const valorVenda = 155;

let custoTotal = custo + (custo * 0.20);
let totalGeral;
// console.log(custoTotal);

if (custo >= 0 && valorVenda >= 0 && custoTotal >= 0) {
  totalGeral = (valorVenda - custoTotal) * 1000;
  console.log("O total geral é: ", totalGeral);
} else {
  console.log("Valor inválido");
}

/*
11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    INSS (Instituto Nacional do Seguro Social)
        Salário bruto até R$ 1.556,94: alíquota de 8%
        Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    IR (Imposto de Renda)
        Até R$ 1.903,98: isento de imposto de renda
        De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
*/
//########## RESOLUÇÃO DO GABARITO DO COURSE ##########

let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
