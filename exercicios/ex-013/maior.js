function maior(){
    let n1 = Number(window.prompt('Digite o primeiro numero: '))
    let n2 = Number(window.prompt('Digite o segundo numero: '))

    let res = document.querySelector('section#res')

    if(n1 > n2){
        res.innerHTML = `<h3>Analisando os valores: <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor è: <mark>${n1}</mark></h3>`
    }else if(n1 < n2){
        res.innerHTML = `<h3>Analisando os valores: <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor è: <mark>${n2}</mark></h3>`
    }else{
        res.innerHTML = `<h3>Analisando os valores: <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são iguais</h3>`
    }
}