let lcarros = [5, 8, 9, 2]


console.log(lcarros)
console.log(`${lcarros}`)

lcarros.push(5)
lcarros.push(7)


console.log(`${lcarros}`)

console.log(lcarros.sort())



for (var i = 0; i < lcarros.length; i++)console.log(`Carro numero -> ${lcarros[i]}`)

for(let car in lcarros) console.log(`Carros N: ${lcarros[car]}`)



console.log('Procure o 7')
if(lcarros.indexOf(7) == -1){
    console.log('O numero nao esta na lista!')
}else{
    console.log(`o numero esta na posicao -> ${lcarros.indexOf(7)}`)
}



