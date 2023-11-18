function contar(){
    let res = document.getElementById('resposta')

    cont = 10

    res.innerHTML = ''
    res.innerHTML += '<h2>Contagem regresiva de 10 a 1</h2>'

    while (cont >= 1) {
        res.innerHTML += `${cont} &#x1F449`
        cont += -1
    }
    res.innerHTML += '&#x1F3C1'
}