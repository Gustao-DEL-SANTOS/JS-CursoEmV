function contar(){
    let ini  = document.getElementById("inicio")
    let fn = document.getElementById("fim")
    let p = document.getElementById("passos")
    var inicio = parseInt(ini.value)
    var final  = parseInt(fn.value)
    var passo  = parseInt(p.value)
    var contagem = document.getElementById("res")
    contagem.innerHTML = ''


    if(ini.value.length == 0 || fn.value.length == 0){
            window.alert("Valor nao preenchido!")

    }else{
        if(passo == 0 || p.value.length == 0){
        window.alert("Passo nao pode ser menor ou igual a zero! \n Passo sera considerado a 1.")
        passo = 1
        }
       
        if(inicio > final){
            contagem.innerHTML += '<p>Contagem Decrescente</p>'
            for(inicio; inicio >= final; inicio-=passo){
                    contagem.innerHTML += `&#128073; ${inicio} \n`
            }
            contagem.innerHTML += `&#128681; \n`
        }else if(inicio < final){
            contagem.innerHTML += '<p>Contagem Crescente</p>'
            for(inicio; inicio <= final; inicio+=passo){
                contagem.innerHTML += `&#128073; ${inicio} \n`
            }
            contagem.innerHTML += `&#128681; \n`
        }
    }

}


