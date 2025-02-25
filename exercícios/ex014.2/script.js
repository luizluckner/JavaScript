function carregar () { 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var boa = document.getElementById('boa')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 13
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
        boa.innerHTML = `Bom dia!`
    } else if (hora >= 12 && hora <= 18)  {
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
        boa.innerHTML = 'Boa tarde!'
    } else if (hora >= 19 && hora < 23) {
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
        boa.innerHTML = 'Boa noite!'
    } else {
        //MADRUGADA
        img.src = 'madrugada.jpg'
        document.body.style.background = '#121212'
        boa.innerHTML = 'Boa madrugada!'
    }
}