let res2 = document.getElementById('res2')
let res = document.getElementById('res')
let gravar2 = document.getElementById('gravar2')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let telefone = document.getElementById('telefone').value

    console.log(nome , idade , telefone)

    localStorage.setItem("nome",nome)
    localStorage.setItem("idade",idade)
    localStorage.setItem("telefone",telefone)

    res.innerHTML = "o nome é: " + localStorage.getItem("nome") + "<br>"
    res.innerHTML += "o idade é: " + localStorage.getItem("idade") + "<br>"
    res.innerHTML += "o telefone é: " + localStorage.getItem("telefone") + "<br>"
})

gravar2.addEventListener('click', ()=>{
    let carro = document.getElementById('carro').value
    let marca = document.getElementById('marca').value
    let ano = document.getElementById('ano').value

    console.log(carro , marca , ano)

    sessionStorage.setItem("carro",carro)
    sessionStorage.setItem("marca",marca)
    sessionStorage.setItem("ano",ano)

    res2.innerHTML = "o carro é: " + sessionStorage.getItem("carro") + "<br>"
    res2.innerHTML += "a marca é: " + sessionStorage.getItem("marca") + "<br>"
    res2.innerHTML += "o ano é: " + sessionStorage.getItem("ano") + "<br>"
})