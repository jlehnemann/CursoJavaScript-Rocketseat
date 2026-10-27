/* 
OPERADOR DE COALESCÊNCIA NULA (??)
Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
*/

let content = null
console.log(content ?? "Conteúdo padrão")

content = "José"
console.log(content ?? "Conteúdo padrão")


// Só precisa cuidar com {}, false, pq aí não é null ou undefined

const user = {
    name: "José", 
    avatar: undefined
}

console.log(user.avatar ?? "default.png")

user.avatar = "jose.png"

console.log(user.avatar ?? "default.png")
