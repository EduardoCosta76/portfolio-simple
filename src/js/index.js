/* 
    Objetivo 1 - quando o usuario clicar no botao show more deve abrir os projetos que estao escondidos no html
        Passo 1 - pegar o botao show more no JS para poder verificar quando o usuario clicar em cima dele
        Passo 2 - identificar o clique no botao
        Passo 3 - adicionar a classe ativo nos projetos escondidos

    Objetivo 2 - esconder o botao show more
        Passo 1 - pegar o botao e esconder ele
*/

// Objetivo 1 - quando o usuario clicar no botao show more deve abrir os projetos que estao escondidos no html
// Passo 1 - pegar o botao show more no JS para poder verificar quando o usuario clicar em cima dele


const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe ativo nos projetos escondidos
    mostrarMaisProjetos(); // refatorado

    // Objetivo 2 - esconder o botao show more
    // Passo 1 - pegar o botao e esconder ele    
    esconderBotao(); //refatorado
 
});
function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

