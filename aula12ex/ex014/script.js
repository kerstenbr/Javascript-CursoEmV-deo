function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date
    var hora = data.getHours()
    var minuto = data.getMinutes()
    // msg.innerHTML = `Agora são ${hora}:${minuto}`

    if (hora >= 0 && hora < 12){
        // Bom dia
        msg.innerHTML = `Agora são ${hora}:${minuto}, Bom dia!`
        img.src = "manha.png"
        document.body.style.background = '#69b3b0'
    } else if (hora >= 12 && hora < 18){
        // Boa tarde
        msg.innerHTML = `Agora são ${hora}:${minuto}, Boa tarde!`
        img.src = "tarde.png"
        document.body.style.background = '#edc42f'
    } else {
        // Boa noite
        msg.innerHTML = `Agora são ${hora}:${minuto}, Boa noite!`
        img.src = "noite.png"
        document.body.style.background = '#161714'
    }
}