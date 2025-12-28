function verificar(){
    var ano_atual = new Date().getFullYear()
    var ano_nascimento = window.document.querySelector('input#id_ano').value
    var idade = ano_atual - ano_nascimento
    var foto = window.document.querySelector('div#foto')
    var sexo = window.document.getElementsByName('n_sexo')
    var img = document.createElement('img')
    img.setAttribute('id', 'id_foto')

    if(idade < 0 || ano_nascimento > ano_atual){
       alert(`Ainda estamos em ${ano_atual} é impossível que a pessoa tenha nascido no ano digitado "${ano_nascimento}"`)

    } else if(idade > 130){
        alert('O limite humano não chega a essa idade. Verifique se digitou o ano corretamente')
    
    }else{
        if(sexo[0].checked){
            var genero = 'Homem'
            img.setAttribute('src', 'imagens/homem.png')
      
        }else{
            var genero = 'Mulher'
            img.setAttribute('src', 'imagens/mulher.png')
      
        }
            foto.style.textAlign = 'center'
            foto.innerHTML = `Detetamos ${genero} com ${idade} com anos de idade`
            img.style.width = "200px"
            img.style.height = "200px"       
            foto.appendChild(img)
    }
}