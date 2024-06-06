
let carro = document.getElementById('carro').value
let marca = document.getElementById('marca').value
let ano = document.getElementById('ano').value

let res = document.getElementById('res')
let res2 = document.getElementById('res2')

gravar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let telefone = document.getElementById('telefone') .value

    const dados = {
        nome: nome,
        idade: idade,
        telefone: telefone
    }

    localStorage.setItem("dados", JSON.stringify(dados))
    const voltar = JSON.parse(localStorage.getItem('dados'))

    res.innerHTML = voltar.nome + "<br>" + voltar.idade + "<br>"/ + voltar.telefone

})

gravar2.addEventListener('click', ()=>{
    let carro = document.getElementById('carro').value
    let marca = document.getElementById('marca').value
    let ano = document.getElementById('ano') .value

    const dados = {
        carro: carro,
        marca: marca,
        ano: ano
    }

    sessionStorage.setItem("dados", JSON.stringify(dados))
    const voltar = JSON.parse(localStorage.getItem('dados'))

    res2.innerHTML = voltar.carro + 
                    voltar.idade +
                    voltar.ano

})


