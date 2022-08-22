// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let element of names) {
//     console.log (element);
// }


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1
for (let num of numbers) {
    console.log (num);
}
// 2
let soma = 0
for (val of numbers) {
    soma += val;
}
console.log ('total' + soma);

// 3

const media = soma / numbers.length;
console.log (media);

// 4

if (media > 20) {
    console.log ('Valor maior que 20');
} else {
    console.log ('valor menor ou igual a 20');
}
// 5 

let max = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > max) {
        max = numbers[index];
    }
}
console.log(max);

// 6
let parimpar = 0
for (let indice = 0; indice < numbers.length; indice += 1) {
    if (numbers[indice] % 2 !== 0) {
        parimpar += 1;
    } 
}
if (parimpar === 0) {
    console.log ('nenhum ímpar encontrado');
} else {
    console.log(parimpar);
}

//7

let min = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < min) {
        min = numbers[index];
    }
}
console.log(min);

// 8
let exercicio = [];
for (indice = 1; indice <= 25; indice += 1) { 
    exercicio.push(indice);
}
console.log (exercicio);

// 9 
for (indice = 0; indice < exercicio.length; indice += 1) {
    console.log (exercicio[indice] / 2);
}