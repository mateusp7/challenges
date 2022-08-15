function handleCick() {
    const botao = document.querySelector('[data-api="icon-dice"]');
    const id = document.querySelector('[data-api="id"]');
    const texto = document.querySelector('[data-api="texto"]');
    const linkApi = "https://api.adviceslip.com/advice"
    if(botao) {
        fetch(linkApi)
        .then((response) => {
            if(response.ok) {
                return response.json()
            }else {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
        })
        .then(json => {
            const idApi = json.slip.id;
            const adviceApi = json.slip.advice;
            id.innerText = `ADVICE #${idApi}`;
            texto.innerText = `“${adviceApi}”`;
        })
    }
    botao.addEventListener('click', handleCick);
}
handleCick();
