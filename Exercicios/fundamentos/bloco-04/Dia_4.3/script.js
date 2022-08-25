// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let numero = 10;
let resultado = numero;

for (i = 1; i <=10; i = i + 1) {
    resultado *= i
} 
console.log (resultado);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let palavra = 'tryber';
let invertida = '';

for (i = palavra.length -1; i >=0; i= i - 1 ) {
    invertida += palavra[i];
}
console.log(invertida);

// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if ( array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}
console.log (maiorPalavra);

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    } 
}
console.log (menorPalavra);

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let maiorPrimo = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
        let ePrimo = true;
    for (let atualDivisor = 2; atualDivisor < numeroAtual; atualDivisor += 1) {
        if (numeroAtual % atualDivisor === 0) {
            ePrimo = false;
        }
    } 
    if (ePrimo){
        maiorPrimo = numeroAtual;
    }
}

console.log(maiorPrimo);

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
let n = 5;
let asteriscos = "*";
let linha = '';

// for (let index = 0; index < n; index +=1) {
//     linha = linha + asteriscos;
// }; console.log(linha);
// for (let index= 0; index < n; index += 1) {
    // console.log(linha);
// };

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
let size = 5;


// for (let index = 0; index <= size; index += 1) {
//     console.log(linha)
//     linha = linha + asteriscos;
// }; 

// 3- Agora inverta o lado do triângulo. Por exemplo:
let espacos = n-1
for (let index = 0; index < n; index += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
        if (columnIndex < espacos) {
            linha = linha + ' ';
        } else {
            linha = linha + asteriscos;
        }
    }
    console.log(linha);
    linha = '';
    espacos -= 1;
 }
   
