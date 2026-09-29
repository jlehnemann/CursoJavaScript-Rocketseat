const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    // Para ver todos os eventos
    //console.log(event)

    //mostra propriedade  de distância do topo da lista
    //console.log(ul.scrollTop)

    if (ul.scrollTop > 300) {
        //console.log("Fim da lista")

        //faz retornar pro topo da lista
        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })

    }
})

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("CLICOU!")
})