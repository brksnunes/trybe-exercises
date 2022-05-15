/*
Obtenha o valor "Serviços" do array menu: 
*/

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log('O index de Portfólio é: ' +indexOfPortfolio);
console.log('O index de Serviços é: ' + menuServices);

//Adicione o valor "Contato" no final do array menu: 
menu.push('Contato');
console.log(menu);

//###############################################
//- Utilize o for para imprimir os elementos da lista groceryList com o console.log(): 
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
}

//- Utilize o for/of para imprimir os elementos da lista names com o console.log(): 
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names){
    console.log(name);
}
/*
███████╗██╗  ██╗███████╗██████╗  ██████╗██╗ ██████╗██╗ ██████╗ ███████╗
██╔════╝╚██╗██╔╝██╔════╝██╔══██╗██╔════╝██║██╔════╝██║██╔═══██╗██╔════╝
█████╗   ╚███╔╝ █████╗  ██████╔╝██║     ██║██║     ██║██║   ██║███████╗
██╔══╝   ██╔██╗ ██╔══╝  ██╔══██╗██║     ██║██║     ██║██║   ██║╚════██║
███████╗██╔╝ ██╗███████╗██║  ██║╚██████╗██║╚██████╗██║╚██████╔╝███████║
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝ ╚═════╝╚═╝ ╚═════╝ ╚══════╝
*/
/*
 ██╗
███║
╚██║
 ██║
 ██║
 ╚═╝
 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();*/
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 for(let number of numbers){
     console.log(number);
 };
 /*
 ██████╗ 
╚════██╗
 █████╔╝
██╔═══╝ 
███████╗
╚══════╝
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let number of numbers){
    sum = sum + number;
}
console.log(sum);

/*
██████╗ 
╚════██╗
 █████╔╝
 ╚═══██╗
██████╔╝
╚═════╝ 
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let number of numbers){
    sum = sum + number;
}
// console.log(sum);
let media = sum / numbers.length;
console.log(media);

/*
██╗  ██╗
██║  ██║
███████║
╚════██║
     ██║
     ╚═╝
Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let number of numbers){
    sum = sum + number;
}
let media = sum / numbers.length;
if(media > 20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}
console.log(media);

/*
███████╗
██╔════╝
███████╗
╚════██║
███████║
╚══════╝
 Utilizando for, descubra qual o maior valor contido no array e imprima-o; */
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let maior = 0;

 for(let index = 0; index < numbers.length; index += 1){
     if(numbers[index] > maior){
         maior = numbers[index];
     }
 }
console.log(maior);

/*
 ██████╗ 
██╔════╝ 
███████╗ 
██╔═══██╗
╚██████╔╝
 ╚═════╝ 
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter = 0;
//numero1 % 2 !=== 0
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        counter += 1;
    }
}
if (counter === 0){
    console.log("Nenhum valor encontrado");
} else {
    console.log(counter);
}
/*
███████╗
╚════██║
    ██╔╝
   ██╔╝ 
   ██║  
   ╚═╝  
Utilizando for, descubra qual o menor valor contido no array e imprima-o; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < menor){
        menor = numbers[index];
    }
}
console.log(menor);

/*
 █████╗ 
██╔══██╗
╚█████╔╝
██╔══██╗
╚█████╔╝
 ╚════╝ 
Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;*/
let newNumbers = [];

for (index = 1; index <= 25; index += 1){
    newNumbers.push(index);
};
console.log(newNumbers);

/*
 █████╗ 
██╔══██╗
╚██████║
 ╚═══██║
 █████╔╝
 ╚════╝ 
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.*/
let newNumbers = [];

for (index = 1; index <= 25; index += 1){
    newNumbers.push(index);
};
for (let index = 0; index < newNumbers.length; index += 1) {
    console.log(newNumbers[index] / 2);
  };
console.log(newNumbers);
