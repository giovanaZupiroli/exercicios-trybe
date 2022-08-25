// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(index,cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }
// ----------EXERCICIOS----------------
// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};
for (let persons in names){
    console.log('Olá ' + names[persons]);
}

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for (let index in car) {
    console.log(index, car[index]);
}

function sum(a, b) {
    a + b;
  }
  console.log(sum(1, 2));
  