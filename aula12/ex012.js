var agora = new Date()
var h = agora.getHours()
console.log(`Agora são ${h} horas`)
if (h >= 6 && h < 12) {
    console.log(`Bom dia!`)
} else if (h >= 12 && h < 18) {
    console.log(`Boa tarde`)
} else if (h >= 18 && h <= 24){
    console.log(`Boa noite`)
} else {
    console.log(`Agora é madrugada!`)
}