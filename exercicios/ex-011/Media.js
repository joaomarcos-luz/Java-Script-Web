function media(){
let nome = window.prompt('Qual deu nome? ')
let n1 = Number(window.prompt(`Primeira nota de ${nome}? `))
let n2 = Number(window.prompt(`Alem de ${n1}, qual foi ao outra nota de ${nome} ? `))

med = (n1 + n2) /2

let msg
if (med >= 60){
    msg = 'Aprovado. Parabéns'
}else{
    msg = 'Reprovado. Tente Novamente'
}

let res = document.getElementById('resultado')

res.innerHTML = `<p>Calculando a media final de <mark>${nome}</mark></P`
res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>`
res.innerHTML += `<p>A media final será <mark>${med}</mark></p>`
res.innerHTML += `<p>A mensagem que temos é: <strong style="color: red;">${msg}</strong></p>`

}