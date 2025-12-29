function fatorial(numero = 0){
    for(let cont = 0; numero > cont; numero--){
        numero *= numero
    }
    return numero
}

console.log(fatorial(5))