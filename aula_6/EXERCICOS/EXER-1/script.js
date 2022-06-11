function contar(){
    var inicio = parseInt(document.getElementById("inicio").value)
    var final  = parseInt(document.getElementById("fim").value)
    var passo  = parseInt(document.getElementById("passos").value)
    var contagem = document.getElementById("res")
    contagem.innerHTML = ''

    if(passo == 0){
        // window.alert("Passo nao pode ser menor ou igual a zero!")
        passo = 1
    }

    if(inicio < 0){
        window.alert("Inicio menor que zero!")
    }else if(final < 0){
        window.alert("Finalizar nao pode ser menor ou igual a zero!")
    }else if(inicio > final){
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






