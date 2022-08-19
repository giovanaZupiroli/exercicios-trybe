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
 
// 11
const salarioBruto = 3000;
let salarioLiquido;
let impostoINSS;
let salarioSemINSS;
let impostoRenda;
let aliquotaINSS
let deducaoINSS;

if (salarioBruto <= 1556.94) {
    impostoINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    impostoINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    impostoINSS = salarioBruto * 0.11;
} else {
    impostoINSS = 570.88
}

salarioSemINSS = salarioBruto - impostoINSS;

if (salarioSemINSS <= 1903.98) {
    impostoRenda = 0
    aliquotaINSS = 0
} else if (salarioSemINSS >= 1903.99 && salarioSemINSS <= 2826.65) {
    impostoRenda = salarioSemINSS * 0.075;
    aliquotaINSS = 142.80
} else if (salarioSemINSS >= 2826.66 && salarioSemINSS <= 3751.05) {
    impostoRenda = salarioSemINSS * 0.15;
    aliquotaINSS = 354.80
} else if (salarioSemINSS >= 3751.06 && salarioSemINSS <= 4664.68) {
    impostoRenda = salarioSemINSS * 0.225;
    aliquotaINSS = 636.13
} else {
    impostoRenda = salarioSemINSS * 0.275;
    aliquotaINSS = 869.36
}
deducaoINSS = (impostoRenda - aliquotaINSS);

salarioLiquido = salarioSemINSS - deducaoINSS;

console.log (salarioLiquido);
