
function inicio() {
    let num = Number(window.prompt('Digite um numero: '))

let tipo 

if (num % 2 == 0){
    tipo = 'Par'
}else{
    tipo = 'impar'
}

let res = document.getElementById('resp')

res.innerHTML = `<h2>O numero <mark>${num}</mark> digitado é <mark>${tipo}</mark></h2>`

}