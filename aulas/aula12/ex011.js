var idade = 65
if(idade < 16)
{
    console.log(`A pessoa está com ${idade} anos de idade, ainda não pode votar`)
} else if(idade == 16 || idade == 17 || idade > 64){
    console.log(`A pessoa está com ${idade} anos de idade, o seu voto é opcional`)
} else{
    console.log(`A pessoa está com ${idade} anos de idade, o seu voto é obrigatório`)
}