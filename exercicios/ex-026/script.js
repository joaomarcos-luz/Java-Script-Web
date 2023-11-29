function contagem(){
    let saida = document.getElementById('saida')
    let n1 = Number(document.getElementById('fn1').value)
    let n2 = Number(document.getElementById('fn2').value)
    let cont 

    saida.innerHTML += `<h2>Contando de ${n1} a ${n2}</h2>`

    if (n1 < n2){
        cont = n1
        while (cont <= n2){
            saida.innerHTML += `${cont} &#x1F449;`
            cont ++
        }
    }else if (n2 < n1){
        cont = n1
        while (cont >= n2){
            saida.innerHTML += `${cont} &#x1F449;`
            cont --
        }
    }else{
        saida.innerHTML = `Não é possivel contar, pois os números são iguais.`
    }
        saida.innerHTML += `&#x1F3C1;`
}