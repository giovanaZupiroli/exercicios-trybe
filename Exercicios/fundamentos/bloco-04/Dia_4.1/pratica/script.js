const a = 13;
const b = 55;
let resultado;
// 1
// Adição
console.log (a + b);
// Subtração
console.log (a - b);
// Multiplicação
console.log (a*b);
// Divisão
console.log (a/b);
// Módulo
console.log (a%b);

// 2
const c = 3;
const d = 4;
let alto2;
if (c > d) {
    console.log (alto2 = c)
} else {
   console.log (alto2 = d)
}

// 3
const ee = 5
const ff = 6 
const gg = 7
let alto3;
if (ee > ff && ee > gg) {
    console.log (alto3 = ee)
} else if (ff > ee && ff > gg) {
    console.log (alto3 = ff)
} else {
    console.log (alto3 = gg)
}

// 4
const valor = 0
if (valor > 0) {
    console.log ("Positive");
} else if (valor < 0) {
    console.log ('Negative')
}  else {
    console.log ('Zero')
}

// 5
let ang1 = 60;
let ang2 = 40;
let ang3 = 170; 
if ((ang1 + ang2 + ang3) === 180) {
    console.log ('true');
} else if ((ang1 + ang2 + ang3) > 180 || ((ang1 + ang2 + ang3) < 180)) {
    console.log ('false')
} else {
    console.log ('Erro!')
}

// 6
let peca = "torre"
switch ("Torre".toLowerCase()) {
    case 'bispo': 
        console.log('Bispo = Diagonal.');
    case 'rei':
        console.log ('Rei = Uma casa em qqer direção.')
    case 'cavalo':
        console.log('Cavalo = Em L e pode pular sobre as peças.');
        break;
    case 'rainha':
        console.log('Rainha = em Diagonal, horizontal e vertical.');
        break;   
    case 'torre':
        console.log('Torre = em Horizontal e vertical.');
        break; 
    case 'peão':
        console.log("Peão = Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida!');
        break;   
} 


// 7
const nota = 99;
if (nota < 0 || nota > 100) {
    console.log ('Erro, essa nota não existe.')
}  else if (nota >= 90) {
    console.log ('A')
} else if (nota >= 80) {
    console.log ('B')
} else if (nota >= 70) {
    console.log ('C')
} else if (nota >= 60) {
    console.log ('D')
} else if (nota >= 50) {
    console.log ('E')
} else if (nota < 50) {
    console.log ('F')

} else {
    console.log ('F')
}

// 8
const num1 = 5; 
const num2 = 11;
const num3 = 13;
let par = false;

if ((num1 % 2  === 0 || num2 % 2 === 0 || num3 % 2 === 0 )) {
    par = true;
};
console.log(par);

// 9
const num4 = 10;
const num5 = 11;
const num6 = 14;
let impar = false;
if ((num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0)) {
    impar = true;
};
console.log(impar);

// 10
const custoBruto = 10;
const valorVenda = 100;
if (valorVenda >= 0 && custoBruto >= 0) {
    const custoTotal = custoBruto * 1.2;
    const lucroTotal = (valorVenda - custoTotal) * 1000;
    console.log (lucroTotal);
} else {
    console.log ("Valor de entrada menor que 0.")
}
 