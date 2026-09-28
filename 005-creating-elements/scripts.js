const guests = document.querySelector("ul")

//adiciona a classe para pegar a formatação
const newGuest = document.createElement("li")
newGuest.classList.add("guest")

const guestName = document.createElement("span")
guestName.textContent = "Diego"

// Adiciona após o último filho, e também aceita mais de um argumento
newGuest.append(guestName)

// O .prepend adiciona antes do primeiro filho

// O .appendchild aceita apenas um argumento
// .appendChild(guestName)

// Adiciona no ul,
guests.append(newGuest)