function preco(){
    let res = document.getElementById('res')
    
    let anterior = Number(prompt('Qual o preço anterior do produto?'))
    let atual = Number(prompt('Qual o preço atual do produto?'))

    res.innerHTML = `<h2><strong>Analisando os valores informados</strong></h2>`
    res.innerHTML += `<p>O produto custava ${anterior.toFixed(2)} e agora custa ${atual.toFixed(2)}.</p>`

    let dif = Math.abs(atual - anterior);
    let porcentagem = (dif / anterior) * 100;

    if (atual > anterior) {
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>';

        res.innerHTML += `<p>O preço subiu ${dif.toFixed(2)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porcentagem.toFixed(2)}% pra cima.</p>`
    } else if (anterior > atual) {
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'

        res.innerHTML += `<p>O preço caiu ${dif.toFixed(2)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porcentagem.toFixed(2)}% pra baixo.</p>`
    }else {
        res.innerHTML += '<p>O preço do produto permaneceu o mesmo.</p>'
    }
}