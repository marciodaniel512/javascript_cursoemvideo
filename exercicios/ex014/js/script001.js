function carregar(){    
    var hora = new Date().getHours() 
    var mensagem = window.document.querySelector('div#mensagem').innerHTML = `Agora são ${hora} horas`
    var foto = window.document.querySelector('img#imagem')
    
    
    if(hora >= 5 && hora < 12){
        foto.src="imagens/manha.png"
        document.body.style.background = '#eadf9d' 

    } else if(hora >= 12 && hora < 18){
        foto.src="imagens/tarde.png"
        document.body.style.background = '#f34c22'

    } else if(hora >= 18 && hora < 24){
        foto.src="imagens/noite.png"
        document.body.style.background = '#38638e' 

    } else if(hora < 5){
        foto.src="imagens/noite.png"
        document.body.style.background = '#38638e' 

    } else{
        alert('Houve algum erro no site!')
    }
}