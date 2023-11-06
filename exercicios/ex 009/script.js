let contador = 0 
let res = document.getElementById('resposta')

function contar(){
    contador ++
    res.innerHTML = `<p>contador está com <mark>${contador}</mark> cliques</p>`
}

function zerar(){
    contador = 0
    res.innerHTML = null
}