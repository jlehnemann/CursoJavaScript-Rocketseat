// Cria um objeto vazio
const obj = {}
console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos
const user = {
    email: "jose@email.com",
    age: 18,
    name: {
        first_name: "José",
        surname: "Garcia",
    },
    address: {
        street: "Rua X",
        number: 23,
        city: "Porto Alegre",
        postal_code: "12345-015",
    },
    message: function() {
        console.log("Oi José")
    },
}

// Acessando propriedades e métodos usando a notação de ponto
console.log(user.email)

// Acessando propriedades de objetos
console.log(user.name.first_name)

// Executa o método do objeto
user.message()

// Notação de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()

