const { createElement } = require("react")

function gerar(){
    var numero = document.querySelector('input#id_numero').value
    var resultado = document.querySelector('select#id_tabuada')

    if(numero.length == 0){
        alert('Digite um número')
    }else{
        resultado.innerHTML = ''
        for(var cont = 1; cont <= 12; cont++){
            var item = document.createElement('option')
            item.text = `${numero} x ${cont} = ${numero * cont}`
            resultado.appendChild(item)
        }
    }
}