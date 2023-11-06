function iniciar(){
    let agora = new Date
    let res = document.querySelector('section#res')
    res.innerHTML = `<p>Oque eu recebi do sistem foi <mark>${agora}</mark></p>`
}