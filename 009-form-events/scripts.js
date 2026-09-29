const form = document.querySelector("form")

// podemos usar direto - só que direto assim só leva em consideração o último uso do onsubmit
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #1") //essa mensagem não aparece ao clicar no botão adicionar na página
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #2")
}

//essa é outra forma - considera cada uso do addEventListener
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #3")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #4")
})