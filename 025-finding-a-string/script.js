let message = "Estou estudando os fundamentos do JavaScript"

// Obtém a posição da palavra - indexOf é case sensitive - caso não encontre retorna -1
console.log(message.indexOf("fundamentos"))

// Verifica se existe a palavra na string
console.log(message.includes("JavaScript"))

//tbm pode usar com toLowerCase ou toUpperCase para buscar sem case sensitive
console.log(message.toLowerCase().includes("javascript")) //retorna true
console.log(message.includes("HTML")) //retorna false
