function fatorial(){
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `Calculando ${n}!<br>`

    let c = n
    let fat = 1 

    while (c > 1){
        saida.innerHTML += `${c} x`
        fat *= c
        c--
    }
        saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}