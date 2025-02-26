function contar() {
    let start = document.querySelector("#start")
    let end = document.querySelector("#end")
    let step = document.querySelector("#step")
    let res = document.querySelector("#res")

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert(`[ERRO] Faltam dados`)
    } else {
        res.innerHTML = 'Contando: <br>'
        res.style.marginTop = '20px'
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)

        if (i < f) {
            //contagem crescente
            for (let c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (let c = i ; c >= f ; c -= p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}