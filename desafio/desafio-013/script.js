function notas(){
    let res = document.querySelector('#resp')

    let nome = prompt('Qual é o nome do aluno?')
    let nt1 = Number(prompt(`qual a primeira nota de ${nome}?`))
    let nt2 = Number(prompt(`qual a segunda nota de ${nome}?`))

    let med = (nt1 + nt2) / 2

    res.innerHTML = `<h2>Analisando a situação de <mark class''>${nome}</mark></h2>`
    res.innerHTML += `<p>Com as notas ${nt1} e ${nt2}, <strong>média é ${med}</strong></p>`

    if(med > 60){
        res.innerHTML += `<p>Com média acima de 6.0, o aluno ésta <u class='apro'>APROVADO</u></p>`
    } else if (med >= 30 && med <= 60){
        res.innerHTML += `<p>Com média entre 3.0 e 6.0, o aluno ésta em <u class='recu'>RECUPERAÇÃO</u></p>`
    } else{
        res.innerHTML += `<p>Com média abaixo de 3.0, o aluno ésta <u class='repr'>REPROVADO</u></p>`
    }
}