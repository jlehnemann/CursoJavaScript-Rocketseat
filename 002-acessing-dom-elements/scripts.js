//Abrir HTML com live server, inspecionar o console

// Visualizar o conteúdo do document - permite selecionar trechos e exibir no console
// console.log(document)

// Obter o title da página
console.log(document.title)

// Acessar o elemento pelo ID (SELETOR ID)
const guest2 = document.getElementById("guest-2")
console.log(guest2)

// Mostra as propriedades do objeto
console.dir(guest2)

// Acessar elemento com class (seletor class)
const guestsByClass =  document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o primeiro elemento da lista
console.log(guestsByClass.item(0))
console.log(guestsByClass[0])

// Selecionar lista de elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)