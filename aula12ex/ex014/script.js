function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 18
    msg.innerHTML = `Agora é ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // BOM DIA
        img.scr = 'manha.jpg'
        document.querySelector('body').style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde.jpg'
        document.querySelector('body').style.background = '#b9846f'
    } else  if (hora >= 18 && hora < 24) {
        // BOA NOITE
        img.src = 'noite.jpg'
        document.querySelector('body').style.background = '#515154'
    } else {
        // BOA MADRUGADA
        img.src = 'madrugada.jpg'
        document.querySelector('body').style.background = 'black'
        document.querySelector('h1').style.color = 'white'
        document.querySelector('footer').style.color = 'white'
    }

}