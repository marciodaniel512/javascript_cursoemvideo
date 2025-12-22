var hora = new Date().getHours() 

if(hora >= 6 && hora <= 11){
    console.log(`Bom dia. Agora são exatamente ${hora} horas`)
} else if(hora >= 12 && hora <= 17){
    console.log(`Boa tarde. Agora são exatamente ${hora} horas`)
} else if(hora >= 18 && hora <= 23){
    console.log(`Boa noite. Agora são exatamente ${hora} horas`)
} else if(hora >=0 && hora <=5){
    console.log(`Boa madrugada. Agora são exatamente ${hora} horas`)
}else{
    console.log(`A hora informada é inválida`)
}
