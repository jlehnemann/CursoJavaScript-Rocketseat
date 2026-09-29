const input = document.querySelector("input")

//keydown - quando tecla pressionada, toda e qualquer, até crtl shift etc

/* 
input.addEventListener("keydown", (event) => {
    console.log(event.key)
})
 */

// keypress - quando é tecla tipo caractere pressionada (inclui espaços - pode ser usado pra validação)
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})

// o onchange só registra quando sai do input
input.onchange = () => {
    console.log("O input mudou")
}
