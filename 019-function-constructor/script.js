/* 
    CONSTRUTOR DE FUNÇÃO:
    permite instanciar objetos
*/


function createProduct(name) {
    const product = {}

    product.name = name
    product.details = function() {
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}   

// Instância é uma cópia do objeto na memória
// O new cria um novo objeto utilizando a estrutura do construtor de função
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

// a comparação abaixo resulta em false - são objetos diferentes - endereços de memória diferentes
console.log(product1 === product2)

// Exemplos de funções construtoras já disponíveis no JS
let myName =  new String("José")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)

// Outra forma de criar construtor de função - o JS recomenda não usar assim e sim fazer em uma classe
function Person(name) {
    this.name = name
    this.message = function() {
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new Person("José")
console.log(person1.name)
person1.message()