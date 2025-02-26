let num = [8, 1, 7, 4, 2]
num.push(9) //cria um elemento para adicionar este valor na ultima posição
console.log('')
// for (let pos = 0 ; pos < num.length ; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

for (let pos in num) { //forma otimizada para variáveis compostas
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('')
console.log(`O array tem ${num.length} elementos`)
console.log('')