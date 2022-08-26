function corPai(){
let cor = document.getElementById('elementoOndeVoceEsta').parentNode
cor.style.color = 'Red';
}
corPai();

function textoFilhoFilho() {
    let texto = document.getElementById('primeiroFilhoDoFilho');
    texto.innerText = 'Hoje é sexta-feira!';
}
textoFilhoFilho();

let primeiroFilho = document.getElementById('pai').firstElementChild;

let primeiroFilhoOnde = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

let acessarAtencao = document.getElementById('elementoOndeVoceEsta').nextSibling;


let acessarTerceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

let acessarAPartirdePai = document.getElementById('pai').lastElementChild.previousElementSibling;