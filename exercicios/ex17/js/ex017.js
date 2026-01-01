/* Declaração de variáveis */
var vetor = []
var numero = document.querySelector('input#id_numero')
var lista = document.querySelector('select#id_tabela')
var resposta = document.querySelector('div#id_resposta')
numero.focus()

/* Função principal */
function adicionar(){
    if(isNumero(numero.value && !inLista(numero.value, vetor))){
        vetor.push(Number(numero.value))
        
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    
    }else{
        alert(`Valor inválido ou já encontrado na lista`)
    }
    numero.value = ''
    numero.focus()

    resposta.innerHTML = `
            Ao todos,  temos <strong>0</strong> números cadastrados <br>
            O maior valor informado foi <strong>0</strong> <br> 
            O menor valor informado foi <strong>0</strong> <br>
            Somando todos os valores, temos <strong>0</strong> <br>
            A média dos valores digitados é <strong>0</strong>
            `
}

function finalizar(){
    if(vetor.length == 0){
        alert('Sem dados para processar, por favor faça a inserção de valores')
        numero.focus()
    } else{
            resposta.innerHTML = `
            Ao todos,  temos <strong>${numerosCadastrados()}</strong> números cadastrados <br>
            O maior valor informado foi <strong>${maiorValor()}</strong> <br> 
            O menor valor informado foi <strong>${menorValor()}</strong> <br>
            Somando todos os valores, temos <strong>${somaDeValores()}</strong> <br>
            A média dos valores digitados é <strong>${mediaDeValores()}</strong>
            `
            }
}

/* Funções auxiliares */
/* Função adicionar() */
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return n
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

/* Função finalizar()*/
function numerosCadastrados(){
    return vetor.length
}

function maiorValor(){
    var maior = vetor[0]
    for(var contador = 0; contador < vetor.length; contador++){
        if(vetor[contador] > maior){
            maior = vetor[contador]
        }
    }
    return maior
}

function menorValor(){
    var menor = vetor[0]
    for(var contador = 0; contador < vetor.length; contador++){
        if(menor == ''){
        } else if(vetor[contador] < menor){
            menor = vetor[contador]
        }
    }
    return menor
}

function somaDeValores(){
    var soma = 0
    for(let contador = 0; contador < vetor.length; contador++){
        soma += vetor[contador]
    }
    return soma
}

function mediaDeValores(){
    var soma = 0
    var media = 0
    for(let contador = 0; contador < vetor.length; contador++){
        soma += vetor[contador]
    }
    media = soma / vetor.length
    return media
}
/*
    Análise para verificação de valores válidos
    if(numero <= 0 || numero >= 101 || numero == ''){
        alert(`Valor inválido ou já existente`)   
*/