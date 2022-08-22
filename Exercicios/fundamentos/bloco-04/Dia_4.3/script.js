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