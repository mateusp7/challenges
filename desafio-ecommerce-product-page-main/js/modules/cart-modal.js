export default function initCartModal() {
    const cartIcon = document.querySelector('[data-produto="cart"]');
    const containerProduto = document.querySelector('[data-container]')
    const containerProdutoValoFinal = document.querySelector('[data-produto="valorFinal"]')
    const quantidadeComprada = document.querySelector('[data-produto="valor"]')
    const cartEmpty = document.querySelector('[data-produto="cart-empty"]')
    const botao = document.querySelector('[data-produto="botao"]');
    const cartDescricoes = document.querySelector('[data-produto="cart-descricoes"]')
    const botaoAddCart = document.querySelector('[data-botao]');
    const handleClick = () => {
        containerProduto.classList.toggle('ativo')
        setInterval(() => {
            if(Number(quantidadeComprada.innerText) === 0) {
                cartEmpty.classList.add('ativo');
                cartDescricoes.classList.remove('ativo');
                botao.classList.remove('ativo');
            }
            else if(Number(quantidadeComprada.innerText) >= 1) {
                cartEmpty.classList.remove('ativo');
                cartDescricoes.classList.add('ativo');
                botao.classList.add('ativo');
                setInterval(() => {
                    containerProdutoValoFinal.innerText = `$125.00 x ${Number(quantidadeComprada.innerText)} = $${Number(quantidadeComprada.innerText * 125.00).toFixed(2)}`;
                })
            }
        },200)
    }
    cartIcon.addEventListener('click', handleClick);
    botaoAddCart.addEventListener('click', handleClick)
}


