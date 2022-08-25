// // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };

//   console.log('Bem-vinda, ' + info.personagem);
 
// //   2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 
// console.log(info);

// // 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// for(chaves in info){
//     console.log(chaves);
// }

// // 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for(chaves in info) {
//     console.log(info[chaves]);
// }

// // 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 
// // let info2 = {
// //     personagem: 'Tio Patinhas',
// //     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
// //     nota: 'O último MacPatinhas',
// //     recorrente: 'Sim',
// // };
// // for 

// // 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
        
//       },

//     ],
//   };
//   console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// //   7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   });

// //   🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + ' livros favoritos.');

// FUNÇÕES 
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

// function verificaPalindrome() {
//     let palavra = 'urbano'
//     for (index=0; index <= palavra.length; index += 1) {
//         for (index2 = palavra.length-1; index2 <=palavra.length; index-=1){
//             if (palavra[index] === palavra[index2]){
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// }
// console.log(verificaPalindrome());

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.
// function retorneIndiceMaior(numeros){
//     let maiorIndice = 0;
//     for (let index in numeros) {
//         if (numeros[maiorIndice] < numeros[index]) {
//             maiorIndice = index;
//         } 
//     }
//     return maiorIndice;
// }
// console.log(retorneIndiceMaior([2,3,6,7,10,1]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

// function indiceMenor(numeros) {
//     let menorIndice = 0;
//     for (let index in numeros) {
//         if (numeros[menorIndice] > numeros[index]) {
//             menorIndice = index;
//         }
//     }
//     return menorIndice; 
// }
// console.log(indiceMenor([2,4,6,7,10,0,-3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) { 
        if (maiorPalavra.length < palavras[indice].length) {
            maiorPalavra= palavras[indice];
        }
       
    }
    return maiorPalavra;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
