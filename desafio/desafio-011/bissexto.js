function inicio(){
    let  res = document.getElementById('resp')

    let ano = prompt('Em qual ano estamos?')

    if (ano == 0 || isNaN(ano)) {
        window.alert('Informe um ano válido para continuar!')
        } else if (ehBissexto(ano)) {
        res.innerHTML = `<p><mark>${ano} é um ano bissexto.</mark></p>`
        } else {
        res.innerHTML = `<p><mark>${ano} não é um ano bissexto.</mark></p>`
        }

     function ehBissexto(ano) {
        // Um ano bissexto é divisível por 4, exceto anos que são divisíveis por 100, a menos que sejam divisíveis por 400
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    }
}