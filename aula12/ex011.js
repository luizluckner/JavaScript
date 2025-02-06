var vel = 20
var cinto = false
if (vel <= 30 && cinto == true) {
    console.log(`Ta safe`)
} else if (vel > 30 || cinto == false) {
    console.log(`Ta preso`)
}

var idade = 66
console.log(`Sua idade é ${idade}`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório!`)
}
