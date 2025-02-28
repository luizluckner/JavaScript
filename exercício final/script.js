let num = document.querySelector("#fnum") //Pega o número inputado pelo usuário
let lista = document.querySelector("#flista") //Acessa o select
let res = document.querySelector("#res") // Acessa a div para colocar os resultados
let valores = [] //Array para armazenar os números imputados

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') //Criando uma option
        item.text = `Valor ${num.value} adicionado` //Adicionando valor ao option
        lista.appendChild(item) //Adicionando a option ao select
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor inválido ou já adicionado na lista')
    }
    num.value = ''
    num.focus()
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('[ERROR] Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}