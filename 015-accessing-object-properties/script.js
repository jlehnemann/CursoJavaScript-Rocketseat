const user = {
    name: "José", 
    message: function() {
        //console.log(`Olá ${user.name}`)

        //pode ser como acima, ou como abaixo
        console.log(`Olá ${this.name}`)
    },
}

user.message()

