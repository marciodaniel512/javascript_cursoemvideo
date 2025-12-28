function contar(){
    /* Recepção de valores pelo formulário */
    var inicio  = document.querySelector('input#id_inicio').value
    var fim  = document.querySelector('input#id_fim').value
    var passo  = document.querySelector('input#id_passo').value
    var resultado = document.querySelector('div#resultado')
    
    /* Contador para ciclo de repetição*/
    var i  = Number(inicio)
    var f  = Number(fim)
    var p  = Number(passo)

    if(p <= 0){
        alert(`Passo inválido, considerando que o passo é igual a 1.`)
        p = 1
    }

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0)
    {
        //alert(`Erro, precisa preencher todos os campos`)
        resultado.innerHTML = `Impossível contar`
    } else if(inicio < fim) {
       resultado.innerHTML = `Contando: `
       
       /* Contagem progressiva */
       for(var c = i; c <= f; c += p){
        resultado.innerHTML += `\u{1F449} ${c}`
       }
       resultado.innerHTML += `\u{1F3C1}`
    
    } else{
        resultado.innerHTML = `Contando: `
       
        /* Contagem regressiva */
       for(c = i; c >= f; c -= p){
        resultado.innerHTML += `\u{1F449} ${c}`
       }
        resultado.innerHTML += `\u{1F3C1}`
    }
}