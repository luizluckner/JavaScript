function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('ano')
    var res = document.getElementById('res')
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        window.alert('[ERROR] Verifique as informações fornecidas')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = anoAtual - anoNasc.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '220px' 
        img.style.height = '220px'
        img.style.borderRadius = '50%'
        img.style.objectFit = 'cover'
        img.style.marginTop = '8px'
        if (sex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'homem-criança.jpg') 
            } else if (idade < 22 ) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 65 ) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src','mulher-criança.jpg')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'mulher-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idoso.jpgw')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}