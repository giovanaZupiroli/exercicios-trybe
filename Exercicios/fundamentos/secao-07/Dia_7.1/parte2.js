// const factorial = (n) => {
//   let result = n === 0 || n === 1 ? 1 : n*factorial(n-1);
//   return result;
// }

// console.log(`Esse é o fatorial ${factorial(4)}`)

// const longestWord = (text) => {
//   const wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';

//   for (const word of wordArray) {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       result = word;
//     }

//   }
//   return result;
// }

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));