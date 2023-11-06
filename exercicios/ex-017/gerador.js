function inicio(){
    let min = 1
    let max = 100
    let def = max - min

    let aleatorio = Math.random()
    let num = Math.trunc(def * aleatorio)

    let res = document.getElementById('res')
    res.innerHTML = `<p>Acabei de pensar no numero ${num}</p>`
}

function limpar(){
    let res = document.getElementById('res')
    res.innerHTML = null
}