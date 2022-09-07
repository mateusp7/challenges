const botao = document.querySelector('.botao');
const tracos = document.querySelectorAll('.traco')
function handleClick(){
    tracos.forEach(traco => {
        if(traco.classList.contains('ativo')) {
            traco.classList.remove('ativo')
            traco.classList.add('fechado')
        }else {
            traco.classList.add('ativo')
            traco.classList.remove('fechado')
        }
    })
}