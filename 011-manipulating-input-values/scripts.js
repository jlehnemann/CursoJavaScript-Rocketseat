const input = document.querySelector("input")
const form = DOMStringList.querySelector("form")

/* 
input.addEventListener("input", () => {
    //capta o input todo
    const value = input.value

    const regex = /\D+/g

    // Verifica se dá com o padrão de RegEx definido - no caso só pega letras
    //console.log(value.match(regex))

    // Testa se atende ao padrão - mesmo que parcialmente!
    //const isValid = regex.test(regex)
    //console.log(isValid)
})
 */

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const regex = /\D+/g

    // Capta todo o valor do input
    const value = input.value

    /*
    Substitui caracteres do input - no caso, tira por "", ou seja remove outros caracteres
    const value = input.value.replace(regex, "")
    console.log(value)
    */

    if (!regex.test(value)) {
        alert("Valor inválido, digite corretamente!")
    }
})