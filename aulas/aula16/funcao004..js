function fatorial(numero = 0){
    let fatorial = 1 
    for(let cont = 0; numero > cont; numero--){
        fatorial *= numero
    }
    return fatorial
}

console.log(fatorial(5))