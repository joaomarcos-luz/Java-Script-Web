function pares(){
    let res = document.getElementById('resp')

    let n1 = Number(prompt('Qual o numero de inicial? '))
    let n2 = Number(prompt('Qual o numero final? '))

    res.innerHTML = `<h>De ${n1} a ${n2} quias numeros são <strong>PARES?</strong></h2>`

    while (n1 <= n2){
        if (n1 % 2 == 0){
            res.innerHTML += `<p><mark><u>${n1} é Par.</u></mark> &#x2705; </p>`
        }else{
            res.innerHTML += `<p><strog>${n1} é Impar.</strog> &#x274C; </p>`
        }
        n1++
    }
    res.innerHTML += '&#x1F3C1; '
}