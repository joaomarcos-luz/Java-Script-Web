function contar(){
    var res = document.getElementById('saida')

    res.innerHTML = '<h2>Numeros pares de 1 a 10</h2>'

    let cont = 2

    while (cont <= 10) {
        res.innerHTML += `${cont} &#x1F449;`
        cont += 2 //Cont = cont + 2
    }
    res.innerHTML += ' &#x1F3C1;'
}