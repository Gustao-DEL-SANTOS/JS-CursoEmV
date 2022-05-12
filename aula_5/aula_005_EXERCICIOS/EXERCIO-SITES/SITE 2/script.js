function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if(fano.value.length == 0 || fano.value > ano){

        window.alert("[ERRO] Verifique os dados e tente novamente!")

    }else{

        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src', './img/homem-bebe.png')
            }else if(idade < 21){
                img.setAttribute('src', './img/homem-jovem.png')
            }else if(idade < 50){
                img.setAttribute('src', './img/homem-adulto.png')
            }else{
                img.setAttribute('src', './img/homem-velho.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src', './img/mulher-bebe.png')
            }else if(idade < 21){
                img.setAttribute('src', './img/mulher-jovem.png')
            }else if(idade < 50){
                img.setAttribute('src', './img/mulher-adulto.png')
            }else{
                img.setAttribute('src', './img/mulher-velha.png')
            }
        }

        res.innerHTML = `Detectamos que voce é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}