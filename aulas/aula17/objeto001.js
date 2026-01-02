let amigo = {
    nome: 'José',
    idade: 25,
    peso: 82.8,
    falar(){
        console.log(`Olá, eu sou o ${this.nome} estou com ${this.idade} e peso ${this.peso}kg`)
    }
}

console.log(amigo.falar())
