const product = {
    name: "Teclado", 
    quantity: 100
}


// Acessando a propriedade do objeto
console.log(product.name)
console.log(product.quantity)

// Atualizar o valor de uma propriedade

product.quantity = 90
console.log(product.quantity)

product.name = "Mouse"
console.log(product.name)

// Notação de colchetes

product["quantity"] = 50
console.log(product.quantity)
