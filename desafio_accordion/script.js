const js_accordion = document.querySelectorAll('.js-accordion dt')

js_accordion[0].classList.add('ativo');
js_accordion[0].nextElementSibling.classList.add('ativo');

function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo');
}

js_accordion.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})