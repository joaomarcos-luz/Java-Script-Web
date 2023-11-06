function calcular(){
    let agora = new Date
    let ano = agora.getFullYear()

    let nasc = Number(window.prompt('Em que ano você nasceu? '))
    let idade = ano - nasc

    let res = document.getElementById('res')
    res.innerHTML = `<p>Quem nasceu em <mark>${nasc}</mark> vai completar <mark>${idade}</mark> anos em <mark>${ano}</mark></p>`

}