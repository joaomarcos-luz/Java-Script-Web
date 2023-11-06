let res = document.getElementById('resp')
let computador = 0
let jogador = 0

function inicio(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar(){
    let jogador = Number(window.prompt('Qual seu palpite? '))
    if (computador > jogador){
        res.innerHTML += `<p>Você escolheu ${jogador} o numero é <strong>Maior</strong></p>`
    } else if (computador < jogador){
        res.innerHTML += `<p>Você escolheu ${jogador} o numero é <strong>Menor</strong></p>`
    } else if (computador == jogador){
        res.innerHTML += `<p><strong>Parabêns</strong> você acertou!  o valor sorteado foi ${computador}</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
    }