let numL = []
let sLista = document.getElementById('lista')
let respostas = document.getElementById('res')
let cor = 0

function addLista(){
    let num = document.getElementById('txtNumero')
    
    if (num.value.length == 0) {
        alert('Adicione um numero!')
    }else if (num.value > 100){
        alert('Só é permitido numeros de 1 a 100')
    }else{
        let v = parseInt(num.value)
        if(numL.indexOf(v) != -1) {
            alert('Numero ja esta adicionado!')
        }else{
            let ls = document.createElement('option')
            ls.text = `Valor ${num.value} adicionado`
            ls.value = `id${num.value}`
            if(cor == 0){
                ls.className = 'cori'
                cor++
            }else{
                ls.className = 'corp'
                cor--
            }
            sLista.appendChild(ls)
            numL.push(parseInt(num.value))
        }
        console.log(numL)
    }

    respostas.innerHTML = ''
}

function finalizar(){
    // sLista.innerHTML = ''
    respostas.innerHTML += `<p>Ao todo temos ${totalDeNum()} números cadastrados</p>`
    respostas.innerHTML += `<p>O maior valor informado é ${maiorValor()}</p>`
    respostas.innerHTML += `<p>O menor valor informado é ${menorValor()}</p>`
    respostas.innerHTML += `<p>Somando todos os valores temos ${somaTotal()} </p>`
    respostas.innerHTML += `<p>A média dos valores é de ${media(somaTotal())} </p>`
}

function totalDeNum(){
    return numL.length
}

function media(){
    return somaTotal() / numL.length
}

function somaTotal(){
    let s = 0
        for(let i in numL){
            s += numL[i]
        }
    return s
}

function maiorValor(){
    let maior = numL[0]
    for(let i in numL){
        if(numL[i] > maior){
            maior = numL[i]
        }
    }
    return maior
}

function menorValor(){
    let menor = numL[0]
    for(let i in numL){
        if(numL[i] < menor){
            menor = numL[i]
        }
    }
    return menor
}
