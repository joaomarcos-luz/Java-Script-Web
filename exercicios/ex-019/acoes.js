function inicio(){
    let n1 = Number(prompt('Digite o primeiro numero: '))
    let n2 = Number(prompt('Digite o segundo numero: '))
    let nrs = Number(prompt(`Valores informados: ${n1} e ${n2}.\n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let res = document.getElementById('resp')
    res.innerHTML = `<h2>...Calculando...</h2>`

    switch (nrs){
        case 1:
            res.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break
        case 2:
            res.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3: 
            res.innerHTML += `<p>${n1} X ${n2} = <strong>${n1Xn2}</strong></p>`
            break
        case 4:
            res.innerHTML += `<p>${n1} / ${n2} = <strong>${n1/n2}</strong></p>`
            break
        default:
            res.innerHTML += `<p>Opcão Invalida! Você digitou ${n1} e ${n2} mas não sei oque fazer com eles!</p>`
             break
    }
}