function verificar(){
    var ano_atual = new Date().getFullYear()
    var ano_nascimento = window.document.querySelector('input#id_ano').value
    var idade = ano_atual - ano_nascimento
    
    var genero = window.document.querySelector('input#id_masculino').value
    alert(genero)
    
    /*
    if(idade <= -1){
       alert(`Ainda estamos em ${ano_atual} é impossível que a pessoa tenha nascido no ano digitado "${ano_nascimento}"`)
    }/*else{
        if(genero == 'M'){
            window.document.alert(`Detetamos um homem com${idade} anos de idade`)
        }else{
            window.document.alert(`Detetamos uma mulher com${idade} anos de idade`)
        }

    }*/
   //alert(idade)
}

