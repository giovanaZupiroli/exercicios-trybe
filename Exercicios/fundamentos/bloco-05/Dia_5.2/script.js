// function corPai(){
// let cor = document.getElementById('elementoOndeVoceEsta').parentNode
// cor.style.color = 'Red';
// }
// corPai();

// function textoFilhoFilho() {
//     let texto = document.getElementById('primeiroFilhoDoFilho');
//     texto.innerText = 'Hoje é sexta-feira!';
// }
// textoFilhoFilho();

// let primeiroFilho = document.getElementById('pai').firstElementChild;

// let primeiroFilhoOnde = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// let acessarAtencao = document.getElementById('elementoOndeVoceEsta').nextSibling;


// let acessarTerceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

// let acessarAPartirdePai = document.getElementById('pai').lastElementChild.previousElementSibling;

// // part2

// let criarIrmao = document.querySelector('#pai');
// let novoIrmao = document.createElement('section');
// novoIrmao.id = 'irmaoElementoOndeVoceEsta'
// criarIrmao.appendChild(novoIrmao);



// let criarFilho = document.querySelector('#elementoOndeVoceEsta');
// let novoFilho = document.createElement('section');
// novoFilho.id = 'terceiroFilhoDoFilho';
// criarFilho.appendChild(novoFilho);

// let criaOutroFilho = document.querySelector('#primeiroFilhoDoFilho');
// let novoOutroFilho = document.createElement('section');
// novoOutroFilho.id = 'souONovoOutroFilho';
// criaOutroFilho.appendChild(novoOutroFilho);

// let terceiroFilho = novoOutroFilho.parentElement.parentElement.nextElementSibling;

// let pai = document.getElementById('pai');
//     let todosOsFilhos = pai.childNodes;
//     for (let index = todosOsFilhos.lenght - 1; index >= 0; index -= 1) {
//         let filhoAtual = todosOsFilhos[index];
//         if (filhoAtual.id !== 'elementoOndeVoceEsta') {
//             filhoAtual.remove();
//     }
// }

// let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
// segundoEUltimoFilhoDoFilho.remove();

const pai = document.getElementById('pai');
    const todosOsFilhos = pai.childNodes;

    for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
      const filhoAtual = todosOsFilhos[index];
      if (filhoAtual.id !== 'elementoOndeVoceEsta') {
        filhoAtual.remove();
      }
    }

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
segundoEUltimoFilhoDoFilho.remove(); // Re
