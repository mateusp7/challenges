const dropdownMenus = document.querySelectorAll('[data-dropdown]');
if(dropdownMenus) {
    dropdownMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })
    })
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('active')
    }
}

function initModalLogin() {
    const botaoAbrirLogin = document.querySelector('[data-modal="login"]');
    const botaoFecharLogin = document.querySelector('[data-modal="fechar"]');
    const modalLogin = document.querySelector('[data-modal="container"]');
    if(botaoAbrirLogin && botaoFecharLogin && modalLogin) {
        function toggleModal(event) {
            event.preventDefault();
            modalLogin.classList.toggle('activeModal');
        }
        
        function cliqueFora(event) {
            if(event.target === this) {
                toggleModal(event);
            }
        }
        
        botaoAbrirLogin.addEventListener('click', toggleModal);
        botaoFecharLogin.addEventListener('click', toggleModal);
        modalLogin.addEventListener('click', cliqueFora);
    }
}
initModalLogin();

const botaoAbrirRegistro = document.querySelector('[data-modal="register"]');
const botaoFecharRegistro = document.querySelector('[data-modal="fecharRegistro"]');
const modalRegistro = document.querySelector('[data-modal="containerRegistro"]');

function toggleModalRegistro(event) {
    event.preventDefault();
    modalRegistro.classList.toggle('activeModal')
}

function cliqueForaRegistro(event) {
    if(event.target === this) {
        toggleModalRegistro(event);
    }
}

botaoAbrirRegistro.addEventListener('click', toggleModalRegistro);
botaoFecharRegistro.addEventListener('click', toggleModalRegistro);
modalRegistro.addEventListener('click', cliqueForaRegistro);


