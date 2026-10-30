let message = "Estou estudando os fundamentos do JavaScript."

// Substituindo parte de um texto - não altera mensagem original
console.log(message.replace("JavaScript","HTML"))

// Extraindo parte da string (start, end)
console.log(message.slice(0, 5))
console.log(message.slice(6, 30))

// Extrair parte da string de trás pra frente
console.log(message.slice(-11))

// Remoção de espaços em branco apenas no ínicio e no final de uma string - trim()
let textWithSpace = "   Texto de Exemplo   "
console.log(textWithSpace.length)
console.log(textWithSpace.trim().length)