function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora sao ${hora} horas e ${minutos} minutos`

    if(hora >= 0 && hora < 12){
        //dia
        img.src = 'img/manha.jpg'
        document.body.style.background = '#76335e'
    }else if(hora >= 12 && hora < 18){
        //tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#f0a592'
    }else{
        //noite
        img.src = 'img/noite.jpg'
        document.body.style.background = '#002b43'
    }

}



