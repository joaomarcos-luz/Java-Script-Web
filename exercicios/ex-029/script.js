function verificarCadastrar() {
    let res = document.getElementById('resp')
    let nom = document.getElementById('nome')
    let cpf = document.getElementById('cpf')
    let nac = document.getElementById('nacimento')

    let nome = nom.
    let insNom = nome.length > 0

    let inCpf = cpf.value.trim()
    let insCpf = inCpf.length === 11

    let nacimento = nac.value.trim()
    let insNac = nacimento.length === 8

    if (insNom && insCpf && insNac) {
        res.innerHTML = '<h2>Cadastro Realizado.</h2>'
    } else {
        res.innerHTML = '<h2>[Err] Verifique os dados preenchidos.</h2>'
    }
}

    
