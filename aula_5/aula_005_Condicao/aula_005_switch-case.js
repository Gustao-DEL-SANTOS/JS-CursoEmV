var data = new Date()
var diaSemana = data.getDay()

console.log(diaSemana)
switch (diaSemana){
    case 0:
        console.log(`Hoje e Domingo`)
        break
    case 1:
        console.log(`Hoje e Segunda-feira`)
        break
    case 2:
        console.log(`Hoje e Terca-feira`)
        break
    case 3:
        console.log(`Hoje e Quarta-feira`)
        break
    case 4:
        console.log(`Hoje e Quinta-feira`)
        break
    case 5:
        console.log(`Hoje e Sexta-feira`)
        break
    case 6:
        console.log(`Hoje e Sabado`)
        break
    default:
        console.log(`[ERRO] Dia nao encontrado!`)
        break
    
}




