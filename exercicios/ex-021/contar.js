function contador(){
    var res = document.getElementById('resposta')
    var contmin = Number(prompt('Qual o valor inicial da contagem? '))
    var contmax = Number(prompt('Qual o valor Final da contage? '))

    var cont = `${contmin}`

    res.innerHTML = `<h3>Contando de ${contmin} a ${contmax} &#x1F449; </h3>`

    while (cont <= contmax){
        res.innerHTML += `<p><u>${cont}</u></p>`
        cont ++
    }
    res.innerHTML += `&#x1F3C1;`
}