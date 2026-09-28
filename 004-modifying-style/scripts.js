const input = document.querySelector("#name")


// Adiciona a classe
input.classList.add("input-error")

// Remove a classe
input.classList.remove("input-error")

// O toggle altera como se fosse um interruptor 
// Se não tiver a classe, adiciona. Se tem, remove.
input.classList.toggle("input-error")

const button = document.querySelector("button") // veja que aqui só pegamos pela tag

button.style.backgroundColor = "red"