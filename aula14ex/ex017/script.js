//---
//FOR
//---

function tabuada() {
    let num = document.querySelector("#txtn") //pega o número do usuário
    let tab = document.querySelector("#seltab") //acessa o select para mostrar a tabuada
    
    if (num.value.length == 0) { //valida se o campo esta vazio
        window.alert("[ERROR] Informe um número") //alerta de erro se campo vazio
    } else {
        let n = Number(num.value) //converte a string inputada [numero do usuário] em número
        tab.innerHTML = '' //limpando o campo select antes de entrar no loop para novas consultas de números
        for (var c = 1 ; c <= 10 ; c++) { //definindo a condição de for para mostrar 10x e incrementando 1 a cada volta em C para gerar a tabuada
            let item = document.createElement('option') //criar uma variável para criar um option dentro da tag selection no html
            item.text = `${n} x ${c} = ${n*c}` //informando que o texto dentro de option será este
            item.value = `tab${c}`
            tab.appendChild(item) //adicionando dentro do select tabuada um item option com o texto definido
        }
    }
}

//-----------
//DO -- WHILE
//-----------

// function tabuada() {
//     let num = document.querySelector("#txtn")
//     let tab = document.querySelector("#seltab")

//     if (num.value.length == 0) {
//         window.alert(`[ERROR] Por favor digite um número`)
//         tab.innerHTML = ''
//     } else {
//         let n = Number(num.value)
//         let c = 1
//         tab.innerHTML = ''
//         do {
//             let item = document.createElement('option')
//             item.text = `${n} x ${c} = ${n*c}`
//             item.value = `tab${c}`
//             tab.appendChild(item)
//             c++
//         } while (c <= 10)
//     }
// }

//-----
//WHILE
//-----

// function tabuada() {
//     let num = document.querySelector("#txtn")
//     let tab = document.querySelector("#seltab")

//     if (num.value.length == 0) {
//         window.alert(`[ERROR] Por favor digite um número`)
//         tab.innerHTML = ''
//     } else {
//         let n = Number(num.value)
//         let c = 1
//         tab.innerHTML = ''
//         while (c <= 10) {
//             let item = document.createElement('option')
//             item.text = `${n} x ${c} = ${n*c}`
//             item.value = `tab${c}`
//             tab.appendChild(item)
//             c++
//         }
//     }
// }