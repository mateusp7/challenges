export default function initGaleriaImagens() {
    const imagemPrincipal = document.querySelector('[data-galeria="imagem-principal"]');
    const imagens = document.querySelectorAll('[data-galeria="container-imagens"] img')
    const imagensThumbnail = document.querySelectorAll('[data-galeria="container-imagens-thumbnail"] img')
    
    imagensThumbnail.forEach((imagem, index)=> {
        imagem.addEventListener('click', () => {
            imagemPrincipal.src = imagens[index].src
        });
    });
}


