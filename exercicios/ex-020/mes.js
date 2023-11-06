function estacao(){
    let mes = prompt('Digite o mês em extenso? ')
    let res = document.getElementById('resp')
    let est 

    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            est = 'INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            est = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SEYEMBRO':
            est = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            est = 'OUTONO'
            break
        default:
            est = 'INDEFINIDO'
            break
    }

    res.innerHTML = `<p>No mês de <mark>${mes}</mark> estamos na estação <mark>${est}</mark></p>`
}