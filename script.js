// Elementos principais
const menu = document.getElementById('menu');
const clickSound = new Audio('sounds/click.mp3');

// Pré-carregar o som de clique
function preloadSound() {
    clickSound.load();
}

// Reproduzir som de clique
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Erro ao reproduzir som:', error);
    });
}

// Função de inicialização
function initialize() {
    // Pré-carregar o som
    preloadSound();
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initialize);
