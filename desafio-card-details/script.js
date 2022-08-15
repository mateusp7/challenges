const cardFront = document.querySelectorAll('.card-front figcaption');
const cardBack = document.querySelectorAll('.card-back figcaption')
const formulario = document.querySelector('.formulario');
formulario.addEventListener("keyup", handleChange);

function handleChange(event) {
    const nome = event.target.name;
    const value = event.target.value;
    cardFront.forEach(item => {
        if(item.classList.contains(nome)) {
            item.innerText = value;
            if(item.classList.contains('mes')) {
                item.innerText = value + "/"
            }
        }
    })
    cardBack.forEach(item => {
        if(item.classList.contains(nome)) {
            item.innerText = value;
        }
    })
}