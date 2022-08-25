function exercicioUm() {
    let parag = document.getElementsByTagName('p')[1]; 
    parag.innerHTML = 'Saber codar que nem um hacker!!';
} 
exercicioUm();


function exercicioDois() {
    let fundoUm = document.getElementsByClassName('main-content')[0];
    fundoUm.style.background = "rgb(76,164,109)";
    
    }
exercicioDois();

function exercicioTres () {
    let fundoDois = document.getElementsByClassName('center-content')[0];
    fundoDois.style.background = "white";
}
exercicioTres();

function exercicioQuatro() {
    let correcao = document.getElementsByClassName('title')[0];
    correcao.innerText = 'Exercício 5.1 - JavaScript';
}
exercicioQuatro();