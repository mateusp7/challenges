export default function initQuantidadeProduto() {
    const valor = document.getElementById('valor');
    const quantidadeContainer = document.querySelector('[data-quantidade="container"]');
    const quantidadeComprada = document.querySelector('[data-quantidade="cart-conteudo"');
    valor.innerText += 0;
    quantidadeComprada.innerText += 0;
    document.addEventListener('click', (e) => {
        const targetElement = e.target;
        if(targetElement.classList.contains("aumentar")) {
            quantidadeContainer.classList.add('ativo')
            valor.innerText = (Number(valor.innerText) + 1);
        }
        if(targetElement.classList.contains("diminuir")) {
            if(Number(valor.innerText) !== 0){
                valor.innerText = (Number(valor.innerText) - 1);
            }
        }
        if(targetElement.classList.contains("icon-lixeira")){
            valor.innerText = 0;
        }
        if(Number(valor.innerText) === 0) {
            setTimeout(() => {
                quantidadeContainer.classList.remove('ativo')
            }, 200)
        }
        quantidadeComprada.innerText = (Number(valor.innerText));
    })
}

