

function voto(){
    var idade = 66
    console.log(`Sua idade: ${idade} então`)

    if(idade < 16){
        console.log(`Nao vota!`)
    }else if(idade < 18 || idade > 65){
        console.log(`Voto opcional`)
    }else{
        console.log(`Voto obrigatório !`)
    }
}


function hora(){
    var agora = new Date()
    var h = agora.getHours()
    var m = agora.getMinutes()
    console.log(`Hora atual ${h}:${m}`)

    if(h < 12){
        console.log(`Bom dia!`)
    }else if(h <= 18){
        console.log(`Boa tarde`)
    }else{
        console.log(`Boa noite!`)
    }

}


hora()
