export default function initMenuHamburger() {
    const menuHamburger = document.querySelector('.icon-hamburger');
    const navegacaoContainer = document.querySelector('.navegacao-container');

    const initMenu = () => {
        navegacaoContainer.classList.toggle('ativo')
    }

    menuHamburger.addEventListener('click', initMenu);
}