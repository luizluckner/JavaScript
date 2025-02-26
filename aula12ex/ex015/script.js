var data = new Date()
var ano = data.getFullYear()
var res = document.querySelector('#res')
function verificar() {
    var formAno = document.querySelector('#txtano')
    var idade = ano - Number (formAno.value)
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert(`[ERROR] Verifique o ano inputado!`)
    } else {
        var sex = document.getElementsByName('radsex')
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gender = 'Homem'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homem-criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'home-idoso.jpg')
            }
        } else {
            gender = 'Mulher'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulher-criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'mulher-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${gender} com ${idade} anos`)
        res.appendChild(img) 
    }
}