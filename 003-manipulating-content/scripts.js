// Podemos acessar o conteúdo de um elemento, através de suas propriedades

const guest = document.querySelector("#guest-1")



// Também permite atribuir um novo valor
// guest.textContent = "João"
// MAS ATENÇÃO, aqui APAGOU O SPAN, portanto, para não apagar o span

// Para alterar só o conteúdo da span
//const guestMantendoSpan = document.querySelector("#guest-1 span")
//guestMantendoSpan.textContent = "Maria"
//console.log(guestMantendoSpan.textContent)


console.log(guest.textContent) // Retorna o conteúdo visível e oculto
console.log(guest.innerText) // Retorna somente o conteúdo visível
console.log(guest.innerHTML) // Retorna o HTML como texto
