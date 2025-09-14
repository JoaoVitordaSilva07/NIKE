const body = document.querySelector("body")
const tenis = document.querySelector(".imagem-tenis")
const botao = document.querySelector(".botao-carrinho")

function trocarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito")
    
    botao.style.background = cor
    body.style.background = cor
    

    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);

}
