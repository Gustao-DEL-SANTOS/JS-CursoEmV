function contar(){
    var inicio = parseInt(document.getElementById("inicio").value)
    var final  = parseInt(document.getElementById("fim").value)
    var passo  = parseInt(document.getElementById("passos").value)
    var contagem = document.getElementById("res")
    contagem.innerHTML = ''

        if(inicio < 0){
            window.alert("Inicio menor que zero!")
        }else if(inicio > final){
            window.alert("Inicio nao pode ser maior que o final!")
        }else if(passo <= 0){
            window.alert("Passo nao pode ser menor ou igual a zero!")
        }else if(passo > final){
            window.alert("Passo nao pode ser maior que finalizar!")
        }else if(final <= 0){
            window.alert("Finalizar nao pode ser menor ou igual a zero!")
        }else{
             for(inicio; inicio <= final; inicio+=passo){
                if(inicio+passo > final){
                    contagem.innerHTML += `&#128681; \n`
                }else{
                    contagem.innerHTML += `&#128073; ${inicio} \n`
                }
                
            }
        }
   

}






