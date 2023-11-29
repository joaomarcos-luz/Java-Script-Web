function tabuada(){
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`

    let c = 1

    while (c <= 10){
        saida.innerHTML += `<br>${n} x ${c} = <strong>${n * c}</strong>`
        c++
    }
}