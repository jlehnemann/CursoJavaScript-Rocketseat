let text = "Estudar, Aprender, Praticar"


// O split separa a string
let separate = text.split(", ")
console.log(separate) // retorna um array com as palavras

let message = "Estou aprendendo JavaScript"
console.log(message.split(" "))

// O join une as strings
let joined = separate.join(" - ")
console.log(joined)