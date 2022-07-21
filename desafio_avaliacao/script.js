var valorClick = -1;
function initiClick() {
    const numeros = document.querySelectorAll('.numeros span');
    if(numeros.length) {
        function pegarValor() {
            valorClick = +this.innerHTML;
            var resposta = document.getElementById('resposta');
            resposta.innerHTML = `You selected ${valorClick} out for 5`;
        }
        function mudarCor() {
            numeros.forEach((item) => {
                item.classList.remove('ativo');
            })
            this.classList.add('ativo');
        }
        numeros.forEach((item) => {
            item.addEventListener('click', mudarCor);
            item.addEventListener('click', pegarValor);
        })
    }
}
initiClick();

function initThanks() {
    const botao = document.querySelector('.botao');
    const container_inicial = document.querySelector('.container');
    const container_secundario = document.querySelector('.container_agradecimentos');
    const aviso = document.querySelector('.warning')
    function agradecimento() {
        if(valorClick !== -1) {
            container_inicial.classList.add('display_none');
            container_secundario.classList.add('block');
        }else {
            aviso.classList.add('block')
        }
    }
    botao.addEventListener('click', agradecimento);
}
initThanks();

