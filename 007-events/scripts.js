// Adiciona um método que vai observar o que vai ocorrer com a janela
window.addEventListener("load", () => {
    console.log("A página foi carregada!")
})

// Sem o window, aí o addEventListener observa os eventos do DOM
addEventListener("click", (e) => {
    e.preventDefault() // usado aqui para quando clica no botão "Adicionar" da página, ele não recarregar ela - o que é comportamento padrão
    // console.log(e) retorna todas as informações do evento

    
    //console.log(e.target) retorna o elemento clicado

    //retorna o conteúdo de texto do elemento clicado
    console.log(e.target.textContent)

})